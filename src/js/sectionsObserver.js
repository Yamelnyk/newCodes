document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let scrollPos = window.scrollY + window.innerHeight / 3;
    let activeSection = null;

    sections.forEach(section => {
      if (
        section.id &&
        section.offsetTop < scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        activeSection = section.id;
      }
    });

    navLinks.forEach(link => link.classList.remove('current'));

    if (activeSection) {
      const activeLink = document.querySelector(
        `.nav-link[href='#${activeSection}']`
      );

      if (activeLink) {
        activeLink.classList.add('current');
      }
    }
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});
