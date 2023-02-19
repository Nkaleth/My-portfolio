import  { projects, loadProjects } from "./modules/projects.js";

loadProjects();



function ClosePopUp() {
  const PopUp = document.querySelector('.MobilePopUp');
  PopUp.style.display = 'none';
}

// document.addEventListener('DOMContentLoaded', () => {
  
//   /* PopUp Mobile & Desktop */
//   const buttonStrings = document.querySelector('#portf').querySelectorAll('button');
//   const countIds = buttonStrings.length;
//   const Ids = [];
//   for (let j = 0; j < countIds; j += 1) {
//     Ids.push(buttonStrings[j].id);
//   }
//   for (let k = 0; k < Ids.length; k += 1) {
//     const button = document.querySelector(`#${Ids[k]}`);
//     button.addEventListener('click', () => {
//       const body = document.querySelector('.body');
//       const PopUp = document.createElement('div');
//       PopUp.classList.add('MobilePopUp');
//       PopUp.innerHTML = createStrProjectMob(`${Ids[k]}`);
//       body.prepend(PopUp);
//       if (window.innerWidth < 768) {
//         const btMobWhite = document.querySelector('.btMobWhite');
//         btMobWhite.addEventListener('click', ClosePopUp);
//       } else {
//         const btMobDesktop = document.querySelector('.btMobDesktop');
//         btMobDesktop.addEventListener('click', ClosePopUp);
//       }
//     });
//   }
// });

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

// goaboutme();
// goprojects();
// contactme();
// displayMobileMenu();
