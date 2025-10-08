// Função para criar um bloco de imagens que troca automaticamente
function createImageBlock(containerSelector, imageUrls, interval = 3000) {
  const container = document.querySelector(containerSelector);
  if (!container) return; // Se a div não existir, sai da função

  container.classList.add('image-block');
  const images = [];

  imageUrls.forEach(url => {
    const img = document.createElement('img');

    // Imagem temporária (placeholder transparente)
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    img.dataset.src = url;

    container.appendChild(img);
    images.push(img);

    // Pré-carrega a imagem real
    const realImg = new Image();
    realImg.src = url;
    realImg.onload = () => {
      img.src = url;
    };
  });

  // Exibe a primeira imagem
  let currentIndex = 0;
  images[currentIndex].classList.add('loaded');

  // Alterna as imagens automaticamente
  setInterval(() => {
    images[currentIndex].classList.remove('loaded');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('loaded');
  }, interval);
}

// -----------------------------------------
// #Playlist
// -----------------------------------------
createImageBlock('.playlist', [
  'https://i.postimg.cc/GpkBNhY8/Melody.webp',
  'https://i.postimg.cc/bvQGMNbG/Alok.webp',
  'https://i.postimg.cc/cH47ZndT/DJ-marshmallow.webp',
  'https://i.postimg.cc/258Rp0LQ/Lavigne.webp',
  'https://i.postimg.cc/MKWYmNCj/Hungria-hip-Hop.webp',
  'https://i.postimg.cc/LX0t8bbv/Ana-Castela.webp',
  'https://i.postimg.cc/Cx3bZ2Sp/Gabi-Sayuri.webp,
  'https://i.postimg.cc/dQgCNXZ3/Justin-Bieber.webp',
  'https://i.postimg.cc/DZLhv85K/Lost-Frequence.webp'
], 16000);

// -----------------------------------------
// #Player
// -----------------------------------------
createImageBlock('.player', [
  'https://i.postimg.cc/GpkBNhY8/Melody.webp',
  'https://i.postimg.cc/bvQGMNbG/Alok.webp',
  'https://i.postimg.cc/cH47ZndT/DJ-marshmallow.webp',
  'https://i.postimg.cc/258Rp0LQ/Lavigne.webp',
  'https://i.postimg.cc/MKWYmNCj/Hungria-hip-Hop.webp',
  'https://i.postimg.cc/LX0t8bbv/Ana-Castela.webp',
  'https://i.postimg.cc/Cx3bZ2Sp/Gabi-Sayuri.webp,
  'https://i.postimg.cc/dQgCNXZ3/Justin-Bieber.webp',
  'https://i.postimg.cc/DZLhv85K/Lost-Frequence.webp'
], 16000);

// -----------------------------------------
// #Album
// -----------------------------------------
createImageBlock('.album', [
  'https://i.postimg.cc/GpkBNhY8/Melody.webp',
  'https://i.postimg.cc/bvQGMNbG/Alok.webp',
  'https://i.postimg.cc/cH47ZndT/DJ-marshmallow.webp',
  'https://i.postimg.cc/258Rp0LQ/Lavigne.webp',
  'https://i.postimg.cc/MKWYmNCj/Hungria-hip-Hop.webp',
  'https://i.postimg.cc/LX0t8bbv/Ana-Castela.webp',
  'https://i.postimg.cc/Cx3bZ2Sp/Gabi-Sayuri.webp,
  'https://i.postimg.cc/dQgCNXZ3/Justin-Bieber.webp',
  'https://i.postimg.cc/DZLhv85K/Lost-Frequence.webp'
], 16000);