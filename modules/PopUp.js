const ClosePopUp = () => {
  const PopUp = document.querySelector('.PopUp');
  PopUp.style.display = 'none';
};

const createStrProjectMob = (projects, id) => {
  let string = '';
  const str = id;
  const i = str.replace(/\D/g, '');
  projects.forEach((proj) => {
    if (proj.id === i * 1) {
      if (window.innerWidth < 768) {
        string = `<div class="whiteBackgroundDesktop">
                        <article class="ProjectPopUp">
                          <button class="btMobWhite"><img src="img/X_white.svg" alt="ButtonClose"></button>
                          <div class="ProjImageBox">
                          <img class="imagePopMob" src="${proj.featuredImage}" alt="ProjectImage">
                          </div>
                          <h3 class="Proj-Text">${proj.name}</h3>
                          <ul>
                            <li class="tag">${proj.technologies[0]}</li>
                            <li class="tag">${proj.technologies[1]}</li>
                            <li class="tag">${proj.technologies[2]}</li>
                          </ul><p class="popUpDescription">${proj.description}</p>
                          <div class="buttonMobPopup">
                            <a href="${proj.liveVersion}"><img class="ButtonProj" src="img/See_live.svg" alt="ButtonEnable"></a>
                            <a href="${proj.linkSource}"><img class="ButtonProj" src="img/See_source.svg" alt="ButtonEnable"></a>
                          </div></article>
                      </div>`;
      } else {
        string = `<div class="whiteBackground">
                        <article class="ProjectPopUpDesk">
                          <div class="ProjImageBoxPopUp">
                            <button class="btMobDesktop">
                            <img src="img/proy_button_desktop.svg" alt="ButtonClose">
                            </button>
                            <img class="proj_imagePopUp" src="${proj.featuredImage}" alt="ProjectImage">
                          </div>
                          <div class="detailsContainer">
                              <div class="h3_ButtonsPopUpDesk">
                              <h3 class="ProjTextPopUpDeskt">${proj.name}</h3>
                            <div class="buttonMobPopupDesk">
                            <a href="${proj.liveVersion}"><img class="buttonPopUpDesktop" src="img/See_live.svg" alt="ButtonEnable"></a>
                            <a href="${proj.linkSource}"><img class="buttonPopUpDesktop" src="img/See_source.svg" alt="ButtonEnable"></a>
                            </div>
                            </div>
                            <ul>
                              <li class="tagDesktop">${proj.technologies[0]}</li>
                              <li class="tagDesktop">${proj.technologies[1]}</li>
                              <li class="tagDesktop">${proj.technologies[2]}</li>
                              <li class="tagDesktop">${proj.technologies[3]}</li>
                              <li class="tagDesktop">${proj.technologies[4]}</li>
                              <li class="tagDesktop">${proj.technologies[5]}</li>
                            </ul>
                            <p class = "popUpDescription" >${proj.description}</p>                         
                          </div>
                        </article>
                  </div>`;
      }
    }
  });
  const body = document.querySelector('.body');
  const PopUp = document.createElement('div');
  PopUp.classList.add('PopUp');
  PopUp.innerHTML = string;
  body.prepend(PopUp);
  if (window.innerWidth < 768) {
    const btMobWhite = document.querySelector('.btMobWhite');
    btMobWhite.addEventListener('click', ClosePopUp);
  } else {
    const btMobDesktop = document.querySelector('.btMobDesktop');
    btMobDesktop.addEventListener('click', ClosePopUp);
  }
};

export default createStrProjectMob;