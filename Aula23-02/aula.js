//Array
//------------------------------------------------------------------------------------------------------------------------------------

let frutas = ["Maça" , "Banana" , "Uva"]
console.log(frutas[0])
console.table(frutas)

//Adicionar iens a array
frutas.push("Morango")
console.table(frutas)

//Remove a ultima posição
frutas.pop()
console.table(frutas)

//Remove na posição indicada
frutas.splice(2);
console.table(frutas);

//Crie uma Array chamado animais e adicione 3 animais

let animais = []
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um animal na Array: ', (animal1) => {
  rl.question('Insira outro animal na Array: ', (Animal2) => {
    rl.question('Insira mais um animal na Array: ', (Animal3) => {
    animais.push(animal1, Animal2 , Animal3)
    console.table(animais)
    rl.close();
    });
  });
});