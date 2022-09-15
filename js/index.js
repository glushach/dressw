const signPage = document.querySelector('#sign-to-continue');
const goForgot = document.querySelector('#go-forgot');
const forgotPage = document.querySelector('#forgot-password');
const resetPass = document.querySelector('#reset-password');
const thanksPage = document.querySelector('#thanks-block');
const resetPage = document.querySelector('#reset-pass-block');


goForgot.addEventListener('click', (e) => {
  e.preventDefault();
  signPage.classList.add('form-block_hide');
  forgotPage.classList.remove('forgot-form_hide');
});

resetPass.addEventListener('click', (e) => {
  e.preventDefault();
  forgotPage.classList.add('forgot-form_hide');
  thanksPage.classList.remove('thanks-block_hide');

  setTimeout(() => {
    thanksPage.classList.add('thanks-block_hide');
    resetPage.classList.remove('reset-pass-block_hide');
  }, 3000);
});
