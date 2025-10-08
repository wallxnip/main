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

    // Quando carregar a imagem, atualiza o src
    realImg.onload = () => {
      img.src = url;

      // Se ainda não tiver classe 'loaded', aplica imediatamente
      if (!img.classList.contains('loaded')) {
        requestAnimationFrame(() => {
          img.classList.add('loaded');
        });
      }
    };

    // Se a imagem já estiver no cache (local ou internet rápida), aplica imediatamente
    if (realImg.complete) {
      img.src = url;
      img.classList.add('loaded');
    }
  });

  // Exibe a primeira imagem de forma segura
  let currentIndex = 0;
  images[currentIndex].classList.add('loaded');

  // Alterna as imagens automaticamente
  if (images.length > 1) {
    setInterval(() => {
      images[currentIndex].classList.remove('loaded');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('loaded');
    }, interval);
  }
}

// -----------------------------------------
// #Playlist
// -----------------------------------------
createImageBlock('.playlist', [
  'app/wallker/1.jpg',
  'app/wallker/2.jpg',
  'app/wallker/3.jpg',
  'app/wallker/4.jpg',
  'app/splash/1.jpg',
  'app/splash/2.jpg',
  'app/splash/3.jpg',
  'app/splash/4.jpg',
  'app/splash/5.jpg',
  'app/splash/6.jpg',
  'app/splash/7.jpg',
  'app/splash/8.jpg',
  'app/splash/9.jpg',
  'app/splash/10.jpg',
], 16000);

// -----------------------------------------
// #Player
// -----------------------------------------
createImageBlock('.player', [
  'app/splash/7.jpg',
  'app/splash/5.jpg',
  'app/splash/9.jpg',
  'app/splash/4.jpg',
  'app/splash/2.jpg',
  'app/splash/6.jpg',
  'app/splash/10.jpg',
  'app/splash/8.jpg',
  'app/splash/3.jpg',
  'app/splash/1.jpg',
  'app/wallker/1.jpg',
  'app/wallker/2.jpg',
  'app/wallker/3.jpg',
  'app/wallker/4.jpg',
], 16000);

// -----------------------------------------
// #Album
// -----------------------------------------
createImageBlock('.album', [
  'app/wallker/1.jpg',
  'app/wallker/2.jpg',
  'app/wallker/3.jpg',
  'app/wallker/4.jpg',
  'app/wallker/1.jpg',
  'app/wallker/2.jpg',
  'app/wallker/3.jpg',
  'app/wallker/4.jpg',
  'app/splash/1.jpg',
  'app/splash/2.jpg',
  'app/splash/3.jpg',
  'app/splash/4.jpg',
  'app/splash/5.jpg',
  'app/splash/6.jpg',
  'app/splash/7.jpg',
  'app/splash/8.jpg',
  'app/splash/9.jpg',
  'app/splash/10.jpg',
], 16000);