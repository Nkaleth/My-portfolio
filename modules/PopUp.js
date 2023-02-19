import { projects } from "./projects.js";

function createStrProjectMob(id) {
  let string = '';
  const str = id;
  const i = str.replace(/\D/g, '');
  projects.forEach(proj => {
    if(proj.id === id){
        if (window.innerWidth < 768) {
            string = `<div class="whiteBackground">
                        <article class="ProjectPopUp">
                          <button class="btMobWhite"><img src="img/X_white.svg" alt="ButtonClose"></button>
                          <img class="imagePopMob" src="${projects[i].featuredImage[0]}" alt="ProjectImage">
                          <h3 class="Proj-Text">${projects[i].name}</h3>
                          <ul>
                            <li class="tag">${projects[i].technologies[0]}</li>
                            <li class="tag">${projects[i].technologies[1]}</li>
                            <li class="tag">${projects[i].technologies[2]}</li>
                          </ul><p class="popUpDescription">${projects[i].description}</p>
                          <div class="buttonMobPopup">
                            <a href="${projects[i].liveVersion}"><img class="ButtonProj" src="img/See_live.svg" alt="ButtonEnable"></a>
                            <a href="${projects[i].linkSource}"><img class="ButtonProj" src="img/See_source.svg" alt="ButtonEnable"></a>
                          </div></article>
                      </div>`;
          } else {
            string = `<div class="whiteBackground">
                        <button class="btMobDesktop">
                        <img src="img/proy_button_desktop.svg" alt="ButtonClose"></button>
                        <article class="ProjectPopUpDesk">
                          <img class="proj-image" src="${projects[i].featuredImage[1]}" alt="ProjectImage">
                          <div class="h3_ButtonsPopUpDesk">
                            <h3 class="ProjTextPopUpDeskt">${projects[i].name}</h3>
                          <div class="buttonMobPopupDesk">
                        <a href="${projects[i].liveVersion}"><img class="buttonPopUpDesktop" src="img/See_live.svg" alt="ButtonEnable"></a>
                        <a href="${projects[i].linkSource}"><img class="buttonPopUpDesktop" src="img/See_source.svg" alt="ButtonEnable"></a>
                          </div>
                          </div>
                          <ul>
                            <li class="tagDesktop">${projects[i].technologies[0]}</li>
                            <li class="tagDesktop">${projects[i].technologies[1]}</li>
                            <li class="tagDesktop">${projects[i].technologies[2]}</li>
                            <li class="tagDesktop">${projects[i].technologies[3]}</li>
                            <li class="tagDesktop">${projects[i].technologies[4]}</li>
                            <li class="tagDesktop">${projects[i].technologies[5]}</li>
                          </ul>
                          <p class = "popUpDescription" >${projects[i].description}</p>
                        </article>
                      </div>`;
          }
          console.log(string);
          return string;
    }
  });
}

export default createStrProjectMob;