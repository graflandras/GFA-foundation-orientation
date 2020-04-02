'use strict';

// Display gifs of a cute/funny topic using: https://developers.giphy.com/docs/
// Obtain an API key
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF


let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cats&api_key=jb0N653HE01WBztUVF9CDOJMUpod5Vck&limit=16', false); 
httpRequest.send();
let getBackObject = JSON.parse(httpRequest.response);

console.log(getBackObject); //kiírja a teljes visszakapott objectet
console.log(getBackObject.data[1].url); //kiírja az object data array-ének 2. elemének url-jét

let gifsArray = []; //üres Array létrehozása a gifeknek
let stillArray = []; //üres Array létrehozása az állóképeknek 

/*for (let i = 0; i < getBackObject.data.length; i++) { 
    gifsArray.push(getBackObject.data[i].images.original.url); // a gifsArray-be pebusholja az elemek urljét
    stillArray.push(getBackObject.data[i].images.original_still.url); // a gifsArray-be pebusholja az elemek urljét
}*/

getBackObject.data.forEach(e => {  //ez ugyan az mint a for ciklusban, csak foreach használattal
    gifsArray.push(e.images.original.url);
    stillArray.push(e.images.downsized_still.url)
});

let divs = document.querySelector('div.images'); //div/imageket elkapjuk, hogy tudjuk módosítani

for (let i = 0; i < stillArray.length; i++) { 
    let newPic = document.createElement('img'); //csinálunk egy új <img> tagot
    divs.appendChild(newPic); //hozzáadjuk a div-hez
    newPic.setAttribute('src', `${stillArray[i]}`); //src-nek beadjuk a tömb i-ik url-jét
    newPic.setAttribute('class', 'showedImages'); //classnevet megadunk
}

let imgTags = document.querySelectorAll('.showedImages'); //elkapjuk az összes megjelenített preview képet

imgTags.forEach((e, i) => { //onclicket adunk rájuk
    e.onclick = () => {
        e.setAttribute('src', `${gifsArray[i]}`); //onclick esetén src url csere
    }
});