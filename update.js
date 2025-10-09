    document.getElementById('updawn').addEventListener('click', () => {
      // URL do arquivo no servidor
      const url = 'https://wallxnip.github.io/releases/tymusic.updw';

      // Cria um link temporário para forçar download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Ty Music 1.0.apk'; // nome do arquivo salvo
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });