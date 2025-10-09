
document.getElementById('updawn').addEventListener('click', () => {
  const url = 'https://wallxnip.github.io/releases/tymusic.updw';
  const nomeArquivo = 'MeuAppNovaVersao.apk'; // nome que você quer

  const a = document.createElement('a');
  a.href = url;
  a.download = nomeArquivo; // aqui você muda o nome
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});