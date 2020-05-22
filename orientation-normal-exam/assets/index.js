'use strict';

const form = document.querySelector('form');
const { name, address } = form.elements;
const p = document.createElement('p');
const div = document.querySelector('.result');
const selectForm = document.querySelector('select');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let value = document.querySelector('input[name="base"]:checked').value;
  const postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/api/orders');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    name: name.value,
    address: address.value,
    base: value,
    topping: selectForm.value
  }));
  postXhr.onload = () => {
    if (postXhr.status === 400) {
      div.appendChild(p);
      p.innerText = {};
      p.style.color = 'red';
      p.textContent = `Something's wrong, please try again later.`;
    }
    if (postXhr.status === 200) {
      const reply = JSON.parse(postXhr.responseText);
      div.appendChild(p);
      p.innerText = {};
      p.style.color = 'black';
      p.textContent = `Thank you, your orderID: ${reply.id}.`;
      form.reset();
    }
  }
});
