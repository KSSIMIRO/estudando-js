// Date -> Data é o objeto que facilita o uso de data com JavaScript
let data = new Date(); // Criar um objeto com base no tempo do sistema
console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());

let agora = Date.now(); // a data e hora atual em milisegundos
let dezMin = 1000 * 60 * 10;
let pouco = agora + dezMin;
console.log(new Date(agora));
console.log(new Date(pouco));

console.log(new Date(2021, 12-1, 7));

const btn = document.querySelector("#enviar");

btn.addEventListener("click", () => {
    const dataCampo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    const  vetorData = valor.split("-").map(n => Number(n));
    const data = new Date(vetorData[0], vetorData[1]-1, vetorData[2]);
    window.alert(data);
})