document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.header-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const htmlElement = document.documentElement;
  const navWrapper = document.querySelector('.nav-wrapper');

  menuButton.addEventListener('click', function () {
    const isOpen = htmlElement.classList.toggle('menu-open');
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
    menuButton.style.backgroundColor = isOpen ? '#232323' : '';
    menuButton.style.color = isOpen ? ' #FDFDFD' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      htmlElement.classList.remove('menu-open');
      menuButton.textContent = 'Menu';
      menuButton.style.backgroundColor = '';
      menuButton.style.color = '';
    });
  });

  document.addEventListener('click', function (event) {
    const isMenuOpen = htmlElement.classList.contains('menu-open');
    const clickedOutside =
      !navWrapper.contains(event.target) && !menuButton.contains(event.target);

    if (isMenuOpen && clickedOutside) {
      htmlElement.classList.remove('menu-open');
      menuButton.textContent = 'Menu';
      menuButton.style.backgroundColor = '';
      menuButton.style.color = '';
    }
  });
});
