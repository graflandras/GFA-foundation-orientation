



const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/author');
xhr.onload = () => {
  if(xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    csinalokvalamitazadattal(res);
  }
  }
xhr.send();

const csinalokvalamitazadattal = (res) => {
  const div = document.querySelector('.datas');
  res.autors.forEach((e,i) => {
    const ul = document.createElement('ul');
    const autli = document.createElement('li');
    const autNameli = document.createElement('li');
    const countryli = document.createElement('li');
    const homecityli = document.createElement('li');
    ul.textContent = `${i + 1}. author`;
    autli.textContent = e.aut_id;
    autNameli.textContent = e.aut_name;
    countryli.textContent = e.country;
    homecityli.textContent = e.home_city;
    ul.appendChild(autli);
    ul.appendChild(autNameli);
    ul.appendChild(countryli);
    ul.appendChild(homecityli);
    div.appendChild(ul);   
  });
}
const postRequest = (form) => {
  const xhr1 = new XMLHttpRequest();
  xhr1.open('POST', '/api/author');
  xhr1.onload = () => {
    console.log(JSON.parse(xhr1.responseText));
  };
  xhr1.setRequestHeader('Content-Type', 'application/json');
  const { aut_id, aut_name, country, home_city } = form.elements;
  xhr1.send(JSON.stringify({
    aut_id: aut_id.value,
    aut_name: aut_name.value,
    country: country.value,
    home_city: home_city.value,
  }));
}
const form = document.querySelector('.form');
form.onsubmit = (event) => {
  event.preventDefault();
  postRequest(form);
}