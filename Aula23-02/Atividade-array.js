//Crie um array cores com três cores e mostre a segunda cor.
//------------------------------------------------------------------------------------------------------------------------------------

let cores = ["Amarelo","Vermelho","Azul"]
console.log("")
console.log(`Segunda cor: ${cores[1]}`)
console.log("")

//Crie um array numeros com cinco números e mostre o primeiro e o último.
//------------------------------------------------------------------------------------------------------------------------------------

let numeros = ["73","14","89","26","51"]
console.log(`Primeiro Numero: ${numeros[0]} Ultimo Numero: ${numeros[4]}`)
console.log("")

//Crie um array frutas com duas frutas e adicione uma terceira.
//------------------------------------------------------------------------------------------------------------------------------------

let frutas = ["Maça","Banana"]
console.table(frutas)
frutas.push("Uva")
console.table(frutas)

//Crie um array nomes com quatro nomes e remova o último.
//------------------------------------------------------------------------------------------------------------------------------------

let nomes = ["Lucas", "Mariana", "Rafael", "Beatriz"]
console.table(nomes)
nomes.splice(3)
console.log("")
console.log(nomes)

//Crie um array times e mostre quantos itens ele possui.
//------------------------------------------------------------------------------------------------------------------------------------

let times = [
  "Corinthians","Athletico-PR","Atlético-MG","Bahia","Botafogo","Bragantino","Chapecoense","Coritiba","Cruzeiro","Flamengo","Fluminense","Grêmio","Internacional","Mirassol","Palmeiras","Remo","Santos","São Paulo","Vasco","Vitória"
];
console.log("")
console.log(`A Array de Times possui ${times.length} times`)
console.log("")

//Crie um array animais e percorra mostrando todos no console.
//------------------------------------------------------------------------------------------------------------------------------------
let animais2 = ["Cachorro","Gato","Leão","Tigre","Elefante","Girafa","Zebra","Cavalo","Urso","Lobo","Macaco","Canguru","Coelho","Tartaruga","Golfinho","Tubarão","Águia","Coruja","Pinguim","Jacaré"]

console.log("Percorrendo array de animais:")
console.log("")
for (let i = 0; i < animais2.length; i++) {
  console.log(animais2[i]);
}
console.log("")

//Crie um array carros e altere o segundo item.
//------------------------------------------------------------------------------------------------------------------------------------

let carros = ["Chevrolet Onix","Hyundai HB20","Volkswagen Gol","Fiat Argo","Toyota Corolla","Honda Civic","Nissan Versa","Jeep Renegade","Ford Ka","Renault Kwid","Volkswagen Polo","Chevrolet Cruze","Toyota Yaris","Honda HR-V","Jeep Compass","Fiat Toro","Hyundai Creta","Volkswagen T-Cross","Chevrolet Tracker","Ford EcoSport"
];

console.table(carros)
console.log("")
carros[1] = "Porshe 911"
console.log("Segundo valor alterado:")
console.log("")
console.table(carros)
console.log("")

//Crie um array linguagens e verifique se contém "JavaScript".
//------------------------------------------------------------------------------------------------------------------------------------

let linguagens = [
  "JavaScript","Python","Java","C","C++","C#","Ruby","Go","Rust","PHP","TypeScript","Swift","Kotlin","Scala","Perl","Haskell","Dart","Lua","Objective-C","R"
];
if(linguagens.includes("JavaScript")){
    console.log("Sim, há JavaScript na Array")
    console.log("")
}
else{
    console.log("Não há JavaScript na Array")
    console.log("")
}

//Crie um array valores e mostre a soma de todos os números.
//------------------------------------------------------------------------------------------------------------------------------------

let numeros2 = [42, 7, 89, 16, 55, 23, 91, 3, 68, 34];
let soma = 0;

for (let i = 0; i < numeros2.length; i++) {
  soma += numeros2[i];
}

console.log(`A soma dos numeros da array é de ${soma}`); 
console.log("")

//Crie um array vazio tarefas, adicione três tarefas e exiba numeradas.
//------------------------------------------------------------------------------------------------------------------------------------

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tarefas = [];
const limite = 3; 

function adicionarTarefa(n) {
  if (n < limite) {
    rl.question(`Adicione a tarefa ${n + 1}: `, (tarefa) => {
      tarefas.push(`${n + 1}. ${tarefa}`);
      adicionarTarefa(n + 1); 
    });
  } else {
    console.log("\nTarefas Adicionadas:");
    for (let i = 0; i < tarefas.length; i++) {
      console.log(tarefas[i]);
    }
    rl.close();
  }
}

adicionarTarefa(0);

