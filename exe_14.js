const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro para calcular o fatorial: ', (input) => {
  const numero = parseInt(input);

  if (numero < 0) {
    console.log('Fatorial não existe para números negativos.');
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`Fatorial de ${numero} é ${fatorial}`);
  }

  rl.close();
});
