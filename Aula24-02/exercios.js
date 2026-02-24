//------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------- Atividade – Funções em JavaScrip -----------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

//1- Crie uma função que receba um número e retorne o dobro.  
//------------------------------------------------------------------------------------------------------------------------------------

function dobro(n1){
    return n1*2
}
console.log(dobro(3))

//2- Crie uma função que receba um número e retorne o triplo  
//------------------------------------------------------------------------------------------------------------------------------------

function triplo(n1){
    return n1*3
}
console.log(triplo(3))

//3- Crie uma função que receba dois números e retorne a soma.
//------------------------------------------------------------------------------------------------------------------------------------

function soma(n1, n2, resultado){
    resultado = n1+n2
    return resultado
}
console.log(soma(3,5))

//4- Crie uma função que receba dois números e retorne a multiplicação.  
//------------------------------------------------------------------------------------------------------------------------------------

function multiplicacao(n1, n2, resultado){
    resultado = n1*n2
    return resultado
}
console.log(multiplicacao(3,5))

//5- Crie uma função que receba um valor em real e converta para dólar.  
//------------------------------------------------------------------------------------------------------------------------------------

function realParaDolar(real, resultado){
    let dolar = 5.18
    resultado = (real/dolar).toFixed(2)
    return console.log(`$${resultado}`)
}
console.log(realParaDolar(200))

//6- Crie uma função que receba um valor em dólar e converta para real.   
//------------------------------------------------------------------------------------------------------------------------------------

function dolarParaReal(dolar, resultado){
    let real = 5.18
    resultado = (dolar*real).toFixed(2)
    return console.log(`R$${resultado}`)
}
console.log(dolarParaReal(200))

//7- Crie uma função que receba um salário e calcule aumento de 10%.     
//------------------------------------------------------------------------------------------------------------------------------------

function aumentoSalario(salario, resultado){
    n = salario*(10/100)
    resultado = salario+n
    return console.log(`O salario será de R$${resultado}`)
}
console.log(aumentoSalario(1200))

//8- Crie uma função que retorne se o número é par.       
//------------------------------------------------------------------------------------------------------------------------------------

function parOuImpar(n1, resultado){
    let verificador = "impar"
    resultado = n1%2
    if(resultado===0){
        verificador = "par"
    }
    return console.log(`O numero ${n1} é ${verificador}`)
}
console.log(parOuImpar(32))

//9- Crie uma função que imprima números de 1 até 10.      
//------------------------------------------------------------------------------------------------------------------------------------

function imprimaNumeros(){
    for(let i=1; i<=10; i++){
        console.log(i)
    }
}

imprimaNumeros()

//10- Crie uma função que receba um limite e imprima até ele.       
//------------------------------------------------------------------------------------------------------------------------------------

function imprimaNumeros(limite){
    for(let i=1; i<=limite; i++){
        console.log(i)
    }
}

imprimaNumeros(16)

//11- Crie uma função que some todos os números até 10.        
//------------------------------------------------------------------------------------------------------------------------------------

function somaTotal(){
    let soma = 0;
    for(let i=1; i<=10; i++){
        soma += i
    }
    return soma
}

console.log(somaTotal())

//12- Crie uma função que conte quantos pares existem até 10.        
//------------------------------------------------------------------------------------------------------------------------------------

function contagemPares(){
    let contador = 0
    for(let i=1; i<=10; i++){
        if (i%2 === 0){
            contador++
        }
    }
    return contador
}

console.log(contagemPares())

//13- Crie uma função que exiba a tabuada de um número.         
//------------------------------------------------------------------------------------------------------------------------------------

function tabuada(n1){
    let contador = 0
    for(let i=1; i<=10; i++){
        contador = n1*i
        console.log(`${n1}x${i}=${contador}`)
    }
}
tabuada(7)

//14- Crie uma função que faça contagem regressiva         
//------------------------------------------------------------------------------------------------------------------------------------

function contagemRegressiva(){
    for(let i=10; i>=1; i--){
        console.log(i)
    }
}
contagemRegressiva()

//15- Crie uma função que encontre o número 27.           
//------------------------------------------------------------------------------------------------------------------------------------

function encontrarNumero(n){
    for(let i=1; i<=n; i++){
        console.log(i)
    }
    console.log(`Numero encontado: ${n}`)
}
encontrarNumero(27)

//16- Crie uma função que some números pares até um limite.             
//------------------------------------------------------------------------------------------------------------------------------------

function somaPares(limite){
    let soma = 0;
    let contador = 0
    for(let i=1; i<=limite; i++){
        if (i%2 === 0){
            contador++
        }
        soma += contador
    }
    return console.log(`A soma dos pares até ${limite} é de ${soma}`)
}
somaPares(10)

//17- Crie uma função que conte números ímpares.             
//------------------------------------------------------------------------------------------------------------------------------------

function contagemImpares(limite){
    let contador = 0
    for(let i=1; i<=limite; i++){
        if (i%2 != 0){
            contador++
        }
    }
    return console.log(`A ${contador} numeros impares até ${limite}`)
}
contagemImpares(15)

//18- Crie uma função que retorne a média de dois números.              
//------------------------------------------------------------------------------------------------------------------------------------

function media(n1,n2){
    let media = ((n1+n2)/2).toFixed(1)
    console.log(`A media de ${n1} e ${n2} é de ${media}`)
    return
}

media(10,1)

//19- Crie uma função que retorne o quadrado de um número.              
//------------------------------------------------------------------------------------------------------------------------------------

function quadrado(n1){
    let quadrado = n1*n1
    console.log(`O quadrado de ${n1} é ${quadrado}`)
    return
}

quadrado(67)

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------