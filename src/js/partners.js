document.addEventListener('DOMContentLoaded', () => {
  const partnerItems = document.querySelectorAll('.partner-item');
  const seeAllBtn = document.querySelector('.see-all-tab');
  const initialVisible = 8;

  const showItems = () => {
    const isMobile = window.innerWidth <= 766;
    const isExpanded = seeAllBtn.dataset.expanded === 'true';

    partnerItems.forEach((item, index) => {
      item.style.display =
        !isMobile || isExpanded || index < initialVisible ? 'block' : 'none';
    });

    seeAllBtn.style.display = isMobile && !isExpanded ? 'block' : 'none';
  };

  seeAllBtn.addEventListener('click', () => {
    seeAllBtn.dataset.expanded = 'true';
    showItems();
  });

  window.addEventListener('resize', showItems);
  showItems();
});
