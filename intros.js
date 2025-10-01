function createImageBlock(containerSelector, imageUrls, interval = 3000) {
    const container = document.querySelector(containerSelector);
    if (!container) return; // se a div não existir, não faz nada

    container.classList.add('image-block');

    const images = [];

    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
      img.dataset.src = url;
      container.appendChild(img);
      images.push(img);

      const realImg = new Image();
      realImg.src = url;
      realImg.onload = () => {
        img.src = url;
      };
    });

    let currentIndex = 0;
    images[currentIndex].classList.add('loaded');

    setInterval(() => {
      images[currentIndex].classList.remove('loaded');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('loaded');
    }, interval);
  }

  // #Playlist
  createImageBlock('.playlist', [
    'https://i.postimg.cc/tRFVgW6v/N-o-vou-sair-da-sua-cabe-a-JPG-1.jpg', 'https://i.postimg.cc/d3Qv0dbp/Pin-by-Emma-on-Singers-Justin-bieber-wallpaper-Justin-bieb.jpg',
'https://i.postimg.cc/nrLbxx7t/Lost-Frequencies-Concert-Music-Festival.jpg',

'https://i.postimg.cc/QCj5x4xD/Beauty-Plus-20250924221125271-save.jpg',

'https://i.postimg.cc/L6ZQ1hmb/img1-wallspic-com-sialkot-fort-youtube-light-purple-entertainment-3260x5794.jpg',

'https://i.postimg.cc/0jS3PNQF/Beauty-Plus-20250924215246383-savev.png',

'https://i.postimg.cc/52grxT44/Beauty-Plus-20250924215754376-save.jpg',

'https://i.postimg.cc/TPSC1XZ6/Alok-abrir-o-Sumar-Arena-Music-com-o-melhor-da-m-sica-eletr-ni.jpg',


'https://i.postimg.cc/4N0FSVxP/Melody-faz-anivers-rio-e-planeja-fest-o-de-15-anos-Vai-ser-baba.png',



  ], 16000);



  // #Player
  createImageBlock('.player', [
    'https://i.postimg.cc/02tkr5C3/1000390832.jpg',
    'https://i.postimg.cc/brfDTN7R/N-o-vou-sair-da-sua-cabe-a-JPG-0.jpg',
  ], 7000);








 // #Album
  createImageBlock('.album', [
'https://i.postimg.cc/xj7FtWg7/Beauty-Plus-20250910073110783-save.jpg',
   
'https://i.postimg.cc/26fmg1zq/Beauty-Plus-20250911092055747-save.jpg',

'https://i.postimg.cc/132ycW2r/Beauty-Plus-20250911095018587-save.jpg',

'https://i.postimg.cc/Prfftv1Y/Beauty-Plus-20250913154854650-save.jpg',

 'https://i.postimg.cc/yxMTTChz/Beauty-Plus-20250905014933282-save.jpg',
  ], 16000);