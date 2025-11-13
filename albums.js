// =============================== // Dados para página 1 (ações padronizadas como funções) // =============================== document.getElementById("playlists").innerText = "Playlists"; document.getElementById("recente").innerText = "Reproduzidas Recentemente"; document.getElementById("pravoce").innerText = "Para você";

const editors1 = [ { title: 'Crossover', subtitle: 'Wallker', img: 'https://i.postimg.cc/cCtYCdnK/wK.webp', action: () => nlx("crossover") }, { title: 'Summer (MIX)', subtitle: 'Wallker', img: 'https://i.postimg.cc/J44t5H8J/Summer.webp', action: () => nlx("summer") }, { title: 'Drilland', subtitle: 'Wallker', img: 'https://i.postimg.cc/85J3d5YQ/Drilland.webp', action: () => nlx("drilland") }, { title: 'EDM', subtitle: 'Wallker', img: 'https://i.postimg.cc/nr78vkLG/Alone.webp', action: () => nlx("alone") } ];

const charts1 = [ { title: 'Top Rock (Clássic)', charts: 'Wallker', img: 'https://i.postimg.cc/nchyMbnj/TheRock.webp', action: () => nlx("therock") }, { title: 'Funk (MIX)', charts: 'Wallker', img: 'https://i.postimg.cc/RhYxG80b/Funk.webp', action: () => nlx("funk") }, { title: 'Hip-Hop', charts: 'Wallker', img: 'https://i.postimg.cc/s2XSNZy8/Hip-Hop.webp', action: () => nlx("hiphop") }, { title: 'Temporal', charts: 'Wallker', img: 'https://i.postimg.cc/25Yrw3LF/Temporal.webp', action: () => nlx("temporal") } ];

const releases1 = [ { title: 'Pisadinha do Vaqueiro', artist: 'Francildo Silva', img: 'https://i.postimg.cc/2SYbMkP4/Pisadinha-do-Vaqueiro.webp', action: () => nlx("francildosilva") }, { title: 'Axé das Antigas', artist: 'Kiko Chicabana', img: 'https://i.postimg.cc/ZKc6xvMD/Chicabana.webp', action: () => nlx("chicabana") }, { title: 'Sky Love do Forró', artist: 'Sky Love', img: 'https://i.postimg.cc/mg4BBtLK/Sou-Love.webp', action: () => nlx("skylove") }, { title: 'Apaixonado Sempre', artist: 'Robério e seus Teclados', img: 'https://i.postimg.cc/J0RWNFsF/Roberio.webp', action: () => nlx("roberio") }, { title: 'Bestiny', artist: 'NEFFEX', img: 'https://i.postimg.cc/7hdyhNmP/Neffex.webp', action: () => nlx("neffex") }, { title: 'As Melhores', artist: 'Latina', img: 'https://i.postimg.cc/g0DQcZxR/Latina.webp', action: () => nlx("latina") }, { title: 'Trilha Sonora de Games', artist: 'The Last Frequency', img: 'https://i.postimg.cc/TYvxsCc7/legacy.webp', action: () => nlx("gamex") } ];

// =============================== // CARD PADRÃO DA PÁGINA 1 // =============================== function makeCard(data) { const div = document.createElement('div'); div.className = 'card';

const a = document.createElement('a');

if (typeof data.action === "string") a.setAttribute("onclick", data.action); else if (typeof data.action === "function") a.onclick = data.action;

a.innerHTML = <div class="rpd" onclick="showPlaylist()" style="position:absolute;inset:0;overflow:hidden;border-radius:14px"> <img src="${data.img}" style="width:100%;height:100%;object-fit:cover"/> <div style="position:absolute;inset:0; background:linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.3));"></div> </div> <div style="visibility: hidden;position:absolute;left:12px;bottom:12px"> <div class="fft title">${data.title}</div> <div class="fft meta">${data.subtitle || data.artist || ''}</div> </div>; div.appendChild(a); return div; }

// =============================== // CARD PARA PESQUISA (VISÍVEL) // =============================== function makeSearchCard(data) { const div = document.createElement('div'); div.className = 'card';

const a = document.createElement('a');

if (typeof data.action === "string") a.setAttribute("onclick", data.action); else if (typeof data.action === "function") a.onclick = data.action;

a.innerHTML = <div class="rpd" style="position:absolute;inset:0;border-radius:14px;overflow:hidden"> <img src="${data.img}" style="width:100%;height:100%;object-fit:cover"> <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.3));"></div> </div> <div style="position:absolute;left:8px;bottom:8px"> <div class="fft title">${data.title}</div> <div class="fft meta">${data.subtitle || data.artist || ''}</div> </div>;

div.appendChild(a); return div; }

// =============================== // POPULAR PÁGINA 1 // =============================== function populate1() { editors1.forEach(it => document.getElementById('editors1').appendChild(makeCard(it)));

charts1.forEach(it => document.getElementById('charts1').appendChild(makeCard({ title: it.title, subtitle: it.charts, img: it.img, action: it.action })));

releases1.forEach(it => { const div = document.createElement('div'); div.className = 'card small';

const a = document.createElement('a');
if (typeof it.action === "string") a.setAttribute("onclick", it.action);
else if (typeof it.action === "function") a.onclick = it.action;

a.innerHTML = `
  <div class="rpd" onclick="showPlaylist()" style="position:absolute;inset:0;overflow:hidden;border-radius:14px">
    <img src="${it.img}" style="width:100%;height:100%;object-fit:cover"/>
    <div style="position:absolute;inset:0; background:linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.3));"></div>
  </div>
  <div style="visibility: hidden;position:absolute;left:12px;bottom:12px">
    <div class="fft title">${it.title}</div>
    <div class="fft meta">${it.artist}</div>
  </div>
`;

div.appendChild(a);
document.getElementById('releases1').appendChild(div);

}); } populate1();

// =============================== // HTML EXTRA PARA RESULTADOS UNIFICADOS // =============================== // Adicione no HTML da página 1: // <div id="searchResults1" class="search-container" style="display:none;"></div>

// =============================== // CSS (adicione no seu CSS global) // =============================== // .search-container { //   display: grid !important; //   grid-template-columns: repeat(auto-fill, minmax(95px, 1fr)); //   gap: 14px; //   padding: 12px 6px; // }

// =============================== // SISTEMA DE PESQUISA COMPLETO // =============================== document.getElementById('searchInput1').addEventListener('input', (e) => { const query = e.target.value.toLowerCase().trim(); const hasQuery = query !== "";

// Títulos document.getElementById("playlists").style
title.textContent = item.title;
    title.style.fontSize = '14px';
    title.style.fontWeight = '600';
    title.style.color = '#fff';
    title.style.marginBottom = '5px';

    const artist = document.createElement('p');
    artist.textContent = item.artist;
    artist.style.fontSize = '12px';
    artist.style.opacity = '0.7';
    artist.style.color = '#fff';

    textBox.appendChild(title);
    textBox.appendChild(artist);

    card.appendChild(img);
    card.appendChild(textBox);

    resultsContainer.appendChild(card);
  });
}