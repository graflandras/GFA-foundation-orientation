'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', `/api${window.location.pathname}`);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  const res = JSON.parse(xhr.responseText);
  console.log(res);
  const h1 = document.querySelector('h1');
  h1.innerText = `Details about your '${res[0].alias}' alias:`; // a visszakapott object miatt kell [0], console.log segít
  tableHead(res);
  tableRow(res);

}
xhr.send();

//táblázat DOM-hoz elemek létrehozása
const tableHead = (res) => {    // ez a res az, amit válaszként visszakaptunk
  const table = document.querySelector('table');
  const tr = document.createElement('tr');
  const thID = document.createElement('th');
  const thAlias = document.createElement('th');
  const thURL = document.createElement('th');
  const thHitCount = document.createElement('th');
  const thSecretCode = document.createElement('th');

  thID.textContent = 'ID';
  thAlias.textContent = 'Alias';
  thURL.textContent = 'URL';
  thHitCount.textContent = 'Hit count';
  thSecretCode.textContent = 'Secret code';

  //fejléc
  tr.appendChild(thID);
  tr.appendChild(thAlias);
  tr.appendChild(thURL);
  tr.appendChild(thHitCount);
  tr.appendChild(thSecretCode);

  table.appendChild(tr);
}

//2. sor
const tableRow = (res) => { // ez a res az, amit válaszként visszakaptunk
  const table = document.querySelector('table');
  const tr2 = document.createElement('tr');
  const tdID = document.createElement('td');
  const tdAlias = document.createElement('td');
  const tdURL = document.createElement('td');
  const tdHitCount = document.createElement('td');
  const tdSecretCode = document.createElement('td');

  tdID.textContent = `${res[0].id}`;
  tdAlias.textContent = `${res[0].alias}`;
  tdURL.textContent = `${res[0].url}`;
  tdHitCount.textContent = `${res[0].hitCount}`;
  tdSecretCode.textContent = `${res[0].secretCode}`;

  tr2.appendChild(tdID);
  tr2.appendChild(tdAlias);
  tr2.appendChild(tdURL);
  tr2.appendChild(tdHitCount);
  tr2.appendChild(tdSecretCode);

  table.appendChild(tr2);
}

//select érték elkapása
const selectForm = document.querySelector('select');
const dinamicDiv = document.querySelector('div.dinamic'); //shortener form elkapása
selectForm.addEventListener('change', (event) => {
  dinamicDiv.innerHTML = ''; //hogy ne legyen ismétlődés
  if (selectForm.value == 'modifyAlias') {
    modifyAliasPut();
  }
});

let modifyAliasPut = () => {
  //dinamicdiv globális változó
  // DOM manipulálás
  const form = document.createElement('form');
  const label = document.createElement('label');
  const inputfield = document.createElement('input');
  const button = document.createElement('button');
  const h1 = document.createElement('h1');

  label.setAttribute('for', 'modalias');
  inputfield.setAttribute('id', 'modalias');
  inputfield.setAttribute('type', 'text');
  inputfield.setAttribute('name', 'modalias');
  inputfield.required = true;
  button.setAttribute('id', 'submit');
  button.innerText = 'Submit';
  dinamicDiv.appendChild(form);
  form.appendChild(inputfield);
  form.appendChild(button);


//form eventlistener
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { modalias } = form.elements; // { név } ugyanaz legyen mint amit a setattribute-nál megadtunk
  console.log(`button pressed, input value = ${modalias.value}`);
});
}








