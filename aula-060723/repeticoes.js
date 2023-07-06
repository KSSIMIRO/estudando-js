// Estruturas de repetições

// para quando for adicionar só 1 por repetição 
for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

// qunado for adicionar mais de 1 por repetição
for(let numero = 0; numero < 10; numero = numero + 2) {
    console.log(numero);
}

// Contagem regressiva
for(let numero = 10; numero >= 0; numero--) {
    console.log(numero);
}

// for(atribuição; condição; reatribuição) {
//      codigo de repetição 
// }

for (let numero = 0; numero <= 100; numero++) {
    console.log(numero);
}

//loop infinito
let n = 0;
while(n < 17) {
    console.log("SoulCode + Porto");
    n++;
}

// for -> Uma quantidade de repetições determinadas
// while -> Uma quantidade de repetições indeterminadas
// i -> iteração(repetição)

let num = 80;
let eprimo = true;
for(let i = 2; i < num; i++) {
    if(num % i == 0){
        eprimo = false
    }
}

if(eprimo) {
    console.log("É primo!!")
}
else {
    console.log("não é primo")
}