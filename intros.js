function createImageBlock(containerSelector, imageUrls, interval = 3000) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.classList.add('image-block');
  const images = [];

  imageUrls.forEach(url => {
    const img = document.createElement('img');

    // Placeholder transparente
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    img.dataset.src = url;

    container.appendChild(img);
    images.push(img);

    // Pré-carrega a imagem real
    const realImg = new Image();
    realImg.src = url;
    realImg.onload = () => {
      img.src = url;
      // Se for a primeira imagem, já mostra
      if (images.indexOf(img) === 0) img.classList.add('loaded');
    };
  });

  let currentIndex = 0;

  setInterval(() => {
    // Remove a classe da imagem atual
    images[currentIndex].classList.remove('loaded');

    // Passa para a próxima imagem
    currentIndex = (currentIndex + 1) % images.length;

    // Garante que a próxima imagem já está carregada
    const nextImg = images[currentIndex];
    if (nextImg.complete) {
      nextImg.classList.add('loaded');
    } else {
      // Caso ainda não tenha carregado, espera o onload
      nextImg.onload = () => {
        nextImg.classList.add('loaded');
      };
    }
  }, interval);
}

// ---------- Inicialização ----------

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