document.addEventListener('DOMContentLoaded', () => {
  const partnerItems = document.querySelectorAll('.partner-item');
  const seeAllBtn = document.querySelector('.see-all-tab');
  const initialVisiblePartners = 8;

  const showItems = () => {
    if (window.innerWidth <= 767) {
      if (seeAllBtn.dataset.expanded === 'true') {
        partnerItems.forEach((item, index) => {
          item.style.display =
            index < initialVisiblePartners ? 'block' : 'none';
        });
        seeAllPartnersBtn.style.display = 'block';
      }
    } else {
      partnerItems.forEach(item => {
        item.style.display = 'block';
      });
      seeAllPartnersBtn.style.display = 'none';
    }
  };

  seeAllBtn.addEventListener('click', () => {
    partnerItems.forEach(item => {
      item.style.display = 'block';
    });
    seeAllBtn.style.display = 'none';
  });

  window.addEventListener('resize', showItems);
  showItems();
});
