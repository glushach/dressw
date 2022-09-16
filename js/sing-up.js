const singUp = document.querySelector('.sing-up-block');
const banner = document.querySelector('#phone-banner');
const createProfile = document.querySelector('.create-profile');

const nextPage = document.querySelector('.sing-up-next');
const nextBTN = document.querySelector('#next');
const createProfileModify = document.querySelector('#create-profile');

banner.addEventListener('click', () => {
  singUp.classList.add('sing-up-block_hide');
  createProfile.classList.remove('create-profile_hide');
});

nextBTN.addEventListener('click', () => {
  nextPage.classList.add('create-profile_hide');
  createProfileModify.classList.remove('create-profile-modify_hide');
});
