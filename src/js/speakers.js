import AOS from 'aos';

const speakerItems = document.querySelectorAll('.speaker-item');
const loadmoreBtn = document.querySelector('.see-more-tab');
let currentItems = 9;

let activeClass = 'speaker-item';

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown-button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
  const dropDownListItems = dropDownList.querySelectorAll(
    '.dropdown-list-item'
  );

  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown-list-visible');
    dropDownWrapper.classList.toggle('is-open');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownList.classList.remove('dropdown-list-visible');
      dropDownWrapper.classList.remove('is-open');
      filterSpeakersByCategory(this.dataset.value);
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove('dropdown-list-visible');
      dropDownWrapper.classList.remove('is-open');
    }
  });
});

const expertsTabList = document.querySelector('.experts-items');
const tabItems = expertsTabList.querySelectorAll('.experts-item');

function filterSpeakerDesk() {
  expertsTabList.addEventListener('click', event => {
    const target = event.target;
    const targetId = target.dataset.id;

    if (target.classList.contains('experts-item')) {
      tabItems.forEach(tabItem => tabItem.classList.remove('is-active'));
      target.classList.add('is-active');
      filterSpeakersByCategory(targetId);
    }
  });
}
filterSpeakerDesk();

function filterSpeakersByCategory(category) {
  switch (category) {
    case 'all':
      activeClass = 'speaker-item';
      break;
    case 'digital':
      activeClass = 'digital-artist';
      break;
    case 'nft':
      activeClass = 'nft-enthusiast';
      break;
    case 'fashion':
      activeClass = 'fashion-designer';
      break;
    case 'influencers':
      activeClass = 'influencer';
      break;
  }
  currentItems = 9;
  getItems(activeClass);
}

function getItems(className) {
  let count = 0;
  speakerItems.forEach(item => {
    if (className === 'speaker-item' || item.classList.contains(className)) {
      count++;
      item.style.display = count <= currentItems ? 'inline-block' : 'none';
    } else {
      item.style.display = 'none';
    }
  });
  AOS.refresh();
  handleLoadMoreVisibility();
}

function handleLoadMoreVisibility() {
  const matchingItems = [...speakerItems].filter(
    item =>
      item.classList.contains(activeClass) || activeClass === 'speaker-item'
  );

  if (currentItems >= matchingItems.length) {
    loadmoreBtn.style.display = 'none';
  } else {
    loadmoreBtn.style.display = 'inline-block';
  }
}

if (loadmoreBtn) {
  loadmoreBtn.addEventListener('click', () => {
    const matchingItems = [...speakerItems].filter(
      item =>
        item.classList.contains(activeClass) || activeClass === 'speaker-item'
    );

    const nextItems = currentItems + 3;

    for (let i = currentItems; i < nextItems && i < matchingItems.length; i++) {
      matchingItems[i].style.display = 'inline-block';
    }

    currentItems += 3;
    window.scrollBy({ top: 350 });
    handleLoadMoreVisibility();

    AOS.refresh();
  });
}

getItems(activeClass);
