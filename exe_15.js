const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quantidade = 10;
let a = 0, b = 1;

console.log('Os primeiros 10 números da sequência de Fibonacci são:');
for (let i = 0; i < quantidade; i++) {
  console.log(a);
  const proximo = a + b;
  a = b;
  b = proximo;
}

rl.close();
