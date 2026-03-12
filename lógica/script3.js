let temIngresso = true;
let estaComIdadeCerta = true;
let eVip = false;

let podeEntrar = temIngresso && estaComIdadeCerta;

let acessoLounge = eVip || temIngresso;

let estaBloqueado = !temIngresso;