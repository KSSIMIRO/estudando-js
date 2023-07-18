// window.document -> Objeto que representa o documento HTML
// document.getElementById() -> Busta pelo Id do elemento
// document.getElementsByClassName() -> Busca todos os elementos por class
// document.getElementsByTagName() -> Cusca todos os elementos pelo nome da Tag
// cocument.querySelector() -> Busca dp elemento com bas no seu seletor CSS


// window.document.getElementById("titulo");
let titulo = document.getElementById("titulo"); // é muito utilizado
// let titulo = document.getElementById("#titulo"); // paralelo do getElementoById
let paragrfo = document.getElementsByClassName("paragrafo");
let negritos = document.getElementsByTagName("b");
let inputEmail = document.querySelector("input[type=email]");
let negritoParagrafo = document.querySelector("p b"); // é muito usado hoje
let negritosParagrafo = document.querySelectorAll("p b"); // é muito aplicado hoje

// titulo.align = "center";
// titulo.title = "Titulo Principal";
// titulo.style.color = "green";
// titulo.style.fontSize = "50px";
let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Hoje na aula de JavaScript conversamos sobre DOM. Entendi muita coisa. Da para criar muitas ideias"
console.log(paragrafo.innerText); // conteudo textual do elemento
console.log(paragrafo.innerHTML); // conteudo textual + html do elemento


// uso de classes com JavaScript
let caixa = document.querySelector("#informe");
caixa.classList.add("erro"); // adiciona uma classe
caixa.classList.remove("mensagem"); // remove uma classe
caixa.classList.toggle("atencao"); // adiciona se não existe
caixa.classList.toggle("atencao"); // remove se existir
console.log(caixa);