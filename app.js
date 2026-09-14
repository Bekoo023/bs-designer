(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });

  const art = document.querySelector('.hero-art');
  const sculpture = document.querySelector('.sculpture');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (art && sculpture) {
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      sculpture.style.removeProperty('--rx');
      sculpture.style.removeProperty('--ry');
    };
    art.addEventListener('pointermove', (event) => {
      if (motion.matches || !pointer.matches) return;
      const bounds = art.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        sculpture.style.setProperty('--rx', (-12 - y * 16) + 'deg');
        sculpture.style.setProperty('--ry', (-22 + x * 26) + 'deg');
      });
    });
    art.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
  }

  const form = document.querySelector('#brief-form');
  const status = document.querySelector('#form-status');
  if (!form || !status) return;
  const description = form.elements.namedItem('description');
  description.addEventListener('input', () => {
    description.setCustomValidity('');
    status.textContent = '';
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    description.setCustomValidity(description.value.trim() ? '' : 'Vertel kort iets over je idee.');
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const company = String(data.get('company') || '').trim() || 'Nog in te vullen';
    const text = [
      'PROJECTBRIEF — BS DESIGNER',
      '',
      'Naam of bedrijf: ' + company,
      'Project: ' + String(data.get('projectType') || ''),
      '',
      'MIJN IDEE',
      String(data.get('description') || '').trim(),
      '',
      'OM SAMEN TE BESPREKEN',
      '- Wie wil ik bereiken?',
      '- Welke actie moet een bezoeker kunnen nemen?',
      '- Welke inhoud en beelden heb ik al?',
      '- Wat zijn mijn wensen voor planning en budget?',
      '',
      'Deze brief is op je eigen apparaat gemaakt en niet verstuurd.'
    ].join('\n');
    let url;
    let link;
    try {
      url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
      link = document.createElement('a');
      link.href = url;
      link.download = 'bs-designer-projectbrief.txt';
      document.body.append(link);
      link.click();
      status.textContent = 'Je download is gestart. Bewaar de brief; hij is niet naar BS Designer verstuurd.';
    } catch {
      status.textContent = 'Downloaden lukt niet in deze browser. Kopieer je ingevulde tekst naar een eigen document.';
    } finally {
      if (link) link.remove();
      if (url) window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  });
})();
