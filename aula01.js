var msg = "Olá mundo!";
var meuPeso = 83.5;
let minhaAltura = 1.75;
let minhaIdade = 39;
let souBooleano = true;
let souNula = null;

const PI = 3.1415;
const TAXA = 0.5;

souNula = "Deixei de ser nulo";

function exibirDados() {
    const resultado = document.getElementById('resultado');
    let html = '';

    html += `<div class="secao show">
        <h3>📝 Variáveis (var e let)</h3>
        <div class="resultado-item">Mensagem: ${msg}</div>
        <div class="resultado-item">Peso: ${meuPeso} Kg</div>
        <div class="resultado-item">Altura: ${minhaAltura} m</div>
        <div class="resultado-item">Idade: ${minhaIdade} anos</div>
    </div>`;

    html += `<div class="secao show">
        <h3>🔢 Tipos de Dados</h3>
        <div class="resultado-item">Boolean: ${souBooleano}</div>
        <div class="resultado-item">Null modificado: ${souNula}</div>
    </div>`;

    html += `<div class="secao show">
        <h3>🔒 Constantes (const)</h3>
        <div class="resultado-item">PI: ${PI}</div>
        <div class="resultado-item">Taxa de Juros: ${TAXA}</div>
    </div>`;

    html += `<div class="secao show">
        <h3>📊 Tipos (typeof)</h3>
        <div class="resultado-item">msg: ${typeof msg}</div>
        <div class="resultado-item">meuPeso: ${typeof meuPeso}</div>
        <div class="resultado-item">souBooleano: ${typeof souBooleano}</div>
        <div class="resultado-item">PI: ${typeof PI}</div>
    </div>`;

    resultado.innerHTML = html;

    console.log('📝 Variáveis:', { msg, meuPeso, minhaAltura, minhaIdade });
    console.log('🔢 Tipos:', { souBooleano, souNula });
    console.log('🔒 Constantes:', { PI, TAXA });
    console.log('📊 Typeof:', {
        msg: typeof msg,
        meuPeso: typeof meuPeso,
        souBooleano: typeof souBooleano,
        PI: typeof PI
    });
}
