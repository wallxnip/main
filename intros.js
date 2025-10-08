function createImageBlock(containerSelector, imageUrls, interval = 3000) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.classList.add('image-block');

  // Criamos apenas duas imagens para alternar
  const imgA = document.createElement('img');
  const imgB = document.createElement('img');
  container.appendChild(imgA);
  container.appendChild(imgB);

  let currentIndex = 0;
  let showingA = true;

  // Função para pré-carregar e mostrar imagem
  function showImage(index) {
    const nextUrl = imageUrls[index];

    const imgToShow = showingA ? imgB : imgA;
    const imgToHide = showingA ? imgA : imgB;

    // Pré-carrega a imagem
    const tempImg = new Image();
    tempImg.src = nextUrl;
    tempImg.onload = () => {
      imgToShow.src = nextUrl;

      // Faz fade
      imgToShow.classList.add('visible');
      imgToHide.classList.remove('visible');

      // Alterna para próxima
      showingA = !showingA;
    };
  }

  // Inicializa com a primeira imagem
  imgA.src = imageUrls[0];
  imgA.classList.add('visible');

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