// --- Playlists ---
document.getElementById("title0").innerText = "Playlists";
document.getElementById("title1").innerText = "Reproduzidas Recentemente";
document.getElementById("title2").innerText = "Para você";

const playlists = [
  { title: "Minhas curtidas", cover: "https://i.postimg.cc/HxtL5yXw/1.png", action: "document.getElementById('in-player').style.display='block';document.getElementById('in-album').style.display='none';document.getElementById('pl-nav').style.display='none';carregarPlaylist('https://wallxnip.github.io/playlists/PL01.JS');Amplitude.pause(); Amplitude.setSongPlayedPercentage(0);" },
  { title: "Sleep", cover: "https://i.postimg.cc/vZpDdMGV/2.jpg", action: "document.getElementById('in-player').style.display='block';document.getElementById('in-album').style.display='none';document.getElementById('pl-nav').style.display='none';carregarPlaylist('https://wallxnip.github.io/playlists/PL02.JS');Amplitude.pause(); Amplitude.setSongPlayedPercentage(0);" },
  { title: "MC Arizinho", cover: "https://i.postimg.cc/G2R2HQ83/4.png", action: "" }
];

function renderPlaylists() {
  const container = document.querySelector(".playlists-container");
  container.innerHTML = '';
  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.classList.add('playlist-card2');
    card.innerHTML = `
      <div class="cover2" onclick="${pl.action}">
        <img src="${pl.cover}" alt="${pl.title}">
      </div>
    `;
    container.appendChild(card);
  });
}


// --- Recentes ---
const recentes = [
  { cover: "https://i.postimg.cc/158Gf2Km/1000390832f.png", title: "Sleep", action: "" },
  { cover: "https://i.postimg.cc/fT8PhGRM/9.jpg", title: "Robério", action: "" },
  { cover: "https://i.postimg.cc/1tDTh4fd/6.jpg", title: "Minhas curtidas", action: "" }
];

function renderRecentes() {
  const container = document.querySelector(".recentes-container");
  container.innerHTML = '';
  recentes.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('recent-item2');
    card.innerHTML = `<div class="cover2"><img src="${item.cover}" alt="${item.title}" onclick="${item.action}"></div>`;
    container.appendChild(card);
  });
}

// --- Para você ---
const forYou = [
  { cover: "https://i.postimg.cc/J4rFvrmT/8.jpg", title: "Minhas reproduções frequentes", action: "" },
  { cover: "https://i.postimg.cc/NF4zFV87/7.jpg", title: "Minha trilha sonora", action: "" },
  { cover: "https://i.postimg.cc/Lsc7bj6f/5.jpg", title: "Reproduções recentes", action: "" }
];

function renderForYou() {
  const container = document.querySelector(".for-you-container");
  container.innerHTML = '';
  forYou.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('fy-card2');
    card.innerHTML = `<img src="${item.cover}" alt="${item.title}" onclick="${item.action}">`;
    container.appendChild(card);
  });
}

// --- Inicializa tudo ---
renderPlaylists();
renderRecentes();
renderForYou();