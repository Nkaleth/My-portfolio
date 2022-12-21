/* Projects Dynamically */

let projects = {
  1 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_mobile.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  2 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_mobile.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  3 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_mobile.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  4 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_mobile.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  5 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_mobile.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  6 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_mobile.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
}
let countProj = Object.keys(projects).length;

function createStrProjects(num) {
  let string = '';
  for(let i=1;i<=num;i++){
    string += `<article class="project"><img class="proj-image" src="${projects[i].featuredImage}" alt="ProjectImage"><h3 class="Proj-Text">${projects[i].name}</h3><ul><li class="tag">${projects[i].technologies[1]}</li><li class="tag">${projects[i].technologies[2]}</li><li class="tag">${projects[i].technologies[3]}</li></ul><a href="#project"><img class="ButtonProj" src="img/ButtonEnable.png" alt="ButtonEnable"></a></article>`;
  }
  return string;
}

document.addEventListener("DOMContentLoaded", () => {
 let string = createStrProjects(countProj);
  document.querySelector('#portf').innerHTML = string;

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


