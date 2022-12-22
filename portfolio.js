/* Projects Dynamically */

const projects = {
  1: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  2: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  3: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  4: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  5: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  6: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
};
const countProj = Object.keys(projects).length;

function createStrProjects(num) {
  let string = '';
  for (let i = 1; i <= num; i += 1) {
    string += `<article class="project"><img class="proj-image" src="${projects[i].featuredImage[0]}" alt="ProjectImage"><h3 class="Proj-Text">${projects[i].name}</h3><ul><li class="tag">${projects[i].technologies[0]}</li><li class="tag">${projects[i].technologies[1]}</li><li class="tag">${projects[i].technologies[2]}</li></ul><button id= "Button${i}" class="btProjMob" ><span class="TextButtonProjects">See Project</span></button></article>`;
  }
  return string;
}

function createStrProjectMob(id) {
  let string = '';
  const str = id;
  const i = str.replace(/\D/g, '');
  if (window.innerWidth < 768) {
    string = `<div class="whiteBackground"><article class="ProjectPopUp"><button class="btMobWhite"><img src="img/X_white.svg" alt="ButtonClose"></button><img class="imagePopMob" src="${projects[i].featuredImage[0]}" alt="ProjectImage"><h3 class="Proj-Text">${projects[i].name}</h3><ul><li class="tag">${projects[i].technologies[0]}</li><li class="tag">${projects[i].technologies[1]}</li><li class="tag">${projects[i].technologies[2]}</li></ul><p class="popUpDescription">${projects[i].description}</p><div class="buttonMobPopup"><a href="#live"><img class="ButtonProj" src="img/See_live.svg" alt="ButtonEnable"></a><a href="#github"><img class="ButtonProj" src="img/See_source.svg" alt="ButtonEnable"></a></div></article></div>`;
  } else {
    string = `<div class="whiteBackground"><button class="btMobDesktop"><img src="img/proy_button_desktop.svg" alt="ButtonClose"></button><article class="ProjectPopUpDesk"><img class="proj-image" src="${projects[i].featuredImage[1]}" alt="ProjectImage"><div class="h3_ButtonsPopUpDesk"><h3 class="ProjTextPopUpDeskt">${projects[i].name}</h3><div class="buttonMobPopupDesk"><a href="#live"><img class="buttonPopUpDesktop" src="img/See_live.svg" alt="ButtonEnable"></a><a href="#github"><img class="buttonPopUpDesktop" src="img/See_source.svg" alt="ButtonEnable"></a></div></div><ul><li class="tagDesktop">${projects[i].technologies[0]}</li><li class="tagDesktop">${projects[i].technologies[1]}</li><li class="tagDesktop">${projects[i].technologies[2]}</li><li class="tagDesktop">${projects[i].technologies[3]}</li><li class="tagDesktop">${projects[i].technologies[4]}</li><li class="tagDesktop">${projects[i].technologies[5]}</li></ul><p class = "popUpDescription" >${projects[i].description}</p></article></div>`;
  }
  return string;
}

function ClosePopUp() {
  const PopUp = document.querySelector('.MobilePopUp');
  PopUp.style.display = 'none';
}

/*
function CreatePopUp() { // id=string
  const body = document.querySelector('.body');
  const PopUp = document.createElement('div');
  PopUp.classList.add('MobilePopUp');
  PopUp.innerHTML = createStrProjectMob('button1');
  body.prepend(PopUp);
  if (window.innerWidth < 768) {
    const btMobWhite = document.querySelector('.btMobWhite');
    btMobWhite.addEventListener('click', ClosePopUp);
  } else {
    const btMobDesktop = document.querySelector('.btMobDesktop');
    btMobDesktop.addEventListener('click', ClosePopUp);
  }
} */

