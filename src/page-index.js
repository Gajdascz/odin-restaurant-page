import { buildElementTree } from "./helper-functions";

function loadIndexPage() {
const documentBody = document.querySelector(`body#body-container`);
documentBody.appendChild(createHeader());
}

function createHeader() {
  return buildElementTree(
    { type: `header`, attributes: { id: `header-container` },
      children: [ 
        { type: `h1`, attributes: { class: `header-logo` }, text: `PROGRAMMERS PANTRY` },
        { type: `h4`, attributes: { class: `header-slogan` },
          children: [
            { type: 'span', text: 'Stop for a ' },
            { type: 'span', attributes: { class: 'header-highlight' }, text: 'Byte' },
            { type: 'span', text: ', stay for a ' },
            { type: 'span', attributes: { class: 'header-highlight' }, text: 'Bit' }
          ]
        },
        { type: `nav`,
          attributes: { class: `header-nav` },
          children: [
            { type: `ul`, attributes: {},
              children: [
                { type: 'li',
                  children: [
                    { type: `button`, attributes: {type: `button`, value: `index`}, text: `index` }
                  ]
                },
                { type: 'li',
                  children: [
                    { type: `button`, attributes: {type: `button`, value: `dishes`}, text: `dishes[]` }
                  ]
                },
                { type: 'li',
                  children: [
                    { type: `button`, attributes: {type: `button`, value: `api`}, text: `API` }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  );
  // const headerSlogan   = document.createElement(`h4`);
  // const headerNav      = document.createElement(`nav`);
  // const navList        = document.createElement(`ul`);
  // const navLinkIndex   = document.createElement(`li`);
  // const navLinkMenu    = document.createElement(`li`);
  // const navLinkContact = document.createElement(`li`);
  
  // headerElement.setAttribute(`id`, `header-container`);
  // headerLogo.classList.add(`header-logo`);
  // headerSlogan.classList.add(`header-slogan`);

  console.log(header);
}

function createMain() {

}
function createHeroSection() {

}
function createReviewsSection() {
}

function createFooter() {
}

loadIndexPage();