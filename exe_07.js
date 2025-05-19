const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de maçãs compradas: ', (quantidadeInput) => {
  const quantidade = parseInt(quantidadeInput);

  let preco;

  if (quantidade < 12) {
    preco = 0.30;
  } else {
    preco = 0.25;
  }

  const total = quantidade * preco;

  console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);

  rl.close();
});
