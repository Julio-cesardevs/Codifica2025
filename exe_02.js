
// Importa o módulo 'readline' do Node.js, que permite ler entradas do usuário no terminal
const readline = require('readline');

// Cria uma interface para ler a entrada padrão (teclado) e escrever na saída padrão (console)
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será pelo teclado
  output: process.stdout  // Define que a saída será exibida no console
});

// Exibe a pergunta no terminal e espera o usuário digitar uma resposta
rl.question('Digite a sua idade: ', (input) => {
   // Converte o texto digitado em número inteiro
  const idade = parseInt(input);


if(idade <= 12){
  console.log("Você ainda é criança, tá!")
}else if(idade > 12 && idade <= 18){
  console.log("Olha, tá ficando adolencente chato já. hahahahaha")
}else if (idade > 18 && idade <= 65) {
  console.log("Já pode fica Feliz, vai começa a pagar boleto.")
}else if (idade > 65){
  console.log("Já tá aposentado ? cuidado com o golper")
}
rl.close();
});