// Importa o módulo 'readline' do Node.js, que permite ler entradas do usuário no terminal
const readline = require('readline');

// Cria uma interface para ler a entrada padrão (teclado) e escrever na saída padrão (console)
const rl = readline.createInterface({
  input: process.stdin, // Define que a entrada será pelo teclado
  output: process.stdout  // Define que a saída será exibida no console
});
// Exibe a pergunta no terminal e espera o usuário digitar uma resposta
rl.question('Informações do valor nutricional da frutas, escolhar entre: Número 1: Uva, Número 2: Maçã,  Número 3: Pera: ', (input) => {
   // Converte o texto digitado em número inteiro
  const valorNutricional = parseInt(input);

  switch (valorNutricional) {
    case 1:
      console.log("Uva: rica em vitaminas e minerais, como vitamina C e potássio, que ajudam a fortalecer o sistema imunológico e regular a pressão arterial. Além disso, é fonte de antioxidantes, que auxiliam na proteção contra doenças crônicas. ")
      break;
    case 2:
        console.log("Maça: Possuem fibras que ajudam a transportar resíduos para fora do corpo. Além disso, a fruta é fonte de vitamina C que contribui para que o organismo desenvolva resistência. ")
        break;
    case 3:
          console.log("Pera: fonte de fibras, vitaminas e minerais, contribuindo para a saúde do sistema digestivo, do coração e do sistema imunológico. Além disso, a fruta é rica em antioxidantes e possui baixo teor de gordura e sódio")
          break;
    default:
      console.log("Esse número não ta cadastrado")
      break;
  }

rl.close();
});
