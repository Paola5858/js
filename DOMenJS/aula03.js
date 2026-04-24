// ===================== AULA 03 =====================
function runExercicio() {
  // ① seleção
  let meuTitulo = document.getElementById('ex-titulo');
  // ② manipulação
  meuTitulo.textContent  = 'O DOM FUNCIONOU!';
  meuTitulo.style.color    = 'red';
  meuTitulo.style.fontSize = '50px';
  flash(meuTitulo);
  log('log-ex', 'O botão foi clicado e o título mudou!');
}

function resetExercicio() {
  let el = document.getElementById('ex-titulo');
  el.textContent = 'Texto Original';
  el.style.color = '';
  el.style.fontSize = '';
  log('log-ex', 'aguardando o clique...');
}