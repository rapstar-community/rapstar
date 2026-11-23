var tabelaDados = [
  { posicao: 1, musica: "Girl Crush", artista: "Liberty", imagem: "" },
  { posicao: 2, musica: "that's my baby", artista: "Aiddan King", imagem: "" },
  { posicao: 3, musica: "Maeve Meets World", artista: "Maeve", imagem: "" },
  { posicao: 4, musica: "Who's That DJ?", artista: "Daniel", imagem: "" },
  { posicao: 5, musica: "Beautiful Theory", artista: "Millie", imagem: "" },
  { posicao: 6, musica: "Carllie", artista: "Liberty", imagem: "" },
  { posicao: 7, musica: "Intelectual Cunt", artista: "Nielly", imagem: "" },
  { posicao: 8, musica: "Still Got It", artista: "Lucille", imagem: "" },
  { posicao: 9, musica: "I'm Not That Girl", artista: "Maeve", imagem: "" },
  { posicao: 10, musica: "Postcards", artista: "Hazel Hansen", imagem: "" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("poshot" + (index + 1));
    var imagemCell = document.getElementById("imagemhot" + (index + 1));
    var musicaCell = document.getElementById("songhot" + (index + 1));
    var artistaCell = document.getElementById("artisthot" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

atualizarAutomaticamente();
