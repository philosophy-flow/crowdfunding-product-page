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










// Open/close selection modal logic

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


// Close selection modal
function closeSelectionModal() {
  selectionModal.classList.add('hidden');
  rewardBoxArr.forEach(box => {
    if (box.classList.contains('active')) {
      box.classList.remove('active');
    }
  });
}


// Event listeners for reward selection buttons
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

// Event listeners for each radio button
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

// Event listener for close button
closeModal.addEventListener('click', e => {
  closeSelectionModal();
});




//////////////////////////




// Donation Logic

// Reward forms
const noRewardForm = document.getElementById('no-reward-form');
const bambooRewardForm = document.getElementById('bamboo-reward-form');
const blackRewardForm = document.getElementById('black-reward-form');
const rewardFormArr = [noRewardForm, bambooRewardForm, blackRewardForm];

// Reward inputs
const noRewardInput = document.getElementById('no-reward-amount');
const bambooRewardInput = document.getElementById('bamboo-reward-amount');
const blackRewardInput = document.getElementById('black-reward-amount');


// Increment total amount raised by donation amount
function handleAmountRaised(donationAmount) {
  const donationVal = parseInt(donationAmount);

  const amountRaised = document.getElementById('amount-raised');
  let amountRaisedVal = parseInt(amountRaised.innerHTML.replace(',', ''));

  amountRaisedVal += donationVal;
  amountRaised.innerHTML =
    amountRaisedVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Increment total backers by 1
function handleTotalBackers() {
  const totalBackers = document.getElementById('total-backers');

  let totalBackersVal = parseInt(totalBackers.innerHTML.replace(',', ''));
  totalBackersVal += 1;

  totalBackers.innerHTML =
    totalBackersVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// Event listener for form submit
rewardFormArr.forEach(reward => {
  reward.addEventListener('submit', e => {
    e.preventDefault();
    closeSelectionModal();
    alert('Thanks for the donation!');

    if (reward.id === 'no-reward-form') {
      handleAmountRaised(noRewardInput.value);
      handleTotalBackers();
      noRewardInput.value = null;
    }

    if (reward.id === 'bamboo-reward-form') {
      handleAmountRaised(bambooRewardInput.value);
      handleTotalBackers();
      bambooRewardInput.value = null;
    }

    if (reward.id === 'black-reward-form') {
      handleAmountRaised(blackRewardInput.value);
      handleTotalBackers();
      blackRewardInput.value = null;
    }
  });
});
