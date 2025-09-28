// ===============================
// Dados para página 1
// ===============================
document.getElementById("playlist").innerText = "Playlists";
document.getElementById("recente").innerText = "Reproduzidas Recentemente";
document.getElementById("pravoce").innerText = "Para você";

const editors1 = [
  // Exemplo usando ação como string
  {title:'Summer (MIX)', action:'nlx("onclick1")', subtitle:"Playlist", img:'https://i.postimg.cc/J4rFvrmT/8.jpg'},
  // Exemplo sem ação (normal)
  {title:'TY Fest', action:() => nlx("onclick2"), subtitle:"Playlist", img:'https://i.postimg.cc/158Gf2Km/1000390832f.png'},
  // Exemplo usando ação como função
  {title:"Temporal", subtitle:'Playlist', img:'https://i.postimg.cc/fT8PhGRM/9.jpg'}
];

const charts1 = [
  {title:'Summer (MIX)', charts:"Charts", img:'https://i.postimg.cc/J4rFvrmT/8.jpg'},
  {title:'TY Fest', charts:"Charts", img:'https://i.postimg.cc/158Gf2Km/1000390832f.png'},
  {title:"Temporal", charts:'Charts', img:'https://i.postimg.cc/fT8PhGRM/9.jpg'}
];

const releases1 = [
  {title:'Wallker', artist:'Artist A', action:'nlx("release1")', img:'https://picsum.photos/200/200?random=31'},
  {title:'Album B', artist:'Artist B', img:'https://picsum.photos/200/200?random=32'},
  {title:'Album C', artist:'Artist C', action:() => nlx("release3"), img:'https://picsum.photos/200/200?random=33'}
];