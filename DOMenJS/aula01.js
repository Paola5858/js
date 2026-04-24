// ===================== AULA 01 =====================

// querySelector - primeira h1
function runQuerySelector() {
  let el = document.getElementById('el-h1');
  el.textContent = 'Novo texto 1';
  flash(el);
  log('log-qs', 'querySelector("h1") → textContent alterado');
}

// querySelectorAll - todos os p
function runQuerySelectorAll() {
  let els = document.querySelectorAll('#aula01 p.demo-el');
  els[0].textContent = 'Novo parágrafo [0]';
  els[1].textContent = 'Novo parágrafo [1]';
  flash(els[0]); flash(els[1]);
  log('log-qsa', `querySelectorAll("p") → NodeList com ${els.length} itens alterados`);
}

// getElementById
function runGetElementById() {
  let el = document.getElementById('el-txt2');
  el.textContent = 'Novo texto 2';
  flash(el);
  log('log-id', 'getElementById("txt2") → elemento único selecionado');
}

// getElementsByClassName + getElementsByTagName
function runClasseTag() {
  let porClasse = document.getElementsByClassName('subtitulo');
  porClasse[0].textContent = 'Novo parágrafo';
  flash(porClasse[0]);

  let porTag = document.getElementsByTagName('h2');
  let h2el = document.getElementById('el-h2');
  h2el.textContent = 'Novo Paragrafo 3';
  flash(h2el);

  log('log-ct', 'ClassName[0] e TagName[0] → ambos alterados');
}

function resetAula01() {
  document.getElementById('el-h1').textContent = 'Texto 1';
  document.getElementById('el-p1').textContent = 'Pagragráfo 1';
  document.getElementById('el-p2').textContent = 'Pagragráfo 2';
  document.getElementById('el-txt2').textContent = 'Texto 2';
  document.getElementById('el-subtitulo').textContent = 'Pagragráfo 1 (classe: subtitulo)';
  document.getElementById('el-h2').textContent = 'Pagragráfo 3';
  ['log-qs','log-qsa','log-id','log-ct'].forEach(id => log(id, 'aguardando...'));
}