// ===================== AULA 06 =====================
function runAula06() {
  const nome = document.getElementById("nome-player");
  nome.innerText = "paola";
  const itens = document.getElementsByClassName("item-inventario");
  itens[0].style.color = "gold";
  const botao = document.querySelector(".btn-enviar");
  botao.textContent = "Carregando...";
  const todosOsCards = document.querySelectorAll("#aula06 .card");
  todosOsCards.forEach((card) => {
    card.style.border = "2px solid red";
  });
  flash(nome);
  flash(itens[0]);
  flash(botao);
  todosOsCards.forEach(card => flash(card));
  log('log-aula06', 'Código executado: seletores aplicados');
}

function resetAula06() {
  document.getElementById("nome-player").innerText = "Nome do Jogador";
  const itens = document.getElementsByClassName("item-inventario");
  itens[0].style.color = "";
  itens[1].style.color = "";
  document.querySelector(".btn-enviar").textContent = "Enviar";
  const todosOsCards = document.querySelectorAll("#aula06 .card");
  todosOsCards.forEach((card) => {
    card.style.border = "2px solid var(--border)";
  });
  log('log-aula06', 'aguardando...');
}