import createStrProjectMob from './PopUp.js';

const projects = [
  {

    id: 1,
    name: 'Conference page',
    description: 'In this project I build a page based on an online website for a conference to complete the first module of the Microverse Full Stack Developing program.',
    featuredImage: 'img/img1.png',
    technologies: ['JavaScript', 'css3', 'Html5', 'Github', 'GitBash', 'Terminal'],
    liveVersion: 'https://nkaleth.github.io/capstone_project1/',
    linkSource: 'https://github.com/Nkaleth/capstone_project1',
  },
  {
    id: 2,
    name: 'LeaderBoard',
    description: 'This is a JavaScript project for a Leaderboard list app, using webpack and ES6 features, notably modules.',
    featuredImage: 'img/img2.png',
    technologies: ['Webpack', 'ES6Javascript', 'API', 'Html5-Css3', 'Github', 'Gitflow-Workflow'],
    liveVersion: 'https://nkaleth.github.io/Leaderboard/',
    linkSource: 'https://github.com/Nkaleth/Leaderboard',
  },
  {
    id: 3,
    name: 'Art Gallery',
    description: 'This JavaScript capstone project is about building a web application based on an external API. We selected an API from a Museum that provides data about paintings and then we build the webapp around it. This webapp will have 3 user interfaces.',
    featuredImage: 'img/img3.png',
    technologies: ['Html-Css-JavaScript', 'Webpack', 'API-Rest', 'TeamWork', 'Github', 'Gitflow-workflow'],
    liveVersion: 'https://nkaleth.github.io/Capstone2_art/',
    linkSource: 'https://github.com/Nkaleth/Capstone2_art',
  },
  {
    id: 4,
    name: 'Bookstore',
    description: 'The Bookstore is a website with these functionalities: display a list of books, add a book, and remove a selected book. I built this web with ReactJs & Redux Toolkit and access the data from an API RESTful.',
    featuredImage: 'img/img4.png',
    technologies: ['Html-Css-JavaScript', 'ReactJs', 'Redux-Toolkit', 'GitFlow', 'Github', 'API-Rest'],
    liveVersion: 'https://bookstore-obvr.onrender.com/',
    linkSource: 'https://github.com/Nkaleth/bookstore',
  },
  {
    id: 5,
    name: "Space Travelers' Hub",
    description: 'In this project, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    featuredImage: 'img/img5.png',
    technologies: ['ReactJs', 'React-router', 'Redux-toolkit', 'API-Restful', 'Testing', 'Gitflow-Workflow'],
    liveVersion: 'https://space-travelers-hub-2l8p.onrender.com',
    linkSource: 'https://github.com/Nkaleth/space_traveler_project',
  },
  {
    id: 6,
    name: 'Best Seller Books New York Times',
    description: "Single-page application (SPA) built with React and Redux about the data retrieved from the New York Time's API from Best Sellers Books.",
    featuredImage: 'img/img6.png',
    technologies: ['ReactJs', 'React-router', 'Redux-toolkit', 'API-Restful', 'Testing', 'Gitflow-Workflow'],
    liveVersion: 'https://new-york-times-best-seller-books.onrender.com/',
    linkSource: 'https://github.com/Nkaleth/best_sellers_books',
  },
];

const loadProjects = () => {
  const portfolio = document.querySelector('#portf');
  let string = '';

  projects.forEach((proj) => {
    string += `<article class="project">
                    <div class="ProjImageBox">
                    <img class="proj-image" src="${proj.featuredImage}" alt="ProjectImage">
                    </div>
                    <h3 class="Proj-Text">${proj.name}</h3>
                    <ul>
                      <li class="tag">${proj.technologies[0]}</li>
                      <li class="tag">${proj.technologies[1]}</li>
                      <li class="tag">${proj.technologies[2]}</li>
                    </ul>
                    <button id= "proj${proj.id}" name="project" class="btProjMob" ><span class="TextButtonProjects">See Project</span></button>
                  </article>`;
  });

  portfolio.innerHTML = string;

  portfolio.addEventListener('click', (e) => {
    if (e.target.name === 'project') {
      createStrProjectMob(projects, e.target.id);
    }
  });
};

export { projects, loadProjects };