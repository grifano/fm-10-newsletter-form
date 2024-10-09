const input = document.querySelector('input');
const modalMsg = document.querySelector('.modal-msg');

input.addEventListener('click', e => {
  e.currentTarget.classList.toggle('isInvalid');
});
