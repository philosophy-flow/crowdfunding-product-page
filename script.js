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





// Open/close selection modal
const selectionModal = document.querySelector('.selection-modal');
const closeModal = document.getElementById('close-selection-modal');

// Reward selection buttons (buttons to open modal)
const noRewardSelect = document.getElementById('no-reward-select');
const bambooRewardSelect = document.getElementById('bamboo-reward-select');
const blackRewardSelect = document.getElementById('black-reward-select');
const rewardSelectArr =
  [noRewardSelect, bambooRewardSelect, blackRewardSelect];

// Radio buttons corresponding to each reward type
const noRewardRadio = document.getElementById('no-reward-selected');
const bambooRewardRadio = document.getElementById('bamboo-selected');
const blackRewardRadio = document.getElementById('black-selected');
const radioArr = [noRewardRadio, bambooRewardRadio, blackRewardRadio];

// Boxes corresponding to each reward type
const noRewardBox = document.getElementById('no-reward-box');
const bambooRewardBox = document.getElementById('bamboo-reward-box');
const blackRewardBox = document.getElementById('black-reward-box');
const rewardBoxArr = [noRewardBox, bambooRewardBox, blackRewardBox];


// Event listener for reward selection buttons
rewardSelectArr.forEach(selection => {
  selection.addEventListener('click', () => {
    selectionModal.classList.remove('hidden');

    if (selection.id === 'no-reward-select') {
      noRewardRadio.checked = true;
      noRewardBox.classList.add('active');
    }

    if (selection.id === 'bamboo-reward-select') {
      bambooRewardRadio.checked = true;
      bambooRewardBox.classList.add('active');
    }

    if (selection.id === 'black-reward-select') {
      blackRewardRadio.checked = true;
      blackRewardBox.classList.add('active');
    }

  });
});


// Event listener for each radio button
radioArr.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    rewardBoxArr.forEach(box => {
      if (box.classList.contains('active')) {
        box.classList.remove('active');
      }
    });
    const newActiveBox = rewardBoxArr[index];
    newActiveBox.classList.add('active');
  });
});


// Event listener for button that closes selection modal
closeModal.addEventListener('click', e => {
  selectionModal.classList.add('hidden');

  rewardBoxArr.forEach(box => {
    if (box.classList.contains('active')) {
      box.classList.remove('active');
    }
  });
});












// // Donation Logic
// const donateNoReward = document.getElementById('no-reward-trigger');
// const donateBambooReward = document.getElementById('bamboo-reward-trigger');
// const donateBlackReward = document.getElementById('black-reward-trigger');
//
// let amountRaised = parseInt(document.getElementById('amount-raised').innerHTML.replace(',', ''));
//
// let totalBackers = parseInt(document.getElementById('total-backers').innerHTML.replace(',', ''));
//
//
//
// donateNoReward.addEventListener('click', (e) => {
//   e.preventDefault();
//
//   const donationAmount = parseInt(document.getElementById('no-reward-amount').value);
//   document.getElementById('no-reward-amount').value = null;
//
//   // Handle amount amount raised
//   amountRaised += donationAmount;
//   document.getElementById('amount-raised').innerHTML = amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//
//   // Handle total backers
//   totalBackers += 1;
//   document.getElementById('total-backers').innerHTML = totalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// });
//
// donateBambooReward.addEventListener('click', (e) => {
//   e.preventDefault();
//
//   const donationAmount = parseInt(document.getElementById('bamboo-reward-amount').value);
//   document.getElementById('bamboo-reward-amount').value = null;
//
//   // Handle amount amount raised
//   amountRaised += donationAmount;
//   document.getElementById('amount-raised').innerHTML = amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//
//   // Handle total backers
//   totalBackers += 1;
//   document.getElementById('total-backers').innerHTML = totalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// });
//
// donateBlackReward.addEventListener('click', (e) => {
//   e.preventDefault();
//   const donationAmount = parseInt(document.getElementById('black-reward-amount').value);
//   document.getElementById('black-reward-amount').value = null;
//
//   // Handle amount amount raised
//   amountRaised += donationAmount;
//   document.getElementById('amount-raised').innerHTML = amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//
//   // Handle total backers
//   totalBackers += 1;
//   document.getElementById('total-backers').innerHTML = totalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// });
