import { livros } from "./livros.js";

function exibirTabela(livros) {
    const tabela = document.querySelector("#table-livros");
    tabela.innerHTML = "";
    livros.forEach(livro => {
        tabela.innerHTML += `
            <tr>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.anoPublicacao}</td>
                <td>${livro.genero}</td>
            </tr>
        `;
    });
}

exibirTabela(livros);