import './components/restaurant-components/styles/mynormalize.css';
import './components/restaurant-components/styles/style.css';
import { initPage } from './modules/renderInitial.js'
import { renderIndexPage } from './modules/renderIndex.js';
import { renderMenuPage } from './modules/renderMenu.js'


const contentController = (() => {
  initPage();
  const contentContainer = document.querySelector('div#dynamic-content-container');
  const updateContent = (page) => {
    if(contentContainer.hasChildNodes()) contentContainer.textContent = '';
    switch(page) {
      case 'index':
        contentContainer.append(renderIndexPage());
        break;
      case 'menu':
        contentContainer.append(renderMenuPage());
        break;
      case 'contact':
        break;
    }
  }
  return { updateContent }
})();

const navController = (() => {
  const navButtons = document.querySelectorAll('button.nav-button');
  const updateCurrentButton = (clickedButton) => {
    navButtons.forEach((button) => {
      button.removeAttribute('id');
      clickedButton.setAttribute('id','current-page');
    })
  }
  navButtons.forEach((button) => {
    button.addEventListener(('click'), (e) => {
      updateCurrentButton(button);
      contentController.updateContent(button.value);
    });
  });
})();




