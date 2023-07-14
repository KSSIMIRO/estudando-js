const nuns = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7];
console.log(nuns);

nuns.push(4); // adiciona um elemento ao final do vetor
console.log(nuns);

nuns.unshift(9); // adiciona um elemento no inicio do vetor
console.log(nuns);

nuns.pop(); // remove um elemento do final fo vetor
console.log(nuns);

nuns.shift(); // remove um elemento do inicio do vetor
console.log(nuns);

let juncao = nuns.join("-") // fazer a junção dos elementos
console.log(juncao);

let vetor2 = [5, 6, 7];
let vetor3 = nuns.concat(vetor2);
console.log(vetor3);

// nuns.push(100, 101, 1000)
const nomes = ["Beatriz", "Diego", "Adriano", "Gustavo", "Vitor", "Aline"];
console.log(nomes.sort()); // ordena por ondem alfabetica (modifica o vetor)

console.log(nuns.reverse()); // gera um novo vetor na ordem reversae (modifica o vetor)

console.log(nuns.includes(7)); // retorna um buleano 

// console.log(nuns.fill(0)); // preencher todos os elementos com 0 (modifica o vetor)
// console.log(nuns.fill(7, 2, 4)); // preencher com 7 de 2 a 4-1 (modifica o vetor)

console.log(nuns.indexOf(0)); // retorna o indice do primeiro elemento do vetor

console.log(nuns);
console.log(nuns.splice(6, 3)); // remove elementos do meio do vetor (modifica o vetor)
console.log(nuns);

console.log(nuns.slice(2, 5)); // recorta um vetor do indice 2 a 5-1 (não modifica)

nuns.forEach(num => console.log(num)); // itera sobre os elementos do vetor

// recuxw -> efetuar a redução dos valores do vetor em um valor acumulativo
console.log("----- reduce -----")
console.log(nuns.reduce((acumulador, num) => (acumulador + num), 0));

console.log(nuns.map(num => num * 2)); // multiplica todos os valores por 2 e gera um vetor novo

console.log(nuns.find(num => num > 8)); // retorna o primeiro valor que corresponde a condição especifica

console.log(nuns.filter(num => num %2 == 0)); // retorna um vetor de elementos que corespondem a condição

// String como Vetor
let nome = `matheus faria cassimiro`;
let idade = 19;
let mensagem = `Nome: ${nome}\nIdade: ${idade}`; // interpolação
console.log(mensagem);

console.log(nome[2]); // perfeitamente válido -> Retorna "t"