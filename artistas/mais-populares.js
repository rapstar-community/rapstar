(() => {
  const popularSongsByArtist = {
    "Liberty": {
      songs: [
        { rank: 1, title: "Girl Crush", streams: "70,000,000", cover: "https://i.imgur.com/CPDz2Yg.jpeg" },
        { rank: 2, title: "Carllie", streams: "270,000,000", cover: "https://i.imgur.com/UVmXkGQ.jpeg" },
        { rank: 2, title: "Lemons", streams: "3,350,000,000", cover: "https://i.imgur.com/4cYwJav.png" },
        { rank: 3, title: "Drop Culture", streams: "2,240,000,000", cover: "https://i.imgur.com/4cYwJav.png" },
        { rank: 4, title: "Funny Games", streams: "2,500,000,000", cover: "https://i.imgur.com/k64xLkn.png" }
      ]
    },
    "Aiddan King": {
      songs: [
        { rank: 1, title: "that's my baby", streams: "210,000,000", cover: "https://i.imgur.com/eWFMuX0.jpeg" },
        { rank: 2, title: "Eletrogasm", streams: "245,000,000", cover: "https://i.imgur.com/nTdddCx.jpeg" },
        { rank: 3, title: "Coda", streams: "1,910,000,000", cover: "https://i.imgur.com/3cp8vz7.jpeg" },
        { rank: 4, title: "Romance", streams: "4,300,000,000", cover: "https://i.imgur.com/Pn8G3ys.jpeg" },
        { rank: 5, title: "Limbo", streams: "880,000,000", cover: "https://i.imgur.com/zFaZf2L.jpeg" }
      ]
    },
    "Ashley Miller": {
      songs: [
        { rank: 1, title: "FREAK", streams: "67,000,000", cover: "https://i.imgur.com/yocNULa.png" },
        { rank: 2, title: "HUNTRE$$", streams: "138,000,000", cover: "https://i.imgur.com/yocNULa.png" },
        { rank: 2, title: "SLOSHED", streams: "23,000,000", cover: "https://i.imgur.com/yocNULa.png" },
        { rank: 3, title: "GIRLHOOD DESIRES", streams: "17,000,000", cover: "https://i.imgur.com/yocNULa.png" },
        { rank: 4, title: "PUSSING ON", streams: "16,000,000", cover: "https://i.imgur.com/yocNULa.png" }
      ]
    },
    "Logan": {
      songs: [
        { rank: 1, title: "broken hearts can't be mended", streams: "1,389,000,000", cover: "https://i.imgur.com/WsAnx2G.jpeg" },
        { rank: 2, title: "Nightmares", streams: "4,993,000,000", cover: "https://i.imgur.com/qRToFd5.png" },
        { rank: 3, title: "Don't Make That Face", streams: "3,976,000,000", cover: "https://i.imgur.com/eurMWiI.png" },
        { rank: 4, title: "paper planes", streams: "2,620,000,000", cover: "https://i.imgur.com/wUpDTsM.jpeg" },
        { rank: 5, title: "I Noticed You Tried", streams: "2,869,000,000", cover: "https://i.imgur.com/fuFd8rA.jpeg" }
      ]
    },
    "Carllie": {
      songs: [
        { rank: 1, title: "Love Again", streams: "3,975,000,000", cover: "https://i.imgur.com/Vfd3eq6.jpeg" },
        { rank: 2, title: "Where She Goes?", streams: "3,523,000,000", cover: "https://i.imgur.com/Vfd3eq6.jpeg" },
        { rank: 3, title: "Runaway", streams: "1,705,000,000", cover: "https://i.imgur.com/Xg0HwaM.jpeg" },
        { rank: 4, title: "Hold On Tight", streams: "1,750,000,000", cover: "https://i.imgur.com/J2Z83Mw.jpeg" },
        { rank: 5, title: "King of My Heart", streams: "3,035,000,000", cover: "https://i.imgur.com/Vk3s81u.jpeg" }
      ]
    } ,
    "Maeve": {
      songs: [
        { rank: 1, title: "Maeve Meets World", streams: "176,000,000", cover: "https://i.imgur.com/wLitDgJ.jpeg" },
        { rank: 2, title: "I'm Not That Girl", streams: "265,000,000", cover: "https://i.imgur.com/wLitDgJ.jpeg" },
        { rank: 3, title: "Hannah Montana", streams: "115,000,000", cover: "https://i.imgur.com/wLitDgJ.jpeg" },
        { rank: 4, title: "I Will Always Love You", streams: "104,000,000", cover: "https://i.imgur.com/wLitDgJ.jpeg" },
        { rank: 5, title: "Chain Reaction", streams: "85,000,000", cover: "https://i.imgur.com/wLitDgJ.jpeg" }
      ]
    }  ,
    "Daniel": {
      songs: [
        { rank: 1, title: "Who's That DJ?", streams: "320,000,000", cover: "/artistas/daniel/covers/01-whos-that-dj.jpeg" },
        { rank: 2, title: "Boogie", streams: "4,992,000,000", cover: "/artistas/daniel/covers/02-old-vintage-ways.jpeg" },
        { rank: 3, title: "Hero", streams: "3,815,000,000", cover: "/artistas/daniel/covers/04-rocket-science.jpeg" },
        { rank: 4, title: "Old-Schooled Boy 2", streams: "1,050,000,000", cover: "/artistas/daniel/covers/02-old-vintage-ways.jpeg" },
        { rank: 5, title: "Call Me Later", streams: "2,725,000,000", cover: "/artistas/daniel/covers/02-old-vintage-ways.jpeg" }
      ]
    }  ,
    "Mark": {
      songs: [
        { rank: 1, title: "Nightshift", streams: "26,100,000", cover: "https://i.imgur.com/WfgES2H.jpeg" },
        { rank: 2, title: "Old-Schooled Boy 2", streams: "1,050,000,000", cover: "https://i.imgur.com/3CfeBjG.jpeg" },
        { rank: 3, title: "Purple Forest", streams: "2,915,000,000", cover: "https://i.imgur.com/54rxkjr.jpeg" },
        { rank: 4, title: "Dirtman", streams: "3,910,000,000", cover: "https://i.imgur.com/U5rtMLM.jpeg" },
        { rank: 5, title: "Christmas Games", streams: "94,000,000", cover: "https://i.imgur.com/QKWSFvG.jpeg" }
      ]
    }  ,
    "Lucille": {
      songs: [
        { rank: 1, title: "Still Got It", streams: "125,000,000", cover: "https://i.imgur.com/31QjRmg.jpeg" },
        { rank: 2, title: "Please, Handle Me", streams: "265,000,000", cover: "https://i.imgur.com/5bXbHpl.jpeg" },
        { rank: 3, title: "The Way It Is", streams: "115,000,000", cover: "https://i.imgur.com/pJenf3s.png" },
        { rank: 4, title: "Stay (Remix)", streams: "104,000,000", cover: "https://i.imgur.com/SHUZa6m.png" },
        { rank: 5, title: "Brand New Me", streams: "5,000,000", cover: "https://i.imgur.com/31QjRmg.jpeg" }
      ]
    }  ,
    "Hazel Hansen": {
      songs: [
        { rank: 1, title: "Postcards", streams: "115,000,000", cover: "https://i.imgur.com/QBTb79L.png" },
        { rank: 2, title: "Illusion (feat. Millie)", streams: "125,000,000", cover: "https://i.imgur.com/QBTb79L.png" },
        { rank: 3, title: "IRL", streams: "115,000,000", cover: "https://i.imgur.com/QBTb79L.png" },
        { rank: 4, title: "Housekeeping", streams: "104,000,000", cover: "https://i.imgur.com/QBTb79L.png" },
        { rank: 5, title: "Gimme Gimme (with Dallas)", streams: "4,260,000", cover: "https://i.imgur.com/qlvjhk2.png" }
      ]
    }  ,
    "Millie": {
      songs: [
        { rank: 1, title: "Beautiful Theory", streams: "41,000,000", cover: "https://i.imgur.com/jENAZax.png" },
        { rank: 2, title: "Candy", streams: "155,000,000", cover: "https://i.imgur.com/clzhZHj.png" },
        { rank: 3, title: "Illusion", streams: "125,000,000", cover: "https://i.imgur.com/QBTb79L.png" },
        { rank: 4, title: "Baby, Please", streams: "2,104,000,000", cover: "https://i.imgur.com/zSyOAMG.png" },
        { rank: 5, title: "Position", streams: "1,802,000,000", cover: "https://i.imgur.com/zSyOAMG.png" }
      ]
    }  ,
    "Emília Ramirez": {
      songs: [
        { rank: 1, title: "DEVOTO", streams: "107,000,000", cover: "https://i.imgur.com/MIhfVRk.jpeg" },
        { rank: 2, title: "KLK", streams: "265,000,000", cover: "https://i.imgur.com/1jt1SfO.jpeg" },
        { rank: 3, title: "Dragaminas", streams: "992,000,000", cover: "https://i.imgur.com/1jt1SfO.jpeg" },
        { rank: 4, title: "Ojalá", streams: "1,505,000,000", cover: "https://i.imgur.com/PJ4Crru.png" },
        { rank: 5, title: "Hasta La Muerte", streams: "1,705,000,000", cover: "https://i.imgur.com/yRI5MDh.png" }
      ]
    }  ,
    "Nielly": {
      songs: [
        { rank: 1, title: "Voz do Brasil", streams: "115,000,000", cover: "https://i.imgur.com/tvOI6s2.jpeg" },
        { rank: 2, title: "Intelectual Cunt", streams: "265,000,000", cover: "https://i.imgur.com/tvOI6s2.jpeg" },
        { rank: 3, title: "Quiet Down", streams: "115,000,000", cover: "https://i.imgur.com/tvOI6s2.jpeg" },
        { rank: 4, title: "Contrariando Estatística", streams: "104,000,000", cover: "https://i.imgur.com/tvOI6s2.jpeg" },
        { rank: 5, title: "Teresa", streams: "85,000,000", cover: "https://i.imgur.com/tvOI6s2.jpeg" }
      ]
    }  ,
    "Luke": {
      songs: [
        { rank: 1, title: "Cool Girl", streams: "205,000,000", cover: "https://i.imgur.com/JeW9t8m.png" },
        { rank: 2, title: "Intelectual Cunt", streams: "265,000,000", cover: "https://i.imgur.com/JeW9t8m.png" },
        { rank: 3, title: "Quiet Down", streams: "115,000,000", cover: "https://i.imgur.com/JeW9t8m.png" },
        { rank: 4, title: "Contrariando Estatística", streams: "104,000,000", cover: "https://i.imgur.com/JeW9t8m.png" },
        { rank: 5, title: "Teresa", streams: "85,000,000", cover: "https://i.imgur.com/JeW9t8m.png" }
      ]
    }  ,
    "Sierra Albani": {
      songs: [
        { rank: 1, title: "Angel's Cinema", streams: "45,000,000", cover: "https://i.imgur.com/52QjiyW.png" },
        { rank: 2, title: "California", streams: "125,000,000", cover: "https://i.imgur.com/CzR0uR9.png" },
      ]
    }  , 
    "Angel": {
      songs: [
        { rank: 1, title: "-", streams: "-", cover: "" },
      ]
    }
  };

  const defaultSongs = [
    { rank: 1, title: "Lemons", streams: "1,783,000", cover: "" },
    { rank: 2, title: "Funny Games", streams: "1,000,006", cover: "" },
    { rank: 2, title: "Hating", streams: "1,000,004", cover: "" },
    { rank: 3, title: "Sound Slut", streams: "1,000,002", cover: "" },
    { rank: 4, title: "Provoke Society", streams: "1,000,000", cover: "" }
  ];

  const artistTitle = document.querySelector(".artist-title");
  const artistName = artistTitle?.textContent.trim();
  const artistSongs = popularSongsByArtist[artistName];
  const songs = artistSongs?.songs || defaultSongs;

  const container = document.querySelector(".container");
  const discography = container?.querySelector(".discography-container");

  if (!container || !discography) {
    console.error("Não foi possível adicionar a caixa Mais populares: estrutura da página de artista não encontrada.");
    return;
  }

  const section = document.createElement("section");
  section.className = "popular-songs-container";
  section.setAttribute("aria-labelledby", "popular-songs-title");

  const heading = document.createElement("div");
  heading.className = "border-top";

  const headingText = document.createElement("p");
  headingText.id = "popular-songs-title";
  headingText.textContent = "MAIS POPULARES";
  heading.appendChild(headingText);
  section.appendChild(heading);

  const songList = document.createElement("ol");
  songList.className = "popular-songs-list";

  songs.forEach(song => {
    const row = document.createElement("li");
    row.className = "popular-song-row";

    const rank = document.createElement("span");
    rank.className = "popular-song-rank";
    rank.textContent = `#${song.rank}`;
    row.appendChild(rank);

    const cover = document.createElement("span");
    cover.className = "popular-song-cover";
    cover.setAttribute("aria-label", `Capa de ${song.title}`);
    if (song.cover) {
      cover.style.backgroundImage = `url("${song.cover}")`;
    }
    row.appendChild(cover);

    const title = document.createElement("span");
    title.className = "popular-song-title";
    title.textContent = song.title;
    row.appendChild(title);

    const streams = document.createElement("span");
    streams.className = "popular-song-streams";
    streams.textContent = `${song.streams} reproduções`;
    row.appendChild(streams);

    songList.appendChild(row);
  });

  section.appendChild(songList);
  container.insertBefore(section, discography);
})();
