let hidden = true;

const inputPassword = document.querySelector('#password');

const hidePassword = document.querySelector('#showpassword');

hidePassword.addEventListener('click', () => {
  console.log(hidden);
  if (hidden) {
    inputPassword.setAttribute('type', 'text');
    hidden = false;
  } else {
    inputPassword.setAttribute('type', 'password');
    hidden = true;
  }
});