// ===============================
// Dados para página 1 (ações padronizadas como funções)
// ===============================
document.getElementById("playlists").innerText = "Mais tocadas";
document.getElementById("recente").innerText = "Em tópico";
document.getElementById("pravoce").innerText = "Lançamentos";

const editors1 = [
    { 
        title: 'FlashBack', 
        artist: 'Anos 90', 
        img: 'https://i.postimg.cc/KvX8g3cg/Flash-Back.webp',
        action: () => { nlx("flashback"); b(1); },
    },
    { 
        title: 'Wallker', 
        action: () => nlx("wkxd"), 
        subtitle: "Wall-XD", 
        img: 'https://i.postimg.cc/50DdM1k0/wallxnyp.webp'
    },
    { 
        title: 'Rei do Universo', 
        action: () => nlx("jesus"), 
        subtitle: "Jesus", 
        img: 'https://i.postimg.cc/FFdLycDz/js.webp' 
    },
    { 
        title: 'As Melhores', 
        artist: 'Latina', 
        action: () => nlx("latina"), 
        img: 'https://i.postimg.cc/g0DQcZxR/Latina.webp' 
    },
    { 
        title: 'Meditação', 
        action: () => nlx("zentopia"), 
        subtitle: "Zentopia", 
        img: 'https://i.postimg.cc/g2jTYgGg/Zentopia.webp'
    },
    { 
        title: 'Bestiny', 
        subtitle: 'NEFFEX', 
        action: () => nlx("neffex"), 
        img: 'https://i.postimg.cc/7hdyhNmP/Neffex.webp' 
    }
    
];

const charts1 = [
    { 
        title: 'As Melhores', 
        action: () => nlx("wallker"), 
        subtitle: "Wallker", 
        img: 'https://i.postimg.cc/C1MmmJLK/Wallker.webp' 
    },
    { 
        title: 'Crossover', 
        action: () => nlx("crossover"), 
        subtitle: "Wallker", 
        img: 'https://i.postimg.cc/cCtYCdnK/wK.webp' 
    },
    { 
        title: 'Top Rock (Clássic)', 
        charts: "Wallker", 
        img: 'https://i.postimg.cc/nchyMbnj/TheRock.webp', 
        action: () => { nlx("therock"); b(6); },
    },
    { 
        title: 'Funk (MIX)', 
        charts: "Wallker", 
        img: 'https://i.postimg.cc/GtKpnrVx/funk.webp', 
        action: () => { nlx("funk"); b(7); },
    },
    { 
        title: 'Hip-Hop', 
        charts: "Wallker", 
        img: 'https://i.postimg.cc/s2XSNZy8/Hip-Hop.webp', 
        action: () => { nlx("hiphop"); b(5); },
    },
    { 
        title: "Temporal", 
        charts: 'Wallker', 
        img: 'https://i.postimg.cc/25Yrw3LF/Temporal.webp', 
        action: () => { nlx("temporal"); b(4); },
    },
    { 
        title: 'Drilland', 
        action: () => { nlx("drilland"); b(1); },
        subtitle: "Wallker", 
        img: 'https://i.postimg.cc/85J3d5YQ/Drilland.webp' 
    },
    { 
        title: "EDM", 
        subtitle: 'Wallker', 
        action: () => { nlx("alone"); b(3); },
        img: 'https://i.postimg.cc/nr78vkLG/Alone.webp' 
    },
    { 
        title: 'Summer (MIX)', 
        action: () => { nlx("summer"); b(2); },
        subtitle: "Wallker", 
        img: 'https://i.postimg.cc/J44t5H8J/Summer.webp' 
    }
];

