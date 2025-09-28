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
  {title:'Ruby', artist:'Naya', action:'nlx("release1")', img:'https://i.postimg.cc/SN9dxjqQ/Naya-une-girl-on-the-moon-prometteuse-interview-Ruby-1.jpg'},
  {title:'One More Night', artist:'Lost Frenquencies', img:'https://i.postimg.cc/sg6MF98M/PAST-EVENTS-Theory-Elevengg.jpg'},
  {title:'Kiss Me', artist:'Dermot Kennedy', action:() => nlx("release3"), img:'https://i.postimg.cc/V6MvCyNt/Dermot-Kennedy-Kiss-Me-Acoustic-Lyrics-Genius-Lyrics.jpg'},

{title:'Ruby', artist:'Naya', action:'nlx("release1")', img:'https://i.postimg.cc/SN9dxjqQ/Naya-une-girl-on-the-moon-prometteuse-interview-Ruby-1.jpg'},
  {title:'One More Night', artist:'Lost Frenquencies', img:'https://i.postimg.cc/sg6MF98M/PAST-EVENTS-Theory-Elevengg.jpg'},
  {title:'Kiss Me', artist:'Dermot Kennedy', action:() => nlx("release3"), img:'https://i.postimg.cc/V6MvCyNt/Dermot-Kennedy-Kiss-Me-Acoustic-Lyrics-Genius-Lyrics.jpg'}

];