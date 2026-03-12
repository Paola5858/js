// Arrays iniciais
let esportes = ["Basquete", "Vôlei", "Futebol"];
let numeroChamada = [10, 20, 30, 5];
let cidades = ["Andradina", "Araçatuba", "Guararapes"];

function mostrarArrays() {
    const resultado = document.getElementById('resultado');
    let html = '';

    // Arrays originais
    html += `<div class="secao show">
        <h3>📋 Arrays Originais</h3>
        <div class="resultado-item">Esportes: ${esportes.join(', ')}</div>
        <div class="resultado-item">Números: ${numeroChamada.join(', ')}</div>
        <div class="resultado-item">Cidades: ${cidades.join(', ')}</div>
    </div>`;

    // Push - adicionar no final
    esportes.push("Handebol");
    numeroChamada.push(40);
    html += `<div class="secao show">
        <h3>➕ Push (adicionar no final)</h3>
        <div class="resultado-item">Esportes: ${esportes.join(', ')}</div>
        <div class="resultado-item">Números: ${numeroChamada.join(', ')}</div>
    </div>`;

    // Pop - remover do final
    esportes.pop();
    numeroChamada.pop();
    html += `<div class="secao show">
        <h3>➖ Pop (remover do final)</h3>
        <div class="resultado-item">Esportes: ${esportes.join(', ')}</div>
        <div class="resultado-item">Números: ${numeroChamada.join(', ')}</div>
    </div>`;

    // Unshift - adicionar no início
    esportes.unshift("Tênis");
    html += `<div class="secao show">
        <h3>⬅️ Unshift (adicionar no início)</h3>
        <div class="resultado-item">Esportes: ${esportes.join(', ')}</div>
    </div>`;

    // Shift - remover do início
    esportes.shift();
    html += `<div class="secao show">
        <h3>➡️ Shift (remover do início)</h3>
        <div class="resultado-item">Esportes: ${esportes.join(', ')}</div>
    </div>`;

    // Splice - remover posições específicas
    let esportesCopia = [...esportes];
    esportesCopia.splice(1, 2);
    html += `<div class="secao show">
        <h3>✂️ Splice (remover posição 1, 2 casas)</h3>
        <div class="resultado-item">Antes: ${esportes.join(', ')}</div>
        <div class="resultado-item">Depois: ${esportesCopia.join(', ')}</div>
    </div>`;

    // Slice - copiar array
    let novasCidades = cidades.slice();
    let novoNumeroChamada = numeroChamada.slice(0, 2);
    html += `<div class="secao show">
        <h3>📄 Slice (copiar array)</h3>
        <div class="resultado-item">Cópia completa: ${novasCidades.join(', ')}</div>
        <div class="resultado-item">Cópia parcial (0 a 2): ${novoNumeroChamada.join(', ')}</div>
    </div>`;

    // Spread Operator
    let novoEsportes = [...esportes, "Futebol Americano", "Peteca"];
    html += `<div class="secao show">
        <h3>🔄 Spread Operator (copiar e adicionar)</h3>
        <div class="resultado-item">Original: ${esportes.join(', ')}</div>
        <div class="resultado-item">Novo: ${novoEsportes.join(', ')}</div>
    </div>`;

    // Matriz
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    html += `<div class="secao show">
        <h3>🔢 Matriz 3x3</h3>
        <div class="matriz-grid">`;
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            html += `<div class="matriz-item">${matriz[i][j]}</div>`;
        }
    }
    
    html += `</div></div>`;

    resultado.innerHTML = html;

    // Console logs
    console.log('📋 Arrays:', { esportes, numeroChamada, cidades });
    console.log('🔢 Matriz:', matriz);
}
