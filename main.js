/* ChessMaster — cabeçalho, rodapé e tabuleiro compartilhados */
const PAGES = [
  ['index', 'Início'], ['historia', 'História'], ['regras', 'Regras'],
  ['estrategias', 'Estratégias'], ['sobre', 'Sobre']
];

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  const current = el.dataset.page;
  const links = PAGES.map(([id, label]) =>
    `<li class="nav-item"><a class="nav-link${id === current ? ' active' : ''}" href="${id}.html"${id === current ? ' aria-current="page"' : ''}>${label}</a></li>`
  ).join('');
  el.innerHTML = `
  <nav class="navbar navbar-expand-lg sticky-top cm-nav">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <span class="brand-knight" aria-hidden="true">♞</span>
        <span><span class="brand-name">ChessMaster</span><small class="brand-tag">Aprenda. Pratique. Evolua.</small></span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Abrir menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto gap-lg-1">${links}</ul>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (el) el.innerHTML = `<footer class="cm-foot"><b aria-hidden="true">♛</b>O xadrez: um jogo, infinitas possibilidades.</footer>`;
}

function renderBoard() {
  const el = document.getElementById('board');
  if (!el) return;
  const rows = ['rnbqkbnr', 'pppppppp', '        ', '        ', '        ', '        ', 'PPPPPPPP', 'RNBQKBNR'];
  const glyph = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
  let html = '';
  rows.forEach((row, r) => [...row].forEach((ch, c) => {
    const shade = (r + c) % 2 === 0 ? 'l' : 'd';
    const piece = ch === ' ' ? '' :
      `<span class="${ch === ch.toLowerCase() ? 'b' : 'w'}">${glyph[ch.toLowerCase()]}\uFE0E</span>`;
    html += `<div class="sq ${shade}">${piece}</div>`;
  }));
  el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  renderBoard();
});
