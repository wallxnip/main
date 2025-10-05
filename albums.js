// ===============================
// Dados para página 1 (ações padronizadas como funções)
// ===============================
document.getElementById("playlist").innerText = "Playlists";
document.getElementById("recente").innerText = "Reproduzidas Recentemente";
document.getElementById("pravoce").innerText = "Para você";

const editors1 = [
    { 
        title: 'Summer (MIX)', 
        action: () => nlx("summer"), 
        subtitle: "Wallker", 
        img: 'https://i.postimg.cc/J4rFvrmT/8.jpg' 
    },
    { 
        title: 'Drilland', 
        action: () => nlx("drilland"), 
        subtitle: "Wallker", 
        img: 'https://i.postimg.cc/vZpDdMGV/2.jpg' 
    },
    { 
        title: "EDM", 
        subtitle: 'Wallker', 
        action: () => nlx("alone"), 
        img: 'https://i.postimg.cc/HxtL5yXw/1.png' 
    }
];

const charts1 = [
    { 
        title: 'Funk (MIX)', 
        charts: "Wallker", 
        img: 'https://i.postimg.cc/Y2fVdGcG/4.png', 
        action: () => nlx("funk") 
    },
    { 
        title: 'Hip-Hop', 
        charts: "Wallker", 
        img: 'https://i.postimg.cc/2y8SxS7P/6.jpg', 
        action: () => nlx("hiphop") 
    },
    { 
        title: "Temporal", 
        charts: 'Wallker', 
        img: 'https://i.postimg.cc/TYFtZ4Fb/Beauty-Plus-20251002134530125-save.jpg', 
        action: () => nlx("temporal") 
    }
];

const releases1 = [
    { 
        title: 'DJ EN', 
        artist: 'Nostalgia', 
        action: () => nlx("djen"), 
        img: 'https://i.postimg.cc/tJsbJ6By/1000468910.jpg' 
    },
    { 
        title: 'Pisadinha do Vaqueiro', 
        artist: 'Francildo Silva',
        action: () => nlx("francildosilva"), 
        img: 'https://i.postimg.cc/pXg3vxVc/Pisadinha-do-Vaqueiro.jpg' 
    },
    { 
        title: 'Axé das Antigas', 
        artist: 'Kiko Chicabana', 
        action: () => nlx("chicabana"), 
        img: 'https://i.postimg.cc/d0f98rQq/Chicabana.jpg' 
    },
    { 
        title: 'Sky Love do Forró', 
        artist: 'Sky Love', 
        action: () => nlx("skylove"), 
        img: 'https://i.postimg.cc/wBrkhLx9/Sou-Love.jpg' 
    },
    { 
        title: 'Apaixonado Sempre', 
        artist: 'Robério e seus Teclados', 
        action: () => nlx("roberio"), 
        img: 'https://i.postimg.cc/xT8JDCKG/Rob-rio.jpg' 
    },






];


// ===============================
// Função para criar cards
// ===============================
function makeCard(data) {
  const div = document.createElement('div');
  div.className = 'card';

  const a = document.createElement('a');

  // se for string, usa como onclick inline
  if (typeof data.action === "string") {
    a.setAttribute("onclick", data.action);
  }
  // se for função, associa diretamente
  else if (typeof data.action === "function") {
    a.onclick = data.action;
  }

  a.innerHTML = `
    <div class="rpd" onclick="showPlaylist()" style="position:absolute;inset:0;overflow:hidden;border-radius:14px">
      <img src="${data.img}" style="width:100%;height:100%;object-fit:cover"/>
      <div style="position:absolute;inset:0; background:linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.3));"></div>
    </div>
    <div style="position:absolute;left:12px;bottom:12px">
      <div class="title">${data.title}</div>
      <div class="meta">${data.subtitle||data.artist||data.charts||''}</div>
    </div>
  `;
  div.appendChild(a);
  return div;
}

// ===============================
// Popula página 1 (correção charts1)
// ===============================
function populate1() {
  // Editors
  editors1.forEach(it => document.getElementById('editors1').appendChild(makeCard(it)));

  // Charts (corrigido: agora passa action)
  charts1.forEach(it => document.getElementById('charts1')
    .appendChild(makeCard({
      title: it.title,
      subtitle: it.charts,
      img: it.img,
      action: it.action   // <- correção aplicada
    }))
  );

  // Releases
  releases1.forEach(it => {
    const div = document.createElement('div');
    div.className = 'card small';

    const a = document.createElement('a');
    if (typeof it.action === "string") {
      a.setAttribute("onclick", it.action);
    } else if (typeof it.action === "function") {
      a.onclick = it.action;
    }

    a.innerHTML = `
    <div class="rpd" onclick="showPlaylist()" style="position:absolute;inset:0;overflow:hidden;border-radius:14px">
      <img src="${it.img}" style="width:100%;height:100%;object-fit:cover"/>
      <div style="position:absolute;inset:0; background:linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.3));"></div>
    </div>
      <div style="position:absolute;left:12px;bottom:12px">
        <div class="title">${it.title}</div>
        <div class="meta">${it.artist}</div>
      </div>
    `;
    div.appendChild(a);
    document.getElementById('releases1').appendChild(div);
  });
}
populate1();

// ===============================
// Pesquisa página 1
// ===============================
document.getElementById('searchInput1').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const allCards = document.querySelectorAll('#page1 .card');
  allCards.forEach(card => {
    const title = card.querySelector('.title')?.textContent.toLowerCase() || '';
    const meta = card.querySelector('.meta')?.textContent.toLowerCase() || '';
    const visible = title.includes(query) || meta.includes(query);
    if (card.classList.contains('small')) card.style.display = visible ? 'grid' : 'none';
    else card.style.display = visible ? 'flex' : 'none';
  });
});

// ===============================
// Event delegation para showPlaylist em todas as abas
// ===============================
document.addEventListener('click', (e) => {
  const link = e.target.closest('a'); // encontra o <a> mais próximo
  if (!link) return;

  const onclickAttr = link.getAttribute('onclick');
  if (onclickAttr && onclickAttr.includes('showPlaylist')) {
    e.preventDefault(); // evita comportamento padrão do <a>
    showPlaylist();     // chama a função
  }
});