const input = document.querySelector('input');
input.addEventListener('click', e => {
  e.currentTarget.classList.toggle('isInvalid');
});
