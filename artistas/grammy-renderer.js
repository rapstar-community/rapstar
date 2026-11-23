(() => {
  const grammyContainer = document.querySelector(".grammy-container");
  const categoriesContainer = grammyContainer?.querySelector("#grammy-categories");

  if (!grammyContainer || !categoriesContainer) {
    console.error("Não foi possível apresentar os Grammys: estrutura da página não encontrada.");
    return;
  }

  if (typeof grammyData === "undefined" || !Array.isArray(grammyData)) {
    console.error("Não foi possível apresentar os Grammys: dados dos prémios não carregados.");
    return;
  }

  const artistName = (
    grammyContainer.dataset.grammyArtist ||
    document.querySelector(".artist-title")?.textContent ||
    ""
  ).trim();
  if (!artistName) {
    console.error("Não foi possível apresentar os Grammys: artista do perfil não identificado.");
    return;
  }

  const editionSelect = grammyContainer.querySelector("#edition-select");

  function artistIsWinner(creditedArtists) {
    return creditedArtists
      .split(/\s+&\s+|\s+feat\s+/i)
      .some(name => name.trim() === artistName);
  }

  const artistEditions = grammyData.filter(edition =>
    edition.categories.some(category =>
      category.winner && artistIsWinner(category.winner.artist)
    )
  );

  function renderAwards(selectedEdition = "all") {
    categoriesContainer.replaceChildren();
    let totalWins = 0;
    let renderedEditions = 0;

    artistEditions.forEach(edition => {
      if (selectedEdition !== "all" && edition.edition !== selectedEdition) {
        return;
      }

      const wins = edition.categories.filter(category =>
        category.winner && artistIsWinner(category.winner.artist)
      );
      if (wins.length === 0) {
        return;
      }

      if (selectedEdition === "all" && renderedEditions > 0) {
        const divider = document.createElement("hr");
        divider.className = "edition-divider";
        categoriesContainer.appendChild(divider);
      }

      const editionElement = document.createElement("div");
      editionElement.className = "edition-item";

      const editionTitle = document.createElement("h3");
      editionTitle.className = "edition-title";
      editionTitle.textContent = edition.edition;
      editionElement.appendChild(editionTitle);

      wins.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.className = "category-item";

        const categoryImage = document.createElement("img");
        categoryImage.src = "https://naras.a.bigcontent.io/v1/static/artist_default_200x200";
        categoryImage.alt = "";
        categoryImage.className = "category-image";
        categoryElement.appendChild(categoryImage);

        const categoryContent = document.createElement("div");
        categoryContent.className = "category-content";

        const categoryTitle = document.createElement("h4");
        categoryTitle.className = "category-title";
        categoryTitle.textContent = category.category;
        categoryContent.appendChild(categoryTitle);

        if (category.winner.song) {
          const songInfo = document.createElement("p");
          songInfo.className = "song-info";
          songInfo.textContent = category.winner.song;
          categoryContent.appendChild(songInfo);
        }

        const winnerLabel = document.createElement("p");
        winnerLabel.className = "winner-label";
        winnerLabel.textContent = "WINNER";
        categoryContent.appendChild(winnerLabel);

        categoryElement.appendChild(categoryContent);
        editionElement.appendChild(categoryElement);
      });

      categoriesContainer.appendChild(editionElement);
      totalWins += wins.length;
      renderedEditions++;
    });

    if (totalWins === 0) {
      const noInfoLabel = document.createElement("p");
      noInfoLabel.className = "empty-info";
      noInfoLabel.textContent = "Nenhuma informação disponível para este artista.";
      categoriesContainer.appendChild(noInfoLabel);
      return;
    }

    const totalStats = document.createElement("div");
    totalStats.className = "total-stats";

    const statsHeading = document.createElement("h3");
    statsHeading.className = "name-grammy";
    statsHeading.textContent = artistName;
    totalStats.appendChild(statsHeading);

    const statsContainer = document.createElement("div");
    statsContainer.className = "stats-container";

    const statsItem = document.createElement("div");
    statsItem.className = "stats-item";

    const winsLabel = document.createElement("p1");
    winsLabel.textContent = "WINS";
    statsItem.appendChild(winsLabel);

    const winsTotal = document.createElement("p1-1");
    winsTotal.className = "stats-number";
    winsTotal.textContent = totalWins;
    statsItem.appendChild(winsTotal);

    statsContainer.appendChild(statsItem);
    totalStats.appendChild(statsContainer);
    categoriesContainer.insertBefore(totalStats, categoriesContainer.firstChild);
  }

  if (editionSelect) {
    editionSelect.replaceChildren();

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Todas as Edições";
    editionSelect.appendChild(allOption);

    artistEditions.forEach(edition => {
      const option = document.createElement("option");
      option.value = edition.edition;
      option.textContent = edition.edition;
      editionSelect.appendChild(option);
    });

    editionSelect.addEventListener("change", () => {
      renderAwards(editionSelect.value);
    });
  }

  renderAwards();
})();
