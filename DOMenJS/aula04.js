// ===================== AULA 04 =====================
function runDom2() {
  let t = document.getElementById('d2-titulo');
  t.textContent  = 'O DOM FUNCIONOU!';
  t.style.color    = 'red';
  t.style.fontSize = '50px';
  flash(t);
  log('log-d2', 'textContent + style.color + style.fontSize alterados');
}

function resetDom2() {
  let t = document.getElementById('d2-titulo');
  t.textContent = 'Texto Original';
  t.style.color = '';
  t.style.fontSize = '';
  log('log-d2', 'aguardando o clique...');
}

let d3Dark = false;
function runDom3() {
  d3Dark = !d3Dark;
  let box = document.getElementById('d3-box');
  let btn = document.getElementById('d3-btn');
  box.style.background = d3Dark ? '#1a1a1a' : '#fff';
  box.style.color      = d3Dark ? '#f5f0e8' : '#1a1a1a';
  btn.textContent = d3Dark ? '☀️ Alternar Tema' : '🌙 Alternar Tema';
  flash(box);
  log('log-d3', d3Dark
    ? 'classList.toggle → classe "modo-escuro" ADICIONADA'
    : 'classList.toggle → classe "modo-escuro" REMOVIDA');
}