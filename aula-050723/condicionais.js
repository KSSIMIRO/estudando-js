// Estruturas condicionais
// Consição -> Calculo Lógico
// if - se

// const altura = 1.59
// if(altura >= 1.60) // false
//     console.log("entrou no brinquedo!"); // a instrução é ignorada
// else
//     console.log("Não entrou no brinquedo!"); // a instrução é executada


// let nivelIngles = 6; // 1, 2, 3, 4, 5
// if(nivelIngles == 1)
//     console.log("Nivel Iniciante");
// else if(nivelIngles == 2)
//     console.log("Nivel Basico");
// else if(nivelIngles == 3)
//     console.log("Nivel Intermediario");
// else if(nivelIngles == 4)
//     console.log("Nivel Avançado");
// else if(nivelIngles == 5)
//     console.log("NIvel Fluente");
// else
//     console.log("Nivel de inglês desconhecido");


// let saldo = 1050
// if(saldo > 1000)
//     console.log("Comprar uma bolsa");
// else if(saldo > 200)
//     console.log("comprar um tenis");
// else if(saldo > 100)
//     console.log("Comprar um livro");


// let opcao = "Arquivo";
// if(opcao ==  "Arquivo") {// true or false
//     console.log("Novo, Abrir, Configurações"); // true
// }
// else if(opcao == "Editar") {
//     console.log("Desfazer, Refazer, Copiar");
// }
// else if(opcao == "Ver") {
//     console.log("Buscar, Aparência, Expçorar")
// }


// Escopo -> Bloco de código

// let conseguiu = false;
// let saldo = 150;
// if(saldo > 200) { 
//     console.log("Fez a compra do tenis");
//     conseguiu = true; 
// }
// else {
//     console.log("Sem grana suficiente");
//     conseguiu = false;
// }
// // se 'conseguiu' for falsa ela não vai car nesse if, mas se for verdadeira ira cair tanto no de cima quanto no if a baixo 
// if(conseguiu) {
//     console.log("Conseguiu fazer a compra!");
// }

let num1 = 90, num2 = 120, num3 = 300;
if(num1 == num2 || num1 == num3 || num2 == num3) {
    console.log("Os números não podem ser iguais.");
}
else if(num1 > num2 && num1 > num3) {
    if(num2 > num3) {
        console.log(num1 + " > " + num2 + " > " + num3); // num1 > num2 > num3
    }
    else {
        console.log(num1 + " > " + num3 + " > " + num2); // num1 > num3 > num2
    }
}
else if(num2 > num1 && num2 > num3) {
    if(num1 >num3) {
    console.log(num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
    }
    else {
        console.log(num2 + " > " + num3 + " > " + num1); // num2 > num3 > num1
    }
}
else {
    if(num1 >num2) {
        console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > num2
    }
    else {
        console.log(num3 + " > " + num2 + " > " + num1); // num3 > num2 > num1
    }
}