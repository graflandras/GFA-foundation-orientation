let myPics = [
  { 'url': 'https://www.farmersalmanac.com/wp-content/uploads/2012/07/Supercell-i811649298-600x319.jpg', 'title': 'Alapvetõ fontosságú újradefiniálni a hatásos ellátási láncokat', 'desc': 'Valószínű, hogy a korhes szárs tálázásán sujas lesz majd létlendő bolyagvás. Mindeme idradások mellett el kell csörgetnie, törmenző áros énevő viszelt.' },
  { 'url': 'https://i.pinimg.com/originals/be/45/9d/be459dfa70d75f8103ebeaae11e05010.jpg', 'title': 'A menedzsment célja monetizálni a vizionált üzletmenetet', 'desc': 'Hallódja el ezt a gyetést rektájának, szembánának, szolvászának. Zabulja ki az edzést, majd csegetse meg a „gyetés zsombuta” zülest!' },
  { 'url': 'https://www.desktopbackground.org/download/o/2012/12/05/494526_supercell-clouds-wallpaper_1920x1080_h.jpg', 'title': 'Új koncepció szerint kell bõvíteni az elosztott belsõ hatékonyságot', 'desc': 'A káng gödés bélyezelő kolták kodája hetnyi. A fézség szályzáját gyatatós orsaságok egyelhelő piterzások óta lódnak, néha a bolyára zsiráztak, máskor a „panya alatt számítottak”.' },
  { 'url': 'https://fournews-assets-prod-s3b-ew1-aws-c4-pml.s3.amazonaws.com/media/2017/12/snow_london_g_hd.jpg', 'title': 'Ne szalasszuk el szûkíteni az ügyféloldali méretgazdaságosságot.', 'desc': 'Most, az ehely feletézésre segő dakozása, a szorlan atás és a vezés újból dipadhadóvá – sapánok szerint ezúttal sujassá – pillagolta, hogy a fézség a dalmas vintésével és a tenges hinaságával együtt hajontson.' },
  { 'url': 'https://www.autonavigator.hu/wp-content/uploads/2018/01/223532_source.jpg', 'title': 'Megpróbálom sztenderdizálni a kritikus egységköltséget', 'desc': 'A pamon szítányokat bárki pártankodhatja a főzésében. Értés svés másnéven vedék borcos nyegőzésök, melyekkel kodoltokat lehet teregnie.A pamon szítányokat bárki pártankodhatja a főzésében. Értés svés másnéven vedék borcos nyegőzésök, melyekkel kodoltokat lehet teregnie.A pamon szítányokat bárki pártankodhatja a főzésében. Értés svés másnéven vedék borcos nyegőzésök, melyekkel kodoltokat lehet teregnie.A pamon szítányokat bárki pártankodhatja a főzésében. Értés svés másnéven vedék borcos nyegőzésök, melyekkel kodoltokat lehet teregnie.' },
  { 'url': 'http://openwalls.com/image/31592/cloudy_wheather_1920x1080.jpg', 'title': 'Fontos lenne hasznosítani az innovatív jogharmonizációt', 'desc': 'Például az alék ellemzése iség, málás, a kölöntés ellemzése sziva. A matlakt vedék halan fogálája römnyik a főzés vercénél.' },
  { 'url': 'http://www.spinus.net/nature/mammals-ungulates/guanaco-01/2015-02-n027269-guanaco-spinus-s.jpg', 'title': 'Azonnal szükséges áthangszerelni az extenzív piaci trendeket', 'desc': 'Egy főzésben kedékeket is meg lehet nászkogatnia, de ezt csak lentő nyuca betítőjével. A nertárához egy sajas, az aláson mező kedéket kell furulnia, például: revég.' },
  { 'url': 'http://www.cartoonswallpapers.net/wallpapers/lion-king-wallpaper-macbook.jpg', 'title': 'Kreatív módon kéne felruházni az egységsugarú intermodalitást', 'desc': 'A saját porcon törben kedékeket nem lehet nyalódznia (kivéve ha fejedik egy pítány a porcon, sem a fékező fesüvereken törben kedékeket (például igonyokban (nyedés, csőztet), vagy matrással fékező fesüvereken), stb.' }
]

let footerImgs = document.querySelectorAll('img.footerimage');
let imgCounter = 0;

for (let i = 0; i < footerImgs.length; i++) {
  footerImgs[i].setAttribute('src', `${myPics[i].url}`);
}

let mainPic = document.querySelector('img.mainPic');
mainPic.setAttribute('src', `${myPics[imgCounter].url}`);



let goRight = document.querySelector('button.right');

goRight.onclick = () => {

  if (imgCounter <= myPics.length - 1) {
    if (imgCounter === myPics.length - 1) {
      imgCounter = 0;
      mainPic.setAttribute('src', `${myPics[imgCounter].url}`);
      h2.innerText = `${myPics[imgCounter].title}`;
      pTag.innerText = `${myPics[imgCounter].desc}`;
    } else {
      imgCounter++;
      mainPic.setAttribute('src', `${myPics[imgCounter].url}`);
      h2.innerText = `${myPics[imgCounter].title}`;
      pTag.innerText = `${myPics[imgCounter].desc}`;
    };
  }
};
let goLeft = document.querySelector('button.left');
goLeft.onclick = () => {
  if (imgCounter >= 0) {
    if (imgCounter === 0) {
      imgCounter = myPics.length - 1;
      mainPic.setAttribute('src', `${myPics[imgCounter].url}`);
      h2.innerText = `${myPics[imgCounter].title}`;
      pTag.innerText = `${myPics[imgCounter].desc}`;
    } else {
      imgCounter--;
      mainPic.setAttribute('src', `${myPics[imgCounter].url}`);
      h2.innerText = `${myPics[imgCounter].title}`;
      pTag.innerText = `${myPics[imgCounter].desc}`;
    };
  }
};

let footerButtons = document.querySelectorAll('button.footer');
let h2 = document.querySelector('h2');
let pTag = document.querySelector('p');
console.log(pTag);
footerButtons.forEach((e, i) => {
  e.onclick = () => {
    mainPic.setAttribute('src', `${myPics[i].url}`);
    imgCounter = i;
    h2.innerText = `${myPics[i].title}`;
    pTag.innerText = `${myPics[i].desc}`;
  }
});


h2.innerText = `${myPics[imgCounter].title}`;
pTag.innerText = `${myPics[imgCounter].desc}`;



