const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let contador = 0;

function lerNumero() {
  rl.question('Digite um número decimal (0 para sair): ', (input) => {
    const numero = parseFloat(input);

    if (numero === 0) {
      if (contador === 0) {
        console.log('Nenhum número foi digitado.');
      } else {
        const media = soma / contador;
        console.log(`Média aritmética: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      soma += numero;
      contador++;
      lerNumero(); // Chama novamente para ler o próximo número
    }
  });
}

lerNumero();
