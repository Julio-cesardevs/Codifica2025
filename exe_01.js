// Importa o módulo 'readline' do Node.js, que permite ler entradas do usuário no terminal
const readline = require('readline');

// Cria uma interface para ler a entrada padrão (teclado) e escrever na saída padrão (console)
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será pelo teclado
  output: process.stdout  // Define que a saída será exibida no console
});

// Exibe a pergunta no terminal e espera o usuário digitar uma resposta
rl.question('Digite um número: ', (input) => {
   // Converte o texto digitado em número inteiro
  const numeroDigitado = parseInt(input);

  if (isNaN(numeroDigitado)) {
    console.log("Por favor, digite um número válido.");
  } else if (numeroDigitado % 2 === 0) {
    console.log("O número é PAR");
  } else {
    console.log("O número é ÍMPAR");
  }

  // Fecha a interface de leitura (encerra o programa)
  rl.close();
});