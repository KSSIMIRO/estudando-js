const sem = document.querySelector("#semaforo");
const red = document.querySelector("#vermelho");
const ama = document.querySelector("#amarelo");
const green = document.querySelector("#verde");
const auto = document.querySelector("#auto");

const imagens = [
    "./imagens/vermelho.png",
    "./imagens/amarelo.png",
    "./imagens/verde.png"
];

let indice = 1;
let interval;

red.addEventListener("click", () => {
    sem.src = imagens[0];
    clearInterval(interval);
});

ama.addEventListener("click", () => {
    sem.src = imagens[1];
    clearInterval(interval);
});

green.addEventListener("click", () => {
    sem.src = imagens[2];
    clearInterval(interval);
});


auto.addEventListener("click", () => {
    interval =setInterval(() => {
        sem.src = imagens[indice];
        if(indice == (imagens.length-1)) {
            indice = 0;
        }
        else {
            indice++;
        }
    }, 1000);
});
