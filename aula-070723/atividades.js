// Escreva um programa que imprima os números de 1 a 20 usando um loop for.

for(let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("==================")

// Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.

let a = 0;
let b = 1;
let count = 0;

while (count < 10) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
    count++;
}


console.log("===================")

// Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.

let numero = 100
for (let i = 1; i < numero; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

console.log("====ou assim:====")

// eu não sei qual das duas e para fazer

let numero3 = 100
let soma = 0;
for (let i = 1; i <= numero3; i++) {
    if (!(i % 2 == 0)) {
        soma += i;
    }
}
    console.log(soma);


console.log("==================")

// Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.

let numero2 = 12
for (let i = 1; i <= 10; i++) {
    let resultado = numero2 + i;
    console.log(numero2, "+", i, "=", resultado);
}

console.log("==================")

//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

console.log("==================")
//Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".

linha = "* ";
let lado = 0;
while(lado < 7) {
    console.log(linha);
    linha += "* ";
    lado++
}