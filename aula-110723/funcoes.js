// existem 4 tipos de Função sendo elas:

// Funções que recebem parametros
// Funções que não recebem parametros
// Funções que retornam valores
// Funções que não recebem valores

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções que não recebem parametros

// let n1 = 7;
// let n2 = 9;
// function somar() {
//     console.log("Numero 1 é " + n1)
//     console.log("Numero 2 é " + n2)
//     console.log(n1 + n2)
// }
// somar();
// n1 = 23;
// n2 = 5;
// somar();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções que recebem parametros

// function somar1(n1, n2) {
//     console.log("Numero 1 é " + n1)
//     console.log("Numero 2 é " + n2)
//     console.log(n1 + n2)
// }
// somar1(7, 17);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O (n2 = 10) serve para quando o parametro não e definido pelo usuario ele automaticamente coloca o 10 como sendo n2.

// function somar2(n1, n2 = 10) {
//     console.log("Numero 1 é " + n1)
//     console.log("Numero 2 é " + n2)
//     console.log(n1 + n2)
// }
// somar2(30);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções que retornam e não retornam valores

// function somar4(n1, n2 = 10) {
//     console.log("Numero 1 é " + n1)
//     console.log("Numero 2 é " + n2)
//     console.log(n1 + n2)
// }

// como descrito em baixo eu tenho que deixar a função assim, e com isso ele sai de uma função sem retorno para uma função com retorno. O unico jeito de uma função retornar valor e com o return, sem ele  ela não retorna nem um valor.

// function somar4(n1, n2 = 10) {
//     let soma = n1 + n2;
//     return soma;
// }

// ele vai exibir o somar pois eu estou executando ela na linha a baixo e depois ele vai exibir undefinid pois eu não defini o retorno, para definilo basta adicionar o return dai o fulxo da finçao vai parar nele
// let soma = somar4(30, 17);
// console.log(soma);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo professor

// function calc(n1, n2, op = "+") {
//     switch(op) {
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2
//     }
//     return NaN;
// }

// console.log(clac(80, 6)); // 86
// console.log(clac(-56, 9, "-")); // -65
// console.log(clac(-56, 0, "*")); // 0
// console.log(clac(18, 2, "somar")); // NaN
// console.log(clac(56, -12, "-")); // 65

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Entrada 
// Processamento
// Saída

// function triangulo(altura) {
//     for(let i = 1; i <= altura; i++) {
//         let linha = "";
//         for(let j = 0; j < (altura-i); j++){
//             linha += " ";
//         }
//         for(let j = 0; j < i; j++) {
//             linha += "* ";
//         }
//         console.log(linha);
//     }
// }

// triangulo(10);

