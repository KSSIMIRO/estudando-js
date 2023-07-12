// function somar(n1, n2) { // Entrada
//     let soma = n1 + n2; // Processamento
//     return soma; // Saida
// }

// function dividir(num, den) {
//     if(den == 0)
//         return; // Retorno vazio é válido
//     return (num / den);
// }

// const num = dividir(22, 0);
// console.log(num);

// callback -> Função que é passada como parametro de outra função

// let numError = 0;

// function requisicaoParaBanco(callbackSuccess, callbackError) {
//     let resultados = 0;
//     for(let i = 0; i < 10000000; i++) { // requisição feita para o servidor (simulação)
//         resultados += i;
//         if(i === -100000) { //Aqui gerou um erro
//             callbackError();
//         }
//     }
//     callbackSuccess(resultados);
// }

// function sucesso(res){
//     console.log("Ta ai os resultados")
//     console.log(res)
// }

// function erro() {
//     numError++
//     console.log("Houve um erro A Companhia SoulCode pede descupas!");
// }

// requisicaoParaBanco(sucesso, erro); // nessa parte a função "erro" substitui o "callbackError" como parte da função



// Função Anônima

// setInterval(teste, 2000);

// passar parametros para a função anonima
// setTimeout(function(n1, n2) { a cada 2000 milisegundos ele irá executar a função anônima
//     console.log("Olá, Mundo!")
// }, 3000, 18, 20);

// setTimeout(function() { // após 3000 milisegundos ele irá executar a função anônima
//     console.log("Olá, Mundo!")
// }, 3000);

// Arrow Functions -> Funções de Seta -> Funções Anônimas

// setTimeout(() => {
//     console.log("SetTimeout com Função Arrow");
// }, 2000);

// parametros => escopo/instrução
// (resultado, requisicao) => {
//     console.log(resultado + " " + requisicao);
//     return 0;
// }

// Resrando a utilização dos arrow functions
function teste(callback) {
    let valor = callback(130);
    console.log(valor)
}

// Primeira forma de executar "teste" (Função expressão)
function vezes2(numero) {
    return (numero * 2);
}
teste(vezes2)

// Segunda forma de executar "teste" (Função Anônima)
teste(function(numero) {
    return (numero * 2);
});

// Terceira forma de executar "teste" (Função Arrow) - Modo 1
teste((numero) => {
    return (numero * 2);
});

// Terceira forma de executar "teste" (Função Arrow) - Modo 2
teste(numero => (numero * 2));

setTimeout(_ => console.log("Olá, Mundo"), 3000);