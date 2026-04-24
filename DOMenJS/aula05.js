// ===================== AULA 05 =====================
function runDesafio() {
  let inputNome     = document.getElementById('d5-input');
  let spanResultado = document.getElementById('d5-resultado');
  if (!inputNome.value.trim()) {
    log('log-d5', 'campo vazio — digite um nome primeiro!');
    return;
  }
  spanResultado.textContent = inputNome.value;
  spanResultado.style.color = 'green';
  flash(spanResultado);
  log('log-d5', 'O nome exibido foi: ' + inputNome.value);
}

function resetDesafio() {
  document.getElementById('d5-input').value = '';
  let s = document.getElementById('d5-resultado');
  s.textContent = '...';
  s.style.color = '';
  log('log-d5', 'aguardando o clique...');
}