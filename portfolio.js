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
