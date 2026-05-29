const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca";

const cadastrar = async (dados) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error(`http ${response.status}`);
  }

  return response.json();
};

const carregarLista2 = async () => {
  const lista = document.getElementById('lista2');
  if (!lista) return;

  lista.innerHTML = '<li class="empty">carregando...</li>';

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`http ${response.status}`);

    const data = await response.json();
    lista.innerHTML = data.length
      ? data.map(item => `
          <li class="item-card">
            <strong>${item.nome}</strong>
            <p>${item.descricao || 'sem descrição'}</p>
          </li>
        `).join('')
      : '<li class="empty">nenhuma marca encontrada</li>';
  } catch (error) {
    console.error('erro ao buscar lista 2:', error);
    lista.innerHTML = '<li class="empty">erro ao carregar, veja o console</li>';
  }
};

window.addEventListener('DOMContentLoaded', () => {
  carregarLista2();

  const formulario = document.getElementById('formCadastro');
  const campoNome = document.getElementById('campoNome');
  const status = document.getElementById('status');

  if (!formulario || !campoNome || !status) return;

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    if (!nome) {
      status.textContent = 'digite um nome';
      status.classList.remove('error');
      return;
    }

    status.textContent = 'enviando...';
    status.classList.remove('error');

    try {
      await cadastrar({ nome });
      status.textContent = 'enviado com sucesso';
      campoNome.value = '';
      carregarLista2();
    } catch (error) {
      console.error('erro ao cadastrar:', error);
      status.textContent = 'falha ao enviar';
      status.classList.add('error');
    }
  });
});