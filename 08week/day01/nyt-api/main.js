'use strict';

/*Search interesting articles on: http://developer.nytimes.com/

Use localhost as the website when you request your API key.

Use the Article Search API
Find articles about the moon landing by Apollo 11
Display the following fields in a list
Headline
Snippet
Publication date
Create a permalink to that*/


let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=17a8d525cf154580bd90af171d20324b&q=moon_landing_apollo_11', false); 
httpRequest.send();
let getBackObject = JSON.parse(httpRequest.response);

// console.log(getBackObject); //kiírja a teljes visszakapott objectet
// console.log(getBackObject.response.docs[1].web_url); //kiírja az object response array-ének 2. elemének url-jét

let articleObject = []; //object létrehozása a headline, snippet, pubdate adatoknak
for (let i = 0; i < getBackObject.response.docs.length; i++) {  //adatok bepakolása az objectbe
  articleObject[i] = {'headLine': `${getBackObject.response.docs[i].headline.main}`, 
                      'snippet': `${getBackObject.response.docs[i].snippet}`,
                      'pubDate': `${getBackObject.response.docs[i].pub_date}`, 
                      'url': `${getBackObject.response.docs[i].web_url}`
                     };
}
console.log(articleObject);

let headList = document.querySelector('ul.Head');
let snippetList = document.querySelector('ul.Snippet');
let pubDateList = document.querySelector('ul.PubDate');
let linkList = document.querySelector('ul.Link');

for (let i = 0; i < articleObject.length; i++) { 
    let newHead = document.createElement('li'); //csinálunk egy új <li> tagot
    headList.appendChild(newHead); //hozzáadjuk a div-hez
    newHead.innerHTML = articleObject[i].headLine;

    let newSnippet = document.createElement('li');
    snippetList.appendChild(newSnippet);
    newSnippet.innerHTML = articleObject[i].snippet;

    let newpubDate = document.createElement('li');
    pubDateList.appendChild(newpubDate);
    newpubDate.innerHTML = articleObject[i].pubDate;

    let newLink = document.createElement('li');
    linkList.appendChild(newLink);
    newLink.innerHTML = `<a href='${articleObject[i].url}'>Link`;
}

