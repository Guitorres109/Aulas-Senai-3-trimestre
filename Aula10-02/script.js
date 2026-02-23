//String
//------------------------------------------------------------------------------------------------------------------------------------

let meuNome = "Guilherme"
let meuSobrenome = "Torres"

console.log(`Meu nome completo é ${meuNome} ${meuSobrenome}`)

let escola = "SESI Guarulhos"
console.log("Minha esola é "+ escola)

let string1 = "Oi"
let string2 = "Bom dia!"

console.log(string1 + ", " + string2)

console.log("Bem vindo a nosso sistema "+ meuNome+" "+ meuSobrenome)

console.log(meuNome.length)

let maiusculas = meuNome.toUpperCase
let minusculas = meuNome.toLowerCase

console.log(maiusculas)
console.log(minusculas)

console.log(`Olá meu nome é ${meuNome} ${meuSobrenome} e moro na cidade de Guarulhos`)

//Numeros
//------------------------------------------------------------------------------------------------------------------------------------

let n1 = 42
let n2 = 58
let soma = n1+n2

console.log(`A soma de ${n1} com ${n2} é ${soma}`)

let sub = n1-n2

console.log(`A subtração de ${n1} com ${n2} é ${sub}`)

let mult = n1*n2

console.log(`A multiplicação de ${n1} com ${n2} é ${mult}`)

let div = n1/n2

console.log(`A divisão de ${n1} com ${n2} é ${div}`)

//Boolean
//------------------------------------------------------------------------------------------------------------------------------------

let ativo = true

if (n1>10){
    ativo = true
}
else {
    ativo = false
}

idade = 16
maiorIdade = null

if (idade<18){
    maiorIdade = false
}
else{
    maiorIdade = true
}

//Array
//------------------------------------------------------------------------------------------------------------------------------------

let frutas = ["Maça" , "Banana" , "Uva"]
console.log(frutas[0])
console.table(frutas)