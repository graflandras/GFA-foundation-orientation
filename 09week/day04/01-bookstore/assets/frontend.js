'use strict';

const tableDiv = document.querySelector('.booklist');

const authorTable = (data) => {
  const tr = document.createElement('tr');
  const thBookName = document.createElement('th');
  const thAuthor = document.createElement('th');
  const thCategory = document.createElement('th');
  const thPublisher = document.createElement('th');
  const thPrice = document.createElement('th');

  thBookName.textContent = 'Book name';
  thAuthor.textContent = 'Author';
  thCategory.textContent = 'Category';
  thPublisher.textContent = 'Publisher';
  thPrice.textContent = 'Price';

  tr.appendChild(thBookName);
  tr.appendChild(thAuthor);
  tr.appendChild(thCategory);
  tr.appendChild(thPublisher);
  tr.appendChild(thPrice);
  tableDiv.appendChild(tr);

  data.forEach(e => {
  const tr = document.createElement('tr');

  const tdBookName = document.createElement('td');
  tdBookName.textContent = e.book_name;
  tr.appendChild(tdBookName);


  const tdAuthor = document.createElement('td');
  tdAuthor.textContent = e.aut_name;
  tr.appendChild(tdAuthor);


  const tdCategory = document.createElement('td');
  tdCategory.textContent = e.cate_descrip;
  tr.appendChild(tdCategory);

  const tdPublisher = document.createElement('td');
  tdPublisher.textContent = e.pub_name;
  tr.appendChild(tdPublisher);


  const tdPrice = document.createElement('td');
  tdPrice.textContent = e.book_price;
  tr.appendChild(tdPrice);

  tableDiv.appendChild(tr);
});

}

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://localhost:3000/books/'); 
httpRequest.onload = () => {
  let getBackObject = JSON.parse(httpRequest.response);
  console.log(getBackObject);
  authorTable(getBackObject);
}
httpRequest.send();


const category = () => {
let httpRequest2 = new XMLHttpRequest();
httpRequest2.open('GET', 'http://localhost:3000/books?category=Science'); 
httpRequest2.onload = () => {
  let getBackObject = JSON.parse(httpRequest2.response);
  console.log(getBackObject);
  authorTable(getBackObject);
}
httpRequest2.send();
}

