const partnerItems = document.querySelectorAll('.partner-item');
const seeAllPartnersBtn = document.querySelector('.see-all-tab');
const partnersGrid = document.querySelector('.partners-grid');

const initialVisiblePartners = 8;

document.addEventListener('DOMContentLoaded', () => {
  partnerItems.forEach((item, index) => {
    if (index >= initialVisiblePartners) {
      item.style.display = 'none';
    }
  });

  seeAllPartnersBtn.addEventListener('click', () => {
    partnerItems.forEach(item => {
      item.style.display = 'block';
    });
    seeAllPartnersBtn.style.display = 'none';
  });
});
