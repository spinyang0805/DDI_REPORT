(function () {
  const screens = [...document.querySelectorAll('.screen')].map(s => s.id.slice(2));
  function go(id) {
    if (!screens.includes(id)) id = screens[0];
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('on', s.id === 's-' + id));
    document.querySelectorAll('.nav').forEach(n => n.classList.toggle('on', n.dataset.go === id));
    document.querySelectorAll('.toolbar [data-go]').forEach(n => n.classList.toggle('on', n.dataset.go === id));
    if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
  }
  document.addEventListener('click', e => { const t = e.target.closest('[data-go]'); if (t) go(t.dataset.go); });
  if (new URLSearchParams(location.search).has('shot')) document.body.classList.add('shot');
  go(location.hash.slice(1));
  window.addEventListener('hashchange', () => go(location.hash.slice(1)));
})();
