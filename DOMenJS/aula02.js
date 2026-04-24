// ===================== AULA 02 =====================

function runInnerHTML() {
  let titulo = document.getElementById('demo-titulo');
  titulo.innerHTML = 'Coloquei o novo título';
  flash(titulo);
  log('log-html', 'innerHTML = "Coloquei o novo título"');
}

function runSetAttribute() {
  let imagem = document.getElementById('demo-foto2');
  imagem.setAttribute('src', 'https://picsum.photos/200/200');
  flash(imagem);
  log('log-attr', 'setAttribute("src", "https://picsum.photos/200/200")');
}

function runStyleColor() {
  let el = document.getElementById('el-style-demo');
  el.style.color = 'red';
  el.style.backgroundColor = '';
  flash(el);
  log('log-style', 'style.color = "red"');
}

function runStyleBg() {
  let el = document.getElementById('el-style-demo');
  el.style.backgroundColor = 'black';
  el.style.color = 'white';
  flash(el);
  log('log-style', 'style.backgroundColor = "black"');
}

function runStyleBoth() {
  let el = document.getElementById('el-style-demo');
  el.style.color = 'red';
  el.style.backgroundColor = 'black';
  flash(el);
  log('log-style', 'color: red + backgroundColor: black');
}

function setClasse(nome) {
  let el = document.getElementById('el-container');
  el.setAttribute('class', nome);
  el.textContent = `div.container → classe "${nome}" aplicada`;
  flash(el);
  log('log-class', `setAttribute("class", "${nome}") → .${nome} do CSS aplicada`);
}

function removeClasse() {
  let el = document.getElementById('el-container');
  el.removeAttribute('class');
  el.style.color = '';
  el.textContent = 'div.container — sem classe';
  flash(el);
  log('log-class', 'removeAttribute("class") → classe removida');
}

function resetAula02() {
  document.getElementById('demo-titulo').innerHTML = 'Seleção CSS Javascript';
  document.getElementById('demo-titulo').style.color = '';
  document.getElementById('demo-titulo').style.backgroundColor = '';
  document.getElementById('demo-foto').src = '';
  document.getElementById('demo-foto2').src = '';
  document.getElementById('preview-inner').style.backgroundColor = '';
  document.getElementById('el-style-demo').style.color = '';
  document.getElementById('el-style-demo').style.backgroundColor = '';
  document.getElementById('el-style-demo').textContent = 'Seleção CSS Javascript';
  ['log-html','log-attr','log-style','log-class'].forEach(id => log(id, 'aguardando...'));
}