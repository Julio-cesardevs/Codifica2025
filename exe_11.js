const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', (numeroInput) => {
  const numero = parseInt(numeroInput);

  for (let i = 0; i < 10; i++) {
    console.log(numero);
  }

  rl.close();
});
