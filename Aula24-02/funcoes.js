//Funções em JavaScript
//Uma função é um bloco de código reutilizável, criado poara utilizar uma tarefa específica
//Estrutura:
// function NomeDaFuncao(parametro1, parametro2){
//     //Codigo que sera executado
//     return resultado
// }
//------------------------------------------------------------------------------------------------------------------------------------

//Exemplo 1 - Somar dois numeros

function somar(a,b){
    return a + b
}
console.log(somar(2,3))

function mediaEscolar(n1,n2,n3,media){
    media = (n1+n2+n3)/3
    return media
}

console.log(mediaEscolar(10,7,4))

function realParaDolar(valorReal, cotacao){
    return valorReal/cotacao
}

console.log(realParaDolar(20,5.17).toFixed(2))

//FOR
//Estrutura:
//For é usado para repetir um trecho de código varias vezes, geralmente sabendo quantas vezes ele deve se repetir
// for(inicio, condição, incremento){
//     //codigo que sera repetido
// }

//Inicio ---> Onde começa
//Condição ---> Até quando repete
//incremento ---> como o valor muda a cada volta