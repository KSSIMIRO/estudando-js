// Vetores - Arrays
let nota = 9.6; // variavel simples
let notas = [6.5, 7.8, 9.0]; // Variavel composta
let times = ["BotaFogo", "Gremio", "Flamengo", "Palmeiras"];
let atividades = [true, false, false, true];
let daniel = ["Daniel", 23, "Ensino Superior", true]; // uma má pratica

// console.log(notas.length); // tamanho do vetor
// console.log(typeof nota); // number
// console.log(typeof notas); // object

let pesos = [89.5, 60.0, 45.4, 67.0, 75.3];
// console.log(pesos.length);
// console.log(pesos[0]); // indece -> numero que representa a posição do elemento começando sempre do 0
// console.log(pesos[0] + pesos[1]);
// console.log(pesos);

for(let i = 0; i < pesos.length; i++)  { // imprimir com for
    console.log(pesos[i]); // interar sobre o vetor
}

let operacoes = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2,
];
// como assesar a função
// console.log(operacoes[0](3, 4)); // totalmente válido
console.log(pesos);
pesos[2] = 54.4
console.log(pesos);

// multiplicar todos por 2
// for(let i = 0; i < pesos.length; i++)  { 
//     pesos[i] *= 2;
// }
// console.log(pesos); // after

// Somar todos e multiplicar por 2
// let acumulador = 0;
// for(let i = 0; i < pesos.length; i++)  { 
//     acumulador += pesos[i];
// }
// console.log(acumulador*2);

// quando os valores do vetor
for(let peso of pesos) { // for each -> interar sobre os vetores
    console.log(peso);
}

// quando os indices do vetor
for(let indice in pesos) { // for each -> interar sobre os vetores
    console.log(indice);
    console.log(pesos[indice]);
}