// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.

let num1 = 0;

if (num1 == 0) {
    console.log("Seu número é igual a zero");
}
else if (num1 >= 1) {
    console.log("Seu número é positivo");
}
else if (num1 <= -1) {
    console.log("Seu númaro é negativo");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.

let idade = 24;
let mensagem;
let calculo = idade >= 18;

mensagem = calculo ? "Ele(a) é maior de idade" : "Ele(a) não é maior de idade"
console.log(mensagem);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Escreva um programa que receba três números e determine qual deles é o maior.

let num2 = 20;
let num3 = 20;
let num6 = 16;

if (num2 > num3 && num2 > num6) {
    console.log(num2 + " É o maior número");
}
else if (num3 > num2 && num3 > num6) {
    console.log(num3 + " É o maior número");
}
else if (num6 > num2 && num6 > num3) {
    console.log(num6 + " É o maior número");
}
else if (num3 == num2 && num3 > num6) {
    console.log(num3 + " É o maior número");
}
else if (num3 == num6 && num3 > num2) {
    console.log(num3 + " É o maior número");
}
else if (num6 == num2 && num6 > num3) {
    console.log(num6 + " É o maior número");
}
else {
    console.log(num6 + " É o maior número");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.

let msn
let num4 = 10;
let num5 = 48;
let produto = (num4 * num4) % 2 == 0;

msn = produto ? "O número é Par" : "O número é Impar"
console.log(msn);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

let dia = "sabado";

if (dia == "sabado" || dia == "domingo") {
    console.log(dia + " É final de semana");
}
else if (dia == "segunda" || dia == "terça" || dia == "quarta" || dia == "quinta" || dia == "sexta") {
    console.log(dia + " É um dia útil");
}
else {
    console.log("Digite o dia da semana tudo minusculo, e so com o primeiro nome como: terça");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).

let dia2 = 1
switch(dia2) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
}