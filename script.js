const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  const childrenArr = [...menuButton.children];
  childrenArr.forEach(child => {
    child.classList.toggle('hidden');
  });

  const menuModal = document.querySelector('.menu-modal');
  menuModal.classList.toggle('hidden');
});


// Bookmark
const bookmarkContainer = document.querySelector('.bookmark-container');
bookmarkContainer.addEventListener('click', e => {
  const bookmarkButton = document.querySelector('.bookmark-button');
  const bookmarkIcon = document.querySelector('.bookmark-icon');

  bookmarkButton.classList.toggle('active');
  bookmarkIcon.classList.toggle('active');

  console.log(bookmarkButton.classList);

  if ([...bookmarkButton.classList].includes('active')) {
    bookmarkButton.innerHTML = 'Bookmarked';
  } else {
    bookmarkButton.innerHTML = 'Bookmark';
  }
});


// Reward modal
const rewardModal = document.querySelector('.selection-modal');
const bambooButton = document.querySelector('.bamboo-button');
const blackButton = document.querySelector('.black-button');
const closeModal = document.querySelector('.pledge-modal-close-btn');

bambooButton.addEventListener('click', () => {
  rewardModal.classList.remove('hidden');
});

blackButton.addEventListener('click', () => {
  rewardModal.classList.remove('hidden');
});

closeModal.addEventListener('click', e => {
  e.preventDefault();
  rewardModal.classList.add('hidden');
});
