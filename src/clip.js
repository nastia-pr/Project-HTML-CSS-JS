const containerImg = document.querySelector('.container-img-clip');
let animationPaused = false;

containerImg.addEventListener('click', function() {
  if (animationPaused) {
    containerImg.style.animationPlayState = 'running';
    animationPaused = false;
  } else {
    containerImg.style.animationPlayState = 'paused';
    animationPaused = true;
  }
});