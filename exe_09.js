const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Contagem regressiva de 10 até 1:');

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

rl.close();