const releases1 = [
   { 
        title: 'Trilha Sonora de Games', 
        artist: 'The Last Frequency', 
        action: () => nlx("gamex"), 
        img: 'https://lh3.googleusercontent.com/IQGhWCevU2O7RirrVbKjQAnMYZLq65feHqTPmakpQ0fAWLPxpwMrVF5UHi_elfZgw6g-MxpmSdLrD20=w544-h544-l90-rj' 
    },
    { 
        title: 'Sonder(2023)', 
        artist: 'Dermot Kenedy', 
        action: () => nlx("dermotkennedy"), 
        img: 'https://i.postimg.cc/NfbFJ3vV/dm.webp' 
    },
    { 
        title: 'Pisadinha do Vaqueiro', 
        artist: 'Francildo Silva',
        action: () => nlx("francildosilva"), 
        img: 'https://i.postimg.cc/jjjgm19m/pisadinha.webp' 
    },
    { 
        title: 'Do Sunrise ao Sunset', 
        artist: 'Kiko Chicabana', 
        action: () => nlx("chicabana"), 
        img: 'https://i.postimg.cc/C5xWN10Q/kiko.webp' 
    },
    { 
        title: 'Sky Love do Forró', 
        artist: 'Sky Love', 
        action: () => nlx("skylove"), 
        img: 'https://i.postimg.cc/DfXHdt1m/sky.webp' 
    },
    { 
        title: 'Apaixonado Sempre', 
        artist: 'Robério e seus Teclados', 
        action: () => nlx("roberio"), 
        img: 'https://i.postimg.cc/J0RWNFsF/Roberio.webp' 
    },
    { 
        title: 'Sofrencia', 
        artist: 'Nadson o Ferinha', 
        action: () => nlx("nadson"), 
        img: 'https://i.postimg.cc/tJf0tDKW/Nadson.webp' 
    },
    { 
        title: 'RBD', 
        artist: 'Rebelde', 
        action: () => nlx("rebelde"), 
        img: 'https://i.postimg.cc/qMr4pZvx/RBD.webp' 
    },
    { 
        title: 'Ruby', 
        artist: 'Naya', 
        action: () => nlx("naya"), 
        img: 'https://i.postimg.cc/PqNHyC5w/Naya-Ruby.webp' 
    },
    { 
        title: 'Clássico', 
        artist: 'Sertanejo', 
        action: () => nlx("sertanejo"), 
        img: 'https://lh3.googleusercontent.com/kPg1_jc6u5hrAnhau7j60BjiCWzkFTGKpgBqWGtOQXgp6F1Vdn2DBca0T2w-O5D18fl7GyaECiNEtyEIiw=w544-h544-l90-rj' 
    },
    { 
        title: 'Sem Resposta', 
        artist: 'Luka', 
        action: () => nlx("luka"), 
        img: 'https://i.postimg.cc/HkSNLMK2/luka.webp' 
    },
    { 
        title: 'Love Funk', 
        artist: 'Gaby Saiury', 
        action: () => nlx("gabysaiury"), 
        img: 'https://i.postimg.cc/L50g2YTZ/gaby.webp' 
    },
    { 
        title: 'Banda KLB', 
        artist: 'KLB', 
        action: () => nlx("klb"), 
        img: 'https://i.postimg.cc/VkDm8zCb/klb.webp' 
    },
    { 
        title: 'Forró do Imperador', 
        artist: 'Ihoranes', 
        action: () => nlx("ihoranes"), 
        img: 'https://i.postimg.cc/cLrbL0p8/ihoranes.webp' 
    },
    { 
        title: 'Piseiro', 
        artist: 'Grego do Piseiro', 
        action: () => nlx("grego"), 
        img: 'https://i.postimg.cc/CLcV7yMp/grego.webp' 
    },
    { 
        title: 'A Fabrica', 
        artist: 'Toque Dez', 
        action: () => nlx("toquedez"), 
        img: 'https://lh3.googleusercontent.com/uB6kJXXz7dcbVcqh-JgLUuAaeIiFOEkTIwsOL-m7hOil2vF80sGVQtOydGG6TTeHvsb0TfVjj0Je2s8C=w544-h544-l90-rj' 
    },
    { 
        title: 'Bebinho', 
        artist: 'Cintura de Mola', 
        action: () => nlx("cinturademola"), 
        img: 'https://lh3.googleusercontent.com/7UDZtu3gz2KuD0B27MZr7pzdlIl5xRjKRYeUx5YiVS-Gr7UoKPqDS7fYdPhPfvKclwS9zBwCawyW6f_V=w544-h544-l90-rj' 
    }
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
    <div style="visibility: hidden;position:absolute;left:12px;bottom:12px">
      <div class="fft title">${data.title}</div>
      <div class="fft meta">${data.subtitle}</div>
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
      <div style="visibility: hidden;position:absolute;left:12px;bottom:12px">
        <div class="fft title">${it.title}</div>
        <div class="fft meta">${it.artist}</div>
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
  const hasQuery = query.trim() !== "";

  // Esconde/Mostra títulos
  document.getElementById("playlists").style.display = hasQuery ? "none" : "";
  document.getElementById("recente").style.display = hasQuery ? "none" : "";
  document.getElementById("pravoce").style.display = hasQuery ? "none" : "";

  // Seções da página
  const sections = [
    document.getElementById('editors1'),
    document.getElementById('charts1'),
    document.getElementById('releases1'),
  ];

  const allCards = document.querySelectorAll('#page1 .card');

  // Ativa grade unificada durante a busca
  sections.forEach(sec => {
    sec.classList.toggle('search-grid', hasQuery);
  });

  // Aplica filtro nos cards
  allCards.forEach(card => {
    const title = card.querySelector('.title')?.textContent.toLowerCase() || '';
    const meta = card.querySelector('.meta')?.textContent.toLowerCase() || '';
    const visible = title.includes(query) || meta.includes(query);

    card.style.display = visible ? "flex" : "none";
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