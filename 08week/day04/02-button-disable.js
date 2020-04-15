'use strict';
const form = document.forms.myform;
const animal = form.animals;
const signup = form.signup;
const signUpButton = document.querySelector('button.signUpButton');
const loveCatsButton = document.querySelector('button.loveCatsButton');
const buttons = document.querySelectorAll('button');

form.addEventListener('change', () => {
  if (animal.value === 'dog' || animal.value === 'cat' || (animal.value === 'viktor' && signup.value === 'no')) {
    signUpButton.removeAttribute('disabled');
  } else {
    signUpButton.disabled = 'true';
  }

  if (signup.value === 'yes') {
    loveCatsButton.removeAttribute('disabled');
  } else {
    loveCatsButton.disabled = 'true';
  }
});

buttons.forEach(e => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(signup.value)
    console.log(animal.value)
    if (signup.value === 'no' && animal.value === 'viktor') {
      alert('Sigh, we still added you to the cat facts');
    } else {
      alert('thank you, you successfully signed up for cat facts');
    }
  });
});
