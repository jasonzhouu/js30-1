import '../styles/index.scss';

const audios = document.querySelectorAll('audio');

window.addEventListener('keypress', e => {
  const audio = document.querySelector(`audio[data-key='${e.key}']`);
  const key = document.querySelector(`button[data-key='${e.key}']`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

audios.forEach(audio => {
  audio.addEventListener('ended', e => {
    const targetKey = e.target.getAttribute('data-key');
    const matchedKey = document.querySelector(`button[data-key='${targetKey}']`);
    matchedKey.classList.remove('playing');
  });
});
