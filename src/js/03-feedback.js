const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('.feedback-form input');
const messageInputRef = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

let formData = {};
getStorageData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getStorageData() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (formData) {
    emailInputRef.value = formData.email || '';
    messageInputRef.value = formData.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = emailInputRef.value;
  const message = messageInputRef.value;
  console.log({ email, message });
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
