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

const expertsTabList = document.querySelector('.experts-items');
const speakerItems = document.querySelectorAll('.speaker-item');
const tabItems = expertsTabList.querySelectorAll('.experts-item');

function filter() {
  expertsTabList.addEventListener('click', event => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if (target.classList.contains('experts-item')) {
      tabItems.forEach(tabItem => tabItem.classList.remove('is-active'));
      target.classList.add('is-active');
    }

    switch (targetId) {
      case 'all':
        getItems('speaker-item');
        break;
      case 'digital':
        getItems('digital-artist');
        break;
      case 'nft':
        getItems('nft-enthusiast');
        break;
      case 'fashion':
        getItems('fashion-designer');

        break;
      case 'influencers':
        getItems('influencer');
        break;
    }
  });
}
filter();

function getItems(className) {
  speakerItems.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
