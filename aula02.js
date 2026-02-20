let n1 = 10; // número inteiro
let n2 = 2; // número inteiro
let n3 = "2"; // string texto

function calcular() {
    const resultado = document.getElementById('resultados');
    let html = '';

    // Variáveis
    html += `<div class="secao">
        <h3>📊 Variáveis</h3>
        <div class="grid-resultados">
            <div class="resultado-item">n1 = ${n1} (número)</div>
            <div class="resultado-item">n2 = ${n2} (número)</div>
            <div class="resultado-item full">n3 = "${n3}" (string)</div>
        </div>
    </div>`;

    // Operadores Aritméticos
    html += `<div class="secao">
        <h3>➕ Operadores Aritméticos</h3>
        <div class="grid-resultados">
            <div class="resultado-item">Adição<br>${n1} + ${n2} = ${n1 + n2}</div>
            <div class="resultado-item">Subtração<br>${n1} - ${n2} = ${n1 - n2}</div>
            <div class="resultado-item">Multiplicação<br>${n1} × ${n2} = ${n1 * n2}</div>
            <div class="resultado-item">Divisão<br>${n1} ÷ ${n2} = ${n1 / n2}</div>
            <div class="resultado-item full">Módulo (resto)<br>${n1} % ${n2} = ${n1 % n2}</div>
        </div>
    </div>`;

    // Operadores de Comparação
    html += `<div class="secao">
        <h3>🔍 Operadores de Comparação</h3>
        <div class="grid-resultados">
            <div class="resultado-item">Igual (==)<br>${n2} == ${n3} = ${n2 == n3 ? '✅' : '❌'}</div>
            <div class="resultado-item">Idêntico (===)<br>${n2} === ${n3} = ${n2 === n3 ? '✅' : '❌'}</div>
            <div class="resultado-item">Diferente (!=)<br>${n2} != ${n3} = ${n2 != n3 ? '✅' : '❌'}</div>
            <div class="resultado-item">Não idêntico (!==)<br>${n2} !== ${n3} = ${n2 !== n3 ? '✅' : '❌'}</div>
        </div>
    </div>`;

    // Operadores Relacionais
    html += `<div class="secao">
        <h3>📏 Operadores Relacionais</h3>
        <div class="grid-resultados">
            <div class="resultado-item">Maior que<br>${n1} > ${n2} = ${n1 > n2 ? '✅' : '❌'}</div>
            <div class="resultado-item">Menor que<br>${n1} < ${n2} = ${n1 < n2 ? '✅' : '❌'}</div>
            <div class="resultado-item">Maior ou igual<br>${n1} >= ${n2} = ${n1 >= n2 ? '✅' : '❌'}</div>
            <div class="resultado-item">Menor ou igual<br>${n1} <= ${n2} = ${n1 <= n2 ? '✅' : '❌'}</div>
        </div>
    </div>`;

    // Operadores Lógicos
    let a = true;
    let b = false;
    html += `<div class="secao">
        <h3>🔗 Operadores Lógicos</h3>
        <div class="grid-resultados">
            <div class="resultado-item">a = ${a}<br>b = ${b}</div>
            <div class="resultado-item">E (&&)<br>${a} && ${b} = ${a && b}</div>
            <div class="resultado-item">OU (||)<br>${a} || ${b} = ${a || b}</div>
            <div class="resultado-item">NÃO (!)<br>!${a} = ${!a}<br>!${b} = ${!b}</div>
        </div>
    </div>`;

    resultado.innerHTML = html;
    resultado.classList.add('show');

    // Console logs
    console.log('➕ Aritméticos:', {
        adicao: n1 + n2,
        subtracao: n1 - n2,
        multiplicacao: n1 * n2,
        divisao: n1 / n2,
        modulo: n1 % n2
    });

    console.log('🔍 Comparação:', {
        igual: n2 == n3,
        identico: n2 === n3,
        diferente: n2 != n3,
        naoIdentico: n2 !== n3
    });

    console.log('📏 Relacionais:', {
        maior: n1 > n2,
        menor: n1 < n2,
        maiorIgual: n1 >= n2,
        menorIgual: n1 <= n2
    });

    console.log('🔗 Lógicos:', {
        e: a && b,
        ou: a || b,
        naoA: !a,
        naoB: !b
    });
}
