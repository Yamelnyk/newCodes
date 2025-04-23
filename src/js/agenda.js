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
    dates.forEach(date => date.classList.toggle('active-dates'));
  });
});
