'use strict';
const shortenerform = document.querySelector('.shortenerform'); //shortener form elkapása
const { url, alias } = shortenerform.elements; //shortenerform adatainak elmentése
const aboutshortenedform = document.querySelector('.aboutshortenedform'); //aboutshortenedform elkapása
const { aboutAlias, yourSecretCode } = aboutshortenedform.elements; //aboutshortenedform adatainak elmentése, a változóneveknek meg kell egyeznie a HTML formban megadottakkal, így érkezik meg backendre, tehát ott is ugyanezen neveket kell használni!!!

const p = document.createElement('p');
const div = document.querySelector('.shortenerdiv');

// eventlistener a formra, adatok elküldése, eredmény kiírása, appendchild
shortenerform.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/api/links');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    url: url.value,
    alias: alias.value
  }));
  postXhr.onload = () => {
    if (postXhr.status === 400) {
      div.appendChild(p);
      p.innerText = {};
      p.style.color = 'red';
      p.textContent = `Your alias is already in use!`;
    }
    if (postXhr.status === 200) {
      const reply = JSON.parse(postXhr.responseText);
      // console.log(record);
      div.appendChild(p);
      p.innerText = {};
      p.style.color = 'black';
      p.textContent = `Your URL is aliased to ${reply.alias} and your secret code is ${reply.secretCode}.`;
      shortenerform.reset();
    }
  }
});

// eventlistener a második formra, adatok elküldése, átirányítás
aboutshortenedform.addEventListener('submit', (event) => {
  event.preventDefault();
  const postXhr = new XMLHttpRequest();
  postXhr.open('POST', `/api/about/?aboutAlias=${aboutAlias.value}&yourSecretCode=${yourSecretCode.value}`);//ENDPOINT CÍMÉRE FIGYELNI!!!
  console.log(aboutAlias.value);
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send();
  postXhr.onload = () => {
    if (postXhr.status === 404) {
      div.appendChild(p);
      p.innerText = {};
      p.style.color = 'red';
      p.textContent = `No such alias-secret code pair`;
    }
    if (postXhr.status === 200) {
      const reply = JSON.parse(postXhr.responseText);
      window.location = reply.pathTo;
    }
  }
});

