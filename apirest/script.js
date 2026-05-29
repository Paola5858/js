const URL = "https://x8ki-letl-twmt.n7.xano.io/api:ijUECDHD/marca";

function renderizarLista() {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (typeof document === 'undefined') {
                return;
            }
            const lista = document.getElementById('lista');
            if (!lista) {
                console.error('Elemento #lista não encontrado.');
                return;
            }
            lista.innerHTML = data.map(item => `
                <li>
                    <h3>${item.nome}</h3>
                    <p>${item.descricao}</p>
                    <img src="${item.imagem}" alt="${item.nome}">
                </li>
            `).join('');
        })
        .catch(error => console.error('Erro:', error));
}

if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('DOMContentLoaded', renderizarLista);
} else {
    renderizarLista();
}