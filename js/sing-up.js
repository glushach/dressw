const singUp = document.querySelector('.sing-up-block');
const banner = document.querySelector('#phone-banner');
const createProfile = document.querySelector('.create-profile');

banner.addEventListener('click', () => {
  singUp.classList.add('sing-up-block_hide');
  createProfile.classList.remove('create-profile_hide');
});
