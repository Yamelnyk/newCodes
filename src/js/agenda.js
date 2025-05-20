const agendaContainer = document.querySelector('.agenda-container');
const datesWrapper = agendaContainer.querySelector('.dates-wrapper');
const dates = datesWrapper.querySelectorAll('.dates');

agendaContainer.addEventListener('click', event => {
  if (event.target.classList.contains('agenda-see-more-tab')) {
    const agendaBlock = event.target.closest('.agenda-block');
    agendaBlock.classList.toggle('expanded');

    const isExpanded = agendaBlock.classList.contains('expanded');
    event.target.textContent = isExpanded ? 'See less' : 'See more';
  }
});

dates.forEach(date => {
  date.addEventListener('click', () => {
    dates.forEach(d => d.classList.remove('active-dates'));
    date.classList.add('active-dates');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const firstDayLink = document.querySelector('.first-day');
  const secondDayLink = document.querySelector('.second-day');
  const agendaBlocks = document.querySelectorAll(
    '.agenda-block-23, .agenda-block-24'
  );

  let currentDay = null;

  const observerOptions = {
    threshold: 1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const isDay23 = entry.target.classList.contains('agenda-block-23');
        const isDay24 = entry.target.classList.contains('agenda-block-24');

        const newDay = isDay23 ? '23' : isDay24 ? '24' : null;

        if (newDay && newDay !== currentDay) {
          currentDay = newDay;
          firstDayLink.classList.toggle('active-dates', newDay === '23');
          secondDayLink.classList.toggle('active-dates', newDay === '24');
        }
      }
    });
  }, observerOptions);

  agendaBlocks.forEach(block => observer.observe(block));
});
