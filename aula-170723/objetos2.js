class Pessoa {
    nome;
    idade;
    email;
}

let pessoa = new Pessoa();
pessoa.nome = "Matheus";
pessoa.idade = 19;
pessoa.emai = "matheus@exemple.com";

// console.log(pessoa);

const pessoa2 = { // mesmo objeto pessoa, mas não foi construidopor meio da classe Pessoa
    nome: "Aline", // chave: valor
    idade: 24,
    email: "aline@exemple.com",
    foto: "https://bancodefotos.com/785438945",
    enabled: true
};

// console.log(pessoa2);

// const vetor = ["Gabriel", 19, "matheus@exemple.com"];
// console.log(vetor[1]);
// const objeto = {nome: "Matheus", idae: 19, email: "matheus@exemple.com" }
// console.log(objeto["nome"]); // objeto válido. Acessa a prioridade "nome" do objeto

const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "750w",
    placa: "Gigabyte"
}
const saldo = 4500;
if(saldo > 4000) {
    pc.placaVideo = "RTX 3080"
}
// console.log(pc);


let n1 = 2;
let n2 = n1; // faz uma copia de n1 para n2
n1 = 3; //não afeta o n2
console.log(n1) // 3
console.log(n2) // 2

// Forma incorreta de copiar um objeto 
// const objeto1 = {nome: "Bruna", curso: "JavaScript" };
// let objeto2 = objeto1; // não é feito uma copia do objeto1, e sim da referencia dele na memoria
// objeto1.nome = "Bruna Muller";
// console.log(objeto1);
// console.log(objeto2);

// Forma correta de copiar um objeto
const objeto1 = {nome: "Bruna", curso: "JavaScript" };
let objeto2 = {...objeto1}; // copiar os elementos do objeto1 e "espalhar" nop objeto2 
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);
delete objeto1.nome;
console.log(objeto1)