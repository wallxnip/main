function createImageBlock(containerSelector, imageUrls, interval = 3000) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Estilos do container
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.overflow = 'hidden';

  const imgA = document.createElement('img');
  const imgB = document.createElement('img');

  [imgA, imgB].forEach(img => {
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.8s ease-in-out';
    container.appendChild(img);
  });

  let currentIndex = 0;
  let showingA = true;

  function showImage(index) {
    const nextUrl = imageUrls[index];
    const imgToShow = showingA ? imgB : imgA;
    const imgToHide = showingA ? imgA : imgB;

    const tempImg = new Image();
    tempImg.src = nextUrl;
    tempImg.onload = () => {
      imgToShow.src = nextUrl;

      imgToShow.style.opacity = '1';
      imgToHide.style.opacity = '0';

      showingA = !showingA;
    };
  }

  // Inicializa primeira imagem
  imgA.src = imageUrls[0];
  imgA.style.opacity = '1';

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage(currentIndex);
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