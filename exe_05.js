const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Primeiro pergunta o peso
rl.question('Digite seu peso (em kg): ', (pesoInput) => {
  const peso = parseFloat(pesoInput); // Usamos parseFloat porque peso pode ter casas decimais

  // Depois pergunta a altura
  rl.question('Digite sua altura (em metros): ', (alturaInput) => {
    const altura = parseFloat(alturaInput);

    // Calcula o IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    rl.close();
  });
});
