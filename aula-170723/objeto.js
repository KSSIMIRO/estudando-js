// objeto -> Estrutura que representa um objeto do mundo real (Ex. Produto, Pessoa, Profissão)
// Objeto pode ser modelado -> Classe (Nome deve começar com letra maiuscula)

class Livro {
    titulo;
    paginas;
    autor;
    isbn;
    categoria;
    alugar = function() {
        console.log("Alugado!")
    }
    static isLivro(livro) { // isLivro -> é uma função estatica, ou seja, não será necessario instanciar o objeto para acessa-la
        let flag = livro.titulo === undefined;
        return !flag;
    }

    constructor(titulo, paginas, autor, isbn) {
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.isbn = isbn;
        // this -> Referencia a classe/objeto
    } 
}

// Para criar a estrutura "fisica" do objeto pela classe é necessário fazer uma INSTÂNCIA
let arquiteturaLimpa = new Livro(); // instâcia do objeto Livro
// console.log(typeof arquiteturaLimpa);

arquiteturaLimpa.titulo = "Arquiterura Limpa";
arquiteturaLimpa.autor = "Robert C. Martin";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.isbn = "978-85-508-0460-6"
// console.log(arquiteturaLimpa);
// arquiteturaLimpa.alugar();

let javaIniciantes = new Livro("Java para Iniciantes", 500, "Herneert", "98432842");
// javaIniciantes.titulo = "Java para avançados"
// console.log(javaIniciantes);

// let livroTeste = new Livro();
// livroTeste.titulo = "Titulo Teste"
// console.log(Livro.isLivro(livroTeste))

// objeto é uma estrutura que representa um objeto do mundo real no nosso codigo.
// classe -> Planta ou Modelo do objeto 
// instância é o processo de construir o objeto "new Livro()"
// constructor é a função que gere o objeto físico
// caracteristicas -> Areibutos/Propriedades, Métodos/Funções

// JavaScript -> Front
// Java -> Back

const objeto = {}; // cria um objeto sem classe
// console.log(typeof objeto);
console.log(objeto);