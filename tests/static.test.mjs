import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { once } from 'node:events';
import { request } from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: fileURLToPath(root) });
process.env.PORT = '0';
process.env.HOST = '127.0.0.1';
const { server } = await import('../scripts/serve.mjs');
if (!server.listening) await once(server, 'listening');
after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
const port = server.address().port;
const origin = 'http://127.0.0.1:' + port;
const outputFiles = ['app.js', 'assets/favicon.svg', 'index.html', 'privacy.html', 'styles.css'];

async function walk(directory, prefix = '') {
  const paths = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = prefix + entry.name;
    if (entry.isDirectory()) paths.push(...await walk(new URL(entry.name + '/', directory), name + '/'));
    else paths.push(name);
  }
  return paths.sort();
}

test('build contains only public assets, byte-for-byte matching source', async () => {
  assert.deepEqual(await walk(new URL('dist/', root)), outputFiles);
  for (const path of outputFiles) {
    assert.deepEqual(await readFile(new URL('dist/' + path, root)), await readFile(new URL(path, root)), path);
  }
});

test('both built pages reference existing local assets and unique internal anchors', async () => {
  for (const path of ['index.html', 'privacy.html']) {
    const html = await readFile(new URL('dist/' + path, root), 'utf8');
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, path + ': duplicate IDs');
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, path + ': one h1');
    for (const [, reference] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (reference.startsWith('#')) assert.ok(ids.includes(reference.slice(1)), reference);
      else {
        const relative = reference === './' ? 'index.html' : reference.replace(/^\.\//, '');
        assert.ok(outputFiles.includes(relative), path + ': unexpected or missing resource ' + reference);
      }
    }
  }
});

test('preview serves each asset with the expected content and security headers', async () => {
  for (const path of outputFiles) {
    const response = await fetch(origin + '/' + path);
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    assert.ok(response.headers.get('content-security-policy').includes("form-action 'none'"));
    const mime = path.endsWith('.html') ? 'text/html' : path.endsWith('.css') ? 'text/css' : path.endsWith('.svg') ? 'image/svg+xml' : 'text/javascript';
    assert.ok(response.headers.get('content-type').startsWith(mime));
    assert.equal(await response.text(), await readFile(new URL(path, root), 'utf8'));
  }
});

test('HEAD returns no body and query strings do not break the homepage', async () => {
  const head = await fetch(origin, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal((await fetch(origin + '/?preview=1')).status, 200);
});

test('preview never exposes repository metadata or accepts form submissions', async () => {
  for (const path of ['/.git/config', '/.env', '/README.md', '/package.json', '/scripts/serve.mjs', '/missing.html']) {
    assert.equal((await fetch(origin + path)).status, 404, path);
  }
  for (const method of ['POST', 'PUT', 'DELETE']) {
    const response = await fetch(origin, { method });
    assert.equal(response.status, 405);
    assert.equal(response.headers.get('allow'), 'GET, HEAD');
  }
});

test('malformed request targets return 400 without crashing the server', async () => {
  const status = await new Promise((resolve, reject) => {
    const req = request({ hostname: '127.0.0.1', port, path: 'http://[', method: 'GET' }, response => {
      response.resume();
      response.on('end', () => resolve(response.statusCode));
    });
    req.setTimeout(3000, () => req.destroy(new Error('Request timed out')));
    req.on('error', reject);
    req.end();
  });
  assert.equal(status, 400);
  assert.equal((await fetch(origin)).status, 200);
});
