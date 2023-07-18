
const imagens = [
    "https://media.istockphoto.com/id/1417859051/pt/foto/flying-colors.jpg?s=1024x1024&w=is&k=20&c=98O9yeWaFCuImva_670hUKe8eKkqVPxLXw7b5_Sli0E=",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
    "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=703&q=80",
    "https://images.unsplash.com/photo-1682686581295-7364cabf5511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
];

const imagem = document.querySelector("#galeria");
let indiceAtual = 1;

function galeria() {
    imagem.src = imagens[indiceAtual];
    if(indiceAtual == (imagens.length-1)) {
        indiceAtual = 0;
    }
    else {
        indiceAtual++;
    }
}

setInterval(galeria, 2000);