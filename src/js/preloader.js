let duration = 3000;
document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-percent');

  let progress = 0;
  let maxProgress = 100;
  let totalCircles = circles.length;

  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;

    let elapsedTime = time - startTime;

    let currentStep = Math.min(
      Math.floor((elapsedTime / duration) * totalCircles),
      totalCircles
    );

    for (let i = 0; i < currentStep; i++) {
      circles[i].style.opacity = '1';
      circles[i].style.transform = 'scale(1)';
      circles[i].style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    progress = Math.min((elapsedTime / duration) * maxProgress, maxProgress);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;

    if (progress < maxProgress) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
});

const preloader = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.add('is-loaded');
    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    });
  }, duration);
});
