document.getElementById('updawn').addEventListener('click', () => {
  const url = 'https://wallxnip.github.io/releases/tymusic.updw';
  
  const a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});