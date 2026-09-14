import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const destination = new URL('../dist/', import.meta.url);
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const path of ['index.html', 'privacy.html', 'styles.css', 'app.js', 'assets']) {
  await cp(new URL('../' + path, import.meta.url), new URL(path, destination), { recursive: true });
}
console.log('Static site built: ' + fileURLToPath(destination));
