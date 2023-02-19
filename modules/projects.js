import createStrProjectMob from './PopUp.js';

const projects = [
  {

    id: 1,
    name: 'Conference page',
    description: 'In this project I build a page based on an online website for a conference.',
    featuredImage: ['img/conference_project_mobile.png', 'img/conference_project_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://nkaleth.github.io/capstone_project1/',
    linkSource: 'https://github.com/Nkaleth/capstone_project1',
  },
  {
    id: 2,
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  {
    id: 3,
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  {
    id: 4,
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  {
    id: 5,
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
  {
    id: 6,
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: ['img/Snapshoot_Portfolio_mobile.jpg', 'img/Snapshoot_Portfolio_desktop.png'],
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: '#url',
    linkSource: '#url',
  },
];

const loadProjects = () => {
  const portfolio = document.querySelector('#portf');
  let string = '';

  projects.forEach((proj) => {
    string += `<article class="project">
                    <img class="proj-image" src="${proj.featuredImage[0]}" alt="ProjectImage">
                    <h3 class="Proj-Text">${proj.name}</h3>
                    <ul>
                      <li class="tag">${proj.technologies[0]}</li>
                      <li class="tag">${proj.technologies[1]}</li>
                      <li class="tag">${proj.technologies[2]}</li>
                    </ul>
                    <button id= "proj${proj.id}" class="btProjMob" ><span class="TextButtonProjects">See Project</span></button>
                  </article>`;
  });

  portfolio.innerHTML = string;

  portfolio.addEventListener('click', (e) => {
    createStrProjectMob(projects, e.target.id);
    console.log(e.target);
  });
};

export { projects, loadProjects };