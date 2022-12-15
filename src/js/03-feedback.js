const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('.feedback-form input');
const messageInputRef = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {};

getStorageData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getStorageData() {
  const savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMassage) {
    emailInputRef.value = savedMassage.email || '';
    messageInputRef.value = savedMassage.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
