const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca";
const listaItens = document.getElementById('lista');

const atualizarListaNaTela = async () => {
  if (!listaItens) {
    console.warn('elemento #lista não encontrado. apenas carregando dados.');
  }

  if (listaItens) {
    listaItens.innerHTML = '<li class="empty">carregando...</li>';
  }

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`http ${response.status}`);

    const dados = await response.json();
    console.log('marcas carregadas:', dados);

    if (!listaItens) return;

    listaItens.innerHTML = dados.length
      ? dados.map(item => `
          <li class="card">
            <strong>${item.nome || 'marca sem nome'}</strong>
            <p>${item.descricao || 'sem descrição'}</p>
          </li>
        `).join('')
      : '<li class="empty">nenhuma marca encontrada</li>';
  } catch (erro) {
    console.error('erro ao carregar marcas:', erro);
    if (listaItens) {
      listaItens.innerHTML = '<li class="empty">erro ao carregar. veja o console.</li>';
    }
  }
};

atualizarListaNaTela();
