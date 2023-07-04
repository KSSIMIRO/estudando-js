// Operadores Aritiméticos -> +, -, *, /, **, %

// let result;

// result = 4 + 5; // 9
// console.log(result);

// result = 9 * 3; // 27
// console.log(result);

// result = ((3 + 7) * 12) / 6 // 20
// console.log(result);

//Operadores de Atribuição (=. +=, -=, *=, /=, **=, %=)
// result = result + 30;
// result += 30;
// console.log(result); // 50

// result -= 45;
// console.log(result); // 5

// result *= 7;
// console.log(result); // 35

// result %= 9;
// console.log(result); // 8

// result **= 2;
// console.log(result); // 16

// Operadores de Incremento e Decremento
/*
    a++ -> Pós Incremento
    ++a -> Pré Incremento
    a-- -> Pós Decremento
    --a -> Pré Decremento
*/ 

// let a = 0;
// console.log(a); // 23

// console.log(a++); // 23

// console.log(++a); // 25

// console.log(--a); // 24

// console.log(a--); // 24

// console.log(a--); // 23

// Operadores Relacionais

/*
    < Menor Que
    > Maior Que
    <= Menor ou Igual
    >= Maior ou Igual
    == Igual a
    === Igual a e mesmo tipo
    != Diferente
*/

// let result

// const n1 = 9;
// const n2 = 11;
// const n3 = 9;
// const n4 = 13;
// const n5 = "11"

// result = n1 < n2;
// console.log(result); // true

// result = n1 > n2;
// console.log(result); // false

// result = n1 <= n2;
// console.log(result); // true

// result = n1 < n3;
// console.log(result); // false

// result = n1 <= n3;
// console.log(result); // true

// result = n1 >= n3;
// console.log(result); // true

// result = n1 > n3;
// console.log(result); // false

// result = n3 == n4;
// console.log(result); // false

// result = n1 == n3;
// console.log(result); // true

// result = n1 != n3;
// console.log(result); // false

// result = n1 != n4;
// console.log(result); // true

// result = n2 === n5;
// console.log(result); // false

// result = "Matheus Cassimiro" == "Matheus Fraga";
// console.log(result); // false

// result = "Matheus" == "Matheus";
// console.log(result); // true

// result = 3.14 == 3;
// console.log(result); // false

// result = -5 == 5;
// console.log(result); // false

// Operadores Lógicos

/*
    && -> E
    || -> OU
    !  -> NÃO
*/

// console.log(true);
// console.log(false);

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(true && true && true && true && false); // false
// console.log(false && true); // false

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || true || true || true || false); // true
// console.log(false || false); // false

// console.log(!true); // false
// console.log(!false); // true

// console.log(!true || false); // false
// console.log(true || true && false); // true
// console.log((true || true) && false); // false


// // dada a idade, a pessoa é obrigada a votar
// let idade = 80
// let calculo = (idade >= 18) && (idade <= 65);
// console.log(calculo); // false

// Operador ternario
let mensagem;
let nota1 = 4;
let nota2 = 10;
let condicao = ((nota1 + nota2) / 2) >= 7

mansagen = condicao ? "Aprovado" : "Reprovado"; // condição
console.log(mensagem);

// aritiméticos > relacionados > logícos