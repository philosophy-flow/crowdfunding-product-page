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

const noRewardButton = document.querySelector('.no-reward-button');
const bambooButton = document.querySelector('.bamboo-button');
const blackButton = document.querySelector('.black-button');
const closeModal = document.querySelector('.pledge-modal-close-btn');

const noRewardInput = document.getElementById('no-reward-selected');
const bambooInput = document.getElementById('bamboo-selected');
const blackInput = document.getElementById('black-selected');

const noRewardBox = document.querySelector('.no-reward');
const bambooRewardBox = document.querySelector('.bamboo-reward');
const blackRewardBox = document.querySelector('.black-reward');


const rewardInputArr = [bambooInput, blackInput, noRewardInput];
const rewardBoxArr = [noRewardBox, bambooRewardBox, blackRewardBox];

noRewardButton.addEventListener('click', () => {
  rewardModal.classList.remove('hidden');
  noRewardInput.checked = true;
  noRewardBox.classList.add('active');
});


bambooButton.addEventListener('click', () => {
  rewardModal.classList.remove('hidden');
  bambooInput.checked = true;
  bambooRewardBox.classList.add('active');
});

blackButton.addEventListener('click', () => {
  rewardModal.classList.remove('hidden');
  blackInput.checked = true;
  blackRewardBox.classList.add('active');
});

closeModal.addEventListener('click', e => {
  e.preventDefault();
  rewardModal.classList.add('hidden');
  rewardBoxArr.forEach(box => {
    if (box.classList.contains('active')) {
      box.classList.remove('active');
    }
  });
});

rewardInputArr.forEach(input => {
  input.addEventListener('change', () => {
    rewardBoxArr.forEach(box => {
      if (box.classList.contains('active')) {
        box.classList.remove('active');
      }
    });
    const newActiveBox = input.parentElement.parentElement.parentElement;
    newActiveBox.classList.add('active');
  });
});

// Donation Logic
const donateNoReward = document.getElementById('no-reward-trigger');
const donateBambooReward = document.getElementById('bamboo-reward-trigger');
const donateBlackReward = document.getElementById('black-reward-trigger');

let amountRaised = parseInt(document.getElementById('amount-raised').innerHTML.replace(',', ''));
const totalBackers = document.getElementById('total-backers');



donateNoReward.addEventListener('click', (e) => {
  e.preventDefault();

  const donationAmount = parseInt(document.getElementById('no-reward-amount').value);
  document.getElementById('no-reward-amount').value = null;

  // Handle amount amount raised
  amountRaised += donationAmount;
  document.getElementById('amount-raised').innerHTML = amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Handle total backers
});

donateBambooReward.addEventListener('click', (e) => {
  e.preventDefault();

  const donationAmount = parseInt(document.getElementById('bamboo-reward-amount').value);
  document.getElementById('bamboo-reward-amount').value = null;

  // Handle amount amount raised
  amountRaised += donationAmount;
  document.getElementById('amount-raised').innerHTML = amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

donateBlackReward.addEventListener('click', (e) => {
  e.preventDefault();
  const donationAmount = parseInt(document.getElementById('black-reward-amount').value);
  document.getElementById('black-reward-amount').value = null;

  // Handle amount amount raised
  amountRaised += donationAmount;
  document.getElementById('amount-raised').innerHTML = amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
