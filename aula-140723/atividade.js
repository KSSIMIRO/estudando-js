// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.

const nuns = [0, 5, 6, 4, 5, 4, 2 ,12 ,4 ,5 ,3, 6, 7, 10, 4];
console.log(nuns.reduce((a, n) => (a + n), 0));

// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.

const palavras = ["Matheus", "Aline", "Alyson", "Gabriel", "Gustavo", "Lucas", "Suzi", "Andre", "Ricardo"];
console.log(palavras.join(", "));

// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.



// Crie uma função que receba um vetor de números e retorne a média dos elementos.

let soma = 0;
for(let i = 0; i < nuns.length; i++) {
    soma += nuns[i];
}
const media = soma / nuns.length;
console.log(media);

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.

console.log(nuns.map(num => num ** 2));

// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.

console.log(palavras.filter(palavA => palavA.charAt(0).toUpperCase() === "A"));

// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.

nuns.forEach(n => console.log(`${n} X 3 = ${n*3}`));

// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.

console.log(nuns.includes(10));