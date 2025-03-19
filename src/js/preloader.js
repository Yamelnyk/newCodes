document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-percent');

  let progress = 0;
  let maxProgress = 100;
  let circleDelay = 200;
  let progressInterval = 40;
  let progressStep =
    maxProgress / (circles.length * (circleDelay / progressInterval));

  circles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.opacity = '1';
      circle.style.transform = 'scale(1)';
      circle.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }, index * circleDelay);
  });

  let loadingInterval = setInterval(() => {
    if (progress >= maxProgress) {
      clearInterval(loadingInterval);
    } else {
      progress += progressStep;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${Math.round(progress)}%`;
    }
  }, progressInterval);
});
