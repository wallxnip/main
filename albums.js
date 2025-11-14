// ===============================
// CONFIG TEXTOS DA PÁGINA 1
// ===============================
document.getElementById("playlists").innerText = "Playlists";
document.getElementById("recente").innerText = "Reproduzidas Recentemente";
document.getElementById("pravoce").innerText = "Para você";


// ===============================
// LISTAS
// ===============================

const editors1 = [
    { title: 'Crossover', subtitle: "Wallker", img: 'https://i.postimg.cc/cCtYCdnK/wK.webp', action: () => nlx("crossover") },
    { title: 'Summer (MIX)', subtitle: "Wallker", img: 'https://i.postimg.cc/J44t5H8J/Summer.webp', action: () => nlx("summer") },
    { title: 'Drilland', subtitle: "Wallker", img: 'https://i.postimg.cc/85J3d5YQ/Drilland.webp', action: () => nlx("drilland") },
    { title: "EDM", subtitle: 'Wallker', img: 'https://i.postimg.cc/nr78vkLG/Alone.webp', action: () => nlx("alone") }
];

const charts1 = [
    { title: 'Top Rock (Clássic)', subtitle: "Wallker", img: 'https://i.postimg.cc/nchyMbnj/TheRock.webp', action: () => nlx("therock") },
    { title: 'Funk (MIX)', subtitle: "Wallker", img: 'https://i.postimg.cc/RhYxG80b/Funk.webp', action: () => nlx("funk") },
    { title: 'Hip-Hop', subtitle: "Wallker", img: 'https://i.postimg.cc/s2XSNZy8/Hip-Hop.webp', action: () => nlx("hiphop") },
    { title: "Temporal", subtitle: 'Wallker', img: 'https://i.postimg.cc/25Yrw3LF/Temporal.webp', action: () => nlx("temporal") }
];

const releases1 = [
    { title: 'Pisadinha do Vaqueiro', subtitle: 'Francildo Silva', action: () => nlx("francildosilva"), img: 'https://i.postimg.cc/2SYbMkP4/Pisadinha-do-Vaqueiro.webp' },
    { title: 'Axé das Antigas', subtitle: 'Kiko Chicabana', action: () => nlx("chicabana"), img: 'https://i.postimg.cc/ZKc6xvMD/Chicabana.webp' },
    { title: 'Sky Love do Forró', subtitle: 'Sky Love', action: () => nlx("skylove"), img: 'https://i.postimg.cc/mg4BBtLK/Sou-Love.webp' },
    { title: 'Apaixonado Sempre', subtitle: 'Robério e seus Teclados', action: () => nlx("roberio"), img: 'https://i.postimg.cc/J0RWNFsF/Roberio.webp' },
    { title: 'Bestiny', subtitle: 'NEFFEX', action: () => nlx("neffex"), img: 'https://i.postimg.cc/7hdyhNmP/Neffex.webp' },
    { title: 'As Melhores', subtitle: 'Latina', action: () => nlx("latina"), img: 'https://i.postimg.cc/g0DQcZxR/Latina.webp' },
    { title: 'Trilha Sonora de Games', subtitle: 'The Last Frequency', action: () => nlx("gamex"), img: 'https://i.postimg.cc/TYvxsCc7/legacy.webp' },
];


// ===============================
// LISTA UNIFICADA PARA PESQUISA
// ===============================
const allSearchItems = [
    ...editors1,
    ...charts1,
    ...releases1
];


// ===============================
// Função para criar cards
// ===============================
function makeCard(data) {
  const div = document.createElement('div');
  div.className = 'card';

  const a = document.createElement('a');

  if (typeof data.action === "string") a.setAttribute("onclick", data.action);
  else if (typeof data.action === "function") a.onclick = data.action;

  a.innerHTML = `
    <div class="rpd" onclick="showPlaylist()" style="position:absolute;inset:0;overflow:hidden;border-radius:14px">
      <img src="${data.img}" style="width:100%;height:100%;object-fit:cover"/>
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.3));"></div>
    </div>
    <div style="visibility:hidden;position:absolute;left:12px;bottom:12px">
      <div class="fft title">${data.title}</div>
      <div class="fft meta">${data.subtitle}</div>
    </div>
  `;
  div.appendChild(a);
  return div;
}


// ===============================
// POPULAR PÁGINA 1
// ===============================
function populate1() {
  
  editors1.forEach(it => 
    document.getElementById('editors1').appendChild(makeCard(it))
  );

  charts1.forEach(it => 
    document.getElementById('charts1').appendChild(makeCard(it))
  );

  releases1.forEach(it => {
    const card = makeCard(it);
    card.classList.add("small");
    document.getElementById('releases1').appendChild(card);
  });
}
populate1();


// ===============================
// FUNÇÃO DE PESQUISA
// ===============================
document.getElementById("searchInput1").addEventListener("input", e => {
  runSearchPage1(e.target.value);
});

function runSearchPage1(q) {
  q = q.toLowerCase().trim();
  
  const box = document.getElementById("searchResults");
  const grid = document.getElementById("searchGrid");

  if (q === "") {
    box.style.display = "none";
    grid.innerHTML = "";

    // mostrar tudo
    document.getElementById("playlists").style.display = "block";
    document.getElementById("recente").style.display = "block";
    document.getElementById("pravoce").style.display = "block";

    document.getElementById("editors1").style.display = "grid";
    document.getElementById("charts1").style.display = "grid";
    document.getElementById("releases1").style.display = "grid";
    return;
  }

  // ativar resultados
  box.style.display = "block";
  grid.style.display = "grid";
  grid.innerHTML = "";

  // esconder home
  document.getElementById("playlists").style.display = "none";
  document.getElementById("recente").style.display = "none";
  document.getElementById("pravoce").style.display = "none";

  document.getElementById("editors1").style.display = "none";
  document.getElementById("charts1").style.display = "none";
  document.getElementById("releases1").style.display = "none";

  const results = allSearchItems.filter(it =>
    it.title.toLowerCase().includes(q) ||
    it.subtitle.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    grid.innerHTML = "<p style='color:#aaa;padding:10px;'>Nenhum resultado encontrado.</p>";
    return;
  }

  results.forEach(it => grid.appendChild(makeCard(it)));
}