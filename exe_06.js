const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Primeiro lado
rl.question('Digite o valor do lado A: ', (aInput) => {
  const A = parseFloat(aInput);

  // Segundo lado
  rl.question('Digite o valor do lado B: ', (bInput) => {
    const B = parseFloat(bInput);

    // Terceiro lado
    rl.question('Digite o valor do lado C: ', (cInput) => {
      const C = parseFloat(cInput);

      // Verificar se os lados formam um triângulo
      if (A < B + C && B < A + C && C < A + B) {
        console.log('Os lados formam um triângulo.');

        if (A === B && B === C) {
          console.log('Tipo: Triângulo Equilátero');
        } else if (A === B || A === C || B === C) {
          console.log('Tipo: Triângulo Isósceles');
        } else {
          console.log('Tipo: Triângulo Escaleno');
        }
      } else {
        console.log('Os valores fornecidos NÃO formam um triângulo.');
      }

      rl.close();
    });
  });
});
