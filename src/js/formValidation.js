const newsletterSection = document.querySelector('.section-newsletter');
const newsletterForm = document.querySelector('#newsletter-form');
const input = document.querySelector('input');
const modalMsg = document.querySelector('.modal-msg');
const modalButton = document.querySelector('.modal-msg button');
const errorMsg = document.querySelector('.newsletter-error-msg');

newsletterForm.addEventListener('submit', handleSubmit);
input.addEventListener('change', handleChange);

// Clear all states
clearStates();

// Dismiss modal msg
modalButton.addEventListener('click', e => {
  modalMsg.classList.remove('isActive');
  newsletterSection.classList.remove('visually-hidden');
  clearStates();
});

// Get form validtion on submit
function handleSubmit(e) {
  e.preventDefault();

  const isValid = getValidateEmail(input.value);
  getValidation(isValid);
}
function handleChange(e) {
  const isValid = getValidateEmail(e.target.value);
  if (isValid) {
    clearStates();
  } else {
    errorMsg.classList.add('isShow');
    input.classList.add('isInvalid');
  }
}
function getValidateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}
function getValidation(value) {
  if (value) {
    modalMsg.classList.add('isActive');
    newsletterSection.classList.add('visually-hidden');
    input.value = '';
  } else {
    errorMsg.classList.add('isShow');
    input.classList.add('isInvalid');
  }
}
function clearStates() {
  // Clear previous states
  errorMsg.classList.remove('isShow');
  input.classList.remove('isInvalid');
  modalMsg.classList.remove('isActive');
}
