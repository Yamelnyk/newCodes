document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown-button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
  const dropDownListItems = dropDownList.querySelectorAll(
    '.dropdown-list-item'
  );
  const dropDownInput = dropDownWrapper.querySelector('.dropdown-input-hidden');

  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown-list-visible');
    dropDownWrapper.classList.toggle('is-open');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown-list-visible');
      dropDownWrapper.classList.toggle('is-open');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove('dropdown-list-visible');
      dropDownWrapper.classList.toggle('is-open');
    }
  });
});

const expertsTabList = document.querySelector('.experts-item');
const expertsItem = document.querySelectorAll('.experts-item');
function filter() {
  expertsTabList.addEventListener('click', event => {});
}
filter();
