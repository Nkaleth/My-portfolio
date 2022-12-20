

function display_mobileMenu() {

    let topnav = document.querySelector('body');
    topnav.style.display = "none";

    let mobileMenu = document.querySelector('.headline');
    mobileMenu.classList.add('mobMenu');

    let listMenu = document.createElement('ul') ;
    listMenu.classList.add('listMenu');

    let portfolio = document.createElement('li');
    portfolio.textContent = ('Portfolio');
    portfolio.setAttribute('href', '#portf');
    listMenu.appendChild(listMenu);

    let about = document.createElement('li');
    about.textContent = ('About');
    about.setAttribute('href', '#about');
    listMenu.appendChild(listMenu);

    let contact = document.createElement('li');
    contact.textContent = ('Contact');
    contact.setAttribute('href', '#Contact');
    listMenu.appendChild(listMenu);

    mobileMenu.appendChild(listMenu);
    document.body.appendChild(mobileMenu);

}

let hamburger = document.querySelector('.linkMenu');
hamburger.addEventListener("click", display_mobileMenu);


