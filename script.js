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




// ------------------------------------------------------------------------




// Open & close selection modal logic

const selectionModal = document.querySelector('.selection-modal');
const closeModalButton = document.getElementById('close-selection-modal');

// Close selection modal function
function closeSelectionModal() {
  selectionModal.classList.add('hidden');
  rewardBoxArr.forEach(box => {
    if (box.classList.contains('active')) {
      box.classList.remove('active');
    }
  });
}

// Event listener for bamboo or black reward selection
const selectionBox = document.getElementById('selection-box');
selectionBox.addEventListener('click', e => {
  if (e.target.id === 'bamboo-reward-select') {
    selectionModal.classList.remove('hidden');
    bambooRewardRadio.checked = true;
    bambooRewardBox.classList.add('active');
  }

  if (e.target.id === 'black-reward-select') {
    selectionModal.classList.remove('hidden');
    blackRewardRadio.checked = true;
    blackRewardBox.classList.add('active');
  }
});

// Event listener for no reward selection
document.getElementById('no-reward-select').addEventListener('click', () => {
  selectionModal.classList.remove('hidden');
  noRewardRadio.checked = true;
  noRewardBox.classList.add('active');
});

// Event listener for close button
closeModalButton.addEventListener('click', e => {
  closeSelectionModal();
});




// ------------------------------------------------------------------------




// Change active selection logic

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

// Event listeners for each radio button (changes active selection)
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




////////////////////////////////




// Donation Logic

// Reward forms
const noRewardForm = document.getElementById('no-reward-form');
const bambooRewardForm = document.getElementById('bamboo-reward-form');
const blackRewardForm = document.getElementById('black-reward-form');
const rewardFormArr = [noRewardForm, bambooRewardForm, blackRewardForm];

// Increment total backers by 1
function handleTotalBackers() {
  const totalBackers = document.getElementById('total-backers');

  let totalBackersVal = parseInt(totalBackers.innerHTML.replace(',', ''));
  totalBackersVal += 1;

  totalBackers.innerHTML =
    totalBackersVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Increment progress bar by amount donated
function handleProgressBar(amountRaised) {
  const donationBarProgress = document.getElementById('donation-progress');
  const newPercentage = String((amountRaised / 100000) * 100);
  console.log(newPercentage);
  donationBarProgress.style.width = `${newPercentage}%`;
}

// Increment total amount raised by donation amount + update progress bar
function handleAmountRaised(donationAmount) {
  const amountRaised = document.getElementById('amount-raised');
  let amountRaisedVal = parseInt(amountRaised.innerHTML.replace(',', ''));

  amountRaisedVal += donationAmount;
  amountRaised.innerHTML =
    amountRaisedVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  handleProgressBar(amountRaisedVal);
}


// Event listeners for form submit
rewardFormArr.forEach(reward => {
  reward.addEventListener('submit', e => {
    e.preventDefault();
    closeSelectionModal();
    alert('Thanks for the donation!');

    const rewardInput = e.target.children[1].children[1];
    const donationVal = parseInt(rewardInput.value);

    handleTotalBackers();
    handleAmountRaised(donationVal);

    rewardInput.value = null;
  });
});




// ------------------------------------------------------------------------

// const bambooRemaining = document.getElementById('bamboo-remaining');
// const bambooRemainingModal = document.getElementById('bamboo-remaining-modal');
//
// console.log(bambooRemaining.innerHTML);
// console.log(bambooRemainingModal);
