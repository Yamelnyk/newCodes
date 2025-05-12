export default function observeItems(selector) {
  const options = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll(selector).forEach(item => {
    observer.observe(item);
  });
}
observeItems('.animation-item');
observeItems('.animation-partner');
