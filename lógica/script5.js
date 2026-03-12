let precoItem = 50;
let quantidadeItem = 4;
let desconto = 0.1; 

let valorTotal = precoItem * quantidadeItem;
let valorComDesconto = valorTotal - (valorTotal * desconto);

console.log(valorTotal);
console.log(valorComDesconto);