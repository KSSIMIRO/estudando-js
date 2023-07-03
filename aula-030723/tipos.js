//Tipagem Estatica -> Definoção de um tipo a cada variavel (Java, C, C++, TypeScript)
//Tipagem Dinamica -> O tipo da variavel é definido de acordo com seu valor (JavaScript, Python)

//typeof -> Operador que retorna o tipo da variavel

let variavel = 22;
console.log(typeof variavel); // number

variavel = 17.96;
console.log(typeof variavel); // number

variavel = "KSSIMIRO";
console.log(typeof variavel); // string

variavel = true;
console.log(typeof variavel); // boolean

variavel = {nome: "Matheus", idade: 19}; 
console.log(typeof variavel); // object

variavel = [1, 2, 3, 4, 5]; 
console.log(typeof variavel); // object

variavel = function() { return 1 }
console.log(typeof variavel); // function

variavel = undefined; // indefinido
console.log(variavel); // undefined

variavel = null; // nulo
console.log(variavel); // null

variavel = NaN; //Not a number
console.log(variavel); // NaN