document.addEventListener('DOMContentLoaded', () => {
  const string = createStrProjects(countProj);
  document.querySelector('#portf').innerHTML = string; // here projetcs loaded with ID buttons.

  /* PopUp Mobile & Desktop */

  const button1 = document.querySelector('#Button1');
  const button2 = document.querySelector('#Button2');
  const button3 = document.querySelector('#Button3');
  const button4 = document.querySelector('#Button4');
  const button5 = document.querySelector('#Button5');
  const button6 = document.querySelector('#Button6');

  button1.addEventListener('click', () => {
    const body = document.querySelector('.body');
    const PopUp = document.createElement('div');
    PopUp.classList.add('MobilePopUp');
    PopUp.innerHTML = createStrProjectMob('button1');
    body.prepend(PopUp);
    if (window.innerWidth < 768) {
      const btMobWhite = document.querySelector('.btMobWhite');
      btMobWhite.addEventListener('click', ClosePopUp);
    } else {
      const btMobDesktop = document.querySelector('.btMobDesktop');
      btMobDesktop.addEventListener('click', ClosePopUp);
    }
  });

  button2.addEventListener('click', () => {
    const body = document.querySelector('.body');
    const PopUp = document.createElement('div');
    PopUp.classList.add('MobilePopUp');
    PopUp.innerHTML = createStrProjectMob('button2');
    body.prepend(PopUp);
    if (window.innerWidth < 768) {
      const btMobWhite = document.querySelector('.btMobWhite');
      btMobWhite.addEventListener('click', ClosePopUp);
    } else {
      const btMobDesktop = document.querySelector('.btMobDesktop');
      btMobDesktop.addEventListener('click', ClosePopUp);
    }
  });

  button3.addEventListener('click', () => {
    const body = document.querySelector('.body');
    const PopUp = document.createElement('div');
    PopUp.classList.add('MobilePopUp');
    PopUp.innerHTML = createStrProjectMob('button3');
    body.prepend(PopUp);
    if (window.innerWidth < 768) {
      const btMobWhite = document.querySelector('.btMobWhite');
      btMobWhite.addEventListener('click', ClosePopUp);
    } else {
      const btMobDesktop = document.querySelector('.btMobDesktop');
      btMobDesktop.addEventListener('click', ClosePopUp);
    }
  });

  button4.addEventListener('click', () => {
    const body = document.querySelector('.body');
    const PopUp = document.createElement('div');
    PopUp.classList.add('MobilePopUp');
    PopUp.innerHTML = createStrProjectMob('button4');
    body.prepend(PopUp);
    if (window.innerWidth < 768) {
      const btMobWhite = document.querySelector('.btMobWhite');
      btMobWhite.addEventListener('click', ClosePopUp);
    } else {
      const btMobDesktop = document.querySelector('.btMobDesktop');
      btMobDesktop.addEventListener('click', ClosePopUp);
    }
  });

  button5.addEventListener('click', () => {
    const body = document.querySelector('.body');
    const PopUp = document.createElement('div');
    PopUp.classList.add('MobilePopUp');
    PopUp.innerHTML = createStrProjectMob('button5');
    body.prepend(PopUp);
    if (window.innerWidth < 768) {
      const btMobWhite = document.querySelector('.btMobWhite');
      btMobWhite.addEventListener('click', ClosePopUp);
    } else {
      const btMobDesktop = document.querySelector('.btMobDesktop');
      btMobDesktop.addEventListener('click', ClosePopUp);
    }
  });

  button6.addEventListener('click', () => {
    const body = document.querySelector('.body');
    const PopUp = document.createElement('div');
    PopUp.classList.add('MobilePopUp');
    PopUp.innerHTML = createStrProjectMob('button6');
    body.prepend(PopUp);
    if (window.innerWidth < 768) {
      const btMobWhite = document.querySelector('.btMobWhite');
      btMobWhite.addEventListener('click', ClosePopUp);
    } else {
      const btMobDesktop = document.querySelector('.btMobDesktop');
      btMobDesktop.addEventListener('click', ClosePopUp);
    }
  });
});

/* Mobile Menu */

function displayMobileMenu() {
  const Indicator = document.querySelector('.Indicator');
  Indicator.style.display = 'none';

  const header = document.querySelector('.header');
  header.style.display = 'none';

  const firstpart = document.querySelector('.first-part');
  firstpart.style.display = 'none';

  const myRecentWorks = document.querySelector('.myRecentWorks');
  myRecentWorks.style.display = 'none';

  const Works = document.querySelector('.Works');
  Works.style.display = 'none';

  const aboutMe = document.querySelector('.aboutMe');
  aboutMe.style.display = 'none';

  const Finalpart = document.querySelector('.Final-part');
  Finalpart.style.display = 'none';

  const footer = document.querySelector('.footer');
  footer.style.display = 'none';

  const mobileMenu = document.querySelector('.mobileMenu');
  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '100%';
  mobileMenu.style.height = '184px';
}

function restoreview() {
  const mobileMenu = document.querySelector('.mobileMenu');
  mobileMenu.style.display = 'none';

  const Indicator = document.querySelector('.Indicator');
  Indicator.style.display = 'flex';

  const header = document.querySelector('.header');
  header.style.display = 'flex';

  const firstpart = document.querySelector('.first-part');
  firstpart.style.display = 'flex';

  const myRecentWorks = document.querySelector('.myRecentWorks');
  myRecentWorks.style.display = 'block';

  const Works = document.querySelector('.Works');
  Works.style.display = 'grid';

  const aboutMe = document.querySelector('.aboutMe');
  aboutMe.style.display = 'flex';

  const Finalpart = document.querySelector('.Final-part');
  Finalpart.style.display = 'flex';

  const footer = document.querySelector('.footer');
  footer.style.display = 'flex';
}

function goprojects() {
  restoreview();
  const projects = document.querySelector('#myRecentWork');
  projects.scrollIntoView();
}

function goaboutme() {
  restoreview();
  const aboutMe = document.querySelector('#aboutMe');
  aboutMe.scrollIntoView();
}

function contactme() {
  restoreview();
  const aboutMe = document.querySelector('#Contact');
  aboutMe.scrollIntoView();
}

goaboutme();
goprojects();
contactme();
displayMobileMenu();
