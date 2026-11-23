var tabelaDados = [
  { posicao: 1, album: "Chain Reaction", artista: "Maeve"},
  { posicao: 2, album: "Voz do Brasil", artista: "Nielly" },
  { posicao: 3, album: "Eletrogasm", artista: "Aiddan King" },
  { posicao: 4, album: "Postcards from a Motel Room", artista: "Daniel" },
  { posicao: 5, album: "GITC", artista: "Liberty" },
  { posicao: 6, album: "Old Vintage Ways", artista: "Daniel" },
  { posicao: 7, album: "Rehearsals for Retirement", artista: "Logan" },
  { posicao: 8, album: "We Back", artista: "Jeffrey Bundy" },
  { posicao: 9, album: "Solitude Dynamics", artista: "Maeve" },
  { posicao: 10, album: "Yellow Flower", artista: "Squirrel Guy" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("pos" + (index + 1));
    var albumCell = document.getElementById("album" + (index + 1));
    var artistaCell = document.getElementById("artist" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    albumCell.textContent = dado.album;
    if (dado.link) {
      const link = document.createElement('a');
      link.href = dado.link; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = dado.album;
      albumCell.replaceChildren(link);
    }
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

// Chama a função para atualizar a tabela automaticamente
atualizarAutomaticamente();
