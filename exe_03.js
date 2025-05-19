
// Importa o módulo 'readline' do Node.js, que permite ler entradas do usuário no terminal
const readline = require('readline');

// Cria uma interface para ler a entrada padrão (teclado) e escrever na saída padrão (console)
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será pelo teclado
  output: process.stdout  // Define que a saída será exibida no console
});

// Exibe a pergunta no terminal e espera o usuário digitar uma resposta
rl.question('Digite a nota de 0 a 10: ', (input) => {
   // Converte o texto digitado em número inteiro
  const nota = parseInt(input);

  if(nota > 5 ){
    console.log("Aprovado!")
  }else if (nota === 1 || nota <= 5) {
    console.log("Recuperação")
  }else{
    console.log("Reprovado")
  }
rl.close();
});
