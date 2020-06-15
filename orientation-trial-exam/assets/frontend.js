const form = document.querySelector('form');
const { url, alias } = form.elements;
const p = document.createElement('p');
const div = document.querySelector('div');

form.addEventListener('submit', (event) => {
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
      form.reset();
    }
  }
});
