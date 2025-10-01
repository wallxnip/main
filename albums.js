// ===============================
// Dados para página 1
// ===============================
document.getElementById("playlist").innerText = "Playlists";
document.getElementById("recente").innerText = "Reproduzidas Recentemente";
document.getElementById("pravoce").innerText = "Para você";

const editors1 = [
  {title:'Summer (MIX)', action:'nlx("onclick1")', subtitle:"Wallker", img:'https://i.postimg.cc/J4rFvrmT/8.jpg'},

  {title:'Drillands', action:() => nlx("drilland"), subtitle:"Wallker", img:'https://i.postimg.cc/vZpDdMGV/2.jpg'},

  {title:"EDM", subtitle:'Wallker', img:'https://i.postimg.cc/HxtL5yXw/1.png'}
];

const charts1 = [
  {title:'Over Hists', charts:"Wallker", img:'https://i.postimg.cc/2Sq3J3NY/10.jpg'},
  {title:'Hip-Hop', charts:"Wallker", img:'https://i.postimg.cc/2y8SxS7P/6.jpg'},
  {title:"The Rock", charts:'Wallker', img:'https://i.postimg.cc/2yc89NH3/7.jpg'}
];

const releases1 = [
  {title:'Ruby', artist:'Naya', action:'nlx("release1")', img:'https://i.postimg.cc/SN9dxjqQ/Naya-une-girl-on-the-moon-prometteuse-interview-Ruby-1.jpg'},
  {title:'One More Night', artist:'Lost Frenquencies', img:'https://i.postimg.cc/sg6MF98M/PAST-EVENTS-Theory-Elevengg.jpg'},
  {title:'Kiss Me', artist:'Dermot Kennedy', action:() => nlx("release3"), img:'https://i.postimg.cc/V6MvCyNt/Dermot-Kennedy-Kiss-Me-Acoustic-Lyrics-Genius-Lyrics.jpg'},

{title:'Playlist', artist:'Tungevaag', action:'nlx("release1")', img:'https://i.postimg.cc/NfxyDwk7/Tungevaag-Dharma-Studio.jpg'},
  {title:'Playlist', artist:'Alan Walker', img:'https://i.postimg.cc/mkfcXLnV/1000393522.jpg'},
  {title:'Playlist', artist:'Flo Rida', action:() => nlx("release3"), img:'https://i.postimg.cc/ZnpN4BN1/Good-Feeling-by-Flo-Rida-Rihanna-lyrics-Piano-sheet-music-Kar.jpg'}

];