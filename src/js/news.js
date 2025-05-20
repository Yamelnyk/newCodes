const newsItems = document.querySelectorAll('.news-item');
const viewAllBtn = document.querySelector('.view-all-tab');

const initialVisibleCount = 3;

document.addEventListener('DOMContentLoaded', () => {
  newsItems.forEach((item, index) => {
    if (index >= initialVisibleCount) {
      item.style.display = 'none';
    }
  });
  viewAllBtn.addEventListener('click', () => {
    newsItems.forEach(item => {
      item.style.display = 'block';
    });
    viewAllBtn.style.display = 'none';
  });
});
