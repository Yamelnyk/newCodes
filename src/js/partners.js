document.addEventListener('DOMContentLoaded', () => {
  const partnerItems = document.querySelectorAll('.partner-item');
  const seeAllPartnersBtn = document.querySelector('.see-all-tab');
  const initialVisiblePartners = 8;

  const updatePartnersVisibility = () => {
    if (window.innerWidth <= 767) {
      partnerItems.forEach((item, index) => {
        item.style.display = index < initialVisiblePartners ? 'block' : 'none';
      });
      seeAllPartnersBtn.style.display = 'block';
    } else {
      partnerItems.forEach(item => {
        item.style.display = 'block';
      });
      seeAllPartnersBtn.style.display = 'none';
    }
  };

  seeAllPartnersBtn.addEventListener('click', () => {
    partnerItems.forEach(item => {
      item.style.display = 'block';
    });
    seeAllPartnersBtn.style.display = 'none';
  });

  updatePartnersVisibility();
  window.addEventListener('resize', updatePartnersVisibility);
});
