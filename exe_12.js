const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para ver a tabuada: ', (numeroInput) => {
  const numero = parseInt(numeroInput);

  console.log(`Tabuada de ${numero}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  rl.close();
});
