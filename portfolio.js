import {
  displayMobileMenu, goprojects, goaboutme, contactme,
} from './modules/mobileMenu.js';
import { loadProjects } from './modules/projects.js';

const mobileHeader = document.querySelector('.headerMobile');
const MobileMenu = document.querySelector('.mobileMenu');

loadProjects();

mobileHeader.addEventListener('click', (e) => {
  if (e.target.id === 'menuMobile') {
    displayMobileMenu();
  }
});

MobileMenu.addEventListener('click', (e) => {
  if (e.target.id === 'aboutmeMob') {
    goaboutme();
  } else if (e.target.id === 'contactMob') {
    contactme();
  } else if (e.target.id === 'worksMob') {
    goprojects();
  }
});

// goaboutme();
// goprojects();
// contactme();
// displayMobileMenu();
