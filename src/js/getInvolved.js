const itemBlock = document.querySelector('.keep-touch-wrap');
const form = itemBlock.querySelector('.subscribe-form');
const receivBlock = document.querySelector('.submission-wrap');
const returnBtn = receivBlock.querySelector('.return-tab');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = form.querySelector('.email-area-input');
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    return;
  } else {
    itemBlock.classList.toggle('hidden');
    receivBlock.classList.toggle('hidden');
  }
  emailInput.value = '';
});

returnBtn.addEventListener('click', e => {
  e.preventDefault();

  receivBlock.classList.toggle('hidden');
  itemBlock.classList.toggle('hidden');
});
