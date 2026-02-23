const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//1- Verifique se um número é positivo ou negativo
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira um número para verificar se ele é positivo ou negativo: ", function(n1) {
    if (n1 > 0){
        console.log(`O número ${n1} é positivo`)
    }
    if (n1 < 0){
        console.log(`O número ${n1} é negativo`)
    }
    if (n1 === 0){
        console.log("O numero é 0")
    }
  rl.close();
});

//2- Maior de idade
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira sua idade: ", function(idade) {
    if(idade >= 18){
        console.log("Você é maior de idade")
    }
    if(idade <18){
        console.log("Você é menor de idade")
    }
    rl.close()
});

//3- Número par ou ímpar
//------------------------------------------------------------------------------------------------------------------------------------

let verificador = null
rl.question("Insira um número: ", function(n3) {
    verificador = n3%2
    if(verificador === 0){
        console.log(`O número ${n3} é par`)
    }
    else{
        console.log(`O número ${n3} é impar`)
    }
  rl.close();
});

//4- Situação do aluno
//------------------------------------------------------------------------------------------------------------------------------------

console.log("Vamos verificar sua nota para ver se você foi aprovado!")
rl.question("Insira sua nota:", function(nota) {
    if(nota >= 6){
        console.log("Parábens você foi aprovado!!")
    }
    if(nota < 6){
        console.log("Infelizmente você foi reprovado")
    }
    rl.close()
});

//5-Pode votar?
//------------------------------------------------------------------------------------------------------------------------------------

console.log("Verifique se você já pode votar nas eleições")
rl.question("Insira sua idade: ", function(idade2){
    if(idade2 >= 16){
        console.log("Você já pode votar nas eleições!!")
    }
    if(idade2 < 16){
        console.log("Você ainda não pode votar nas eleições")
    }
    rl.close
})

//6- Senha correta
//------------------------------------------------------------------------------------------------------------------------------------

let senha = "1234"

rl.question("Insira sua senha para acessar o programa: ",function(senha_input){
    if(senha === senha_input){
        console.log("A senha está correta, bem vindo!")
    }
    else{
        console.log("A senha está incorreta, tente novamente")
    }
    rl.close
})

//7- Temperatura do dia
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira a temperatura de hoje: ", function(temperatura){
    if(temperatura >= "25"){
        console.log("A temperatura está muito quente")
    }
    if(temperatura < 25){
        console.log("Está frio")
    }
    rl.close
})

//8- Altura para brinquedo
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira sua altura(em CM) para verificarmos se você pode usar este brinquedo: ", function(altura){
    if(altura >= "140"){
        console.log("Você pode andar neste brinquedo!!")
    }
    if(altura < "140"){
        console.log("Você não pode andar neste brinquedo")
    }
    rl.close
})

//9- Número positivo, negativo ou zero
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira um número para verificar se ele é positivo ou negativo: ", function(n1) {
    if (n1 > 0){
        console.log(`O número ${n1} é positivo`)
    }
    if (n1 < 0){
        console.log(`O número ${n1} é negativo`)
    }
    if (n1 === 0){
        console.log("O numero é 0")
    }
  rl.close();
});

//10- Classificação de nota
//------------------------------------------------------------------------------------------------------------------------------------

let regra = ["Excelente", "Bom", "Regular", "Reprovado"]

rl.question("Insira sua nota: ", function(nota2){
    if(nota2 >=9){
        console.log(`Sua nota é ${regra[0]}`)
    }
    else if(nota2 === 8 || nota2 === 7){
        console.log(`Sua nota é ${regra[1]}`)
    }
    else if(nota2 === 6){
        console.log(`Sua nota é ${regra[2]}`)
    }
    else if(nota2 <=5){
        console.log(`Você foi ${regra[3]}`)
    }
    rl.close
})

//11- Pode dirigir?
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira sua idade: ", function(idade2) {
    idade2 = Number(idade2);

    if (idade2 >= 18) {
        rl.question("Você possui CNH (sim ou nao): ", function(temCNH) {
            if (temCNH.toLowerCase() === "sim") {
                console.log("Você pode dirigir");
            } else {
                console.log("Você não pode dirigir");
            }
            rl.close();
        });
    } else {
        console.log("Você não pode dirigir");
        rl.close();
    }
});

//12- Desconto na compra
//------------------------------------------------------------------------------------------------------------------------------------

rl.question("Insira o valor da compra: ", function(compra){
    compra = Number(compra)
    if(compra >= 100){
        console.log("VocÊ ganhou um desconto pois sua compra foi maior que R$ 100")
    }
    if(compra < 100){
        console.log("Você ganhou não um desconto pois sua compra foi menor que R$ 100")
    }
    rl.close
});

//13- Login do sistema
//------------------------------------------------------------------------------------------------------------------------------------

let usuarios = {
    "admin": "123"
};

rl.question("Insira seu nome de Usuario: ", function(usuario) {
    usuario = usuario.trim().toLowerCase();

    if (usuarios[usuario]) {

        rl.question("Insira sua senha: ", function(senha) {
            if (senha === usuarios[usuario]) {
                console.log("Bem vindo ao sistema!");
            } else {
                console.log("A senha está incorreta");
            }
            rl.close();
        });

    } else {
        console.log("Este usuário não existe");
        rl.close();
    }
});

//14- Classificação de filme
//------------------------------------------------------------------------------------------------------------------------------------

console.log("Verifique se você pode ver o filme com classificação de 16 anos")
rl.question("Insira sua idade: ", function(idade2){
    if(idade2 >= 16){
        console.log("Você já pode assistir o filme!!")
    }
    if(idade2 < 16){
        console.log("Você ainda não pode assistir o filme :(")
    }
    rl.close
})

//15- Semáforo
//------------------------------------------------------------------------------------------------------------------------------------

let cor = ["verde", "amarelo", "vermelho"];

let indice = Math.floor(Math.random() * cor.length);
let corEscolhida = cor[indice];
if (corEscolhida === "verde"){
    console.log("verde → pode passar")
}
else if (corEscolhida === "amarelo"){
    console.log("amarelo → atenção")
}
else if (corEscolhida === "vermelho"){
    console.log("vermelho → pare")
}