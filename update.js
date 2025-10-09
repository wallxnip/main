    document.getElementById('updawn').addEventListener('click', () => {
      // URL do arquivo no servidor
      const url = 'https://seusite.com/update/app.apk';

      // Cria um link temporário para forçar download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'app.apk'; // nome do arquivo salvo
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });