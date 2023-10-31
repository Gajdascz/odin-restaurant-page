import './components/landing-page/styles/mynormalize.css';
import './components/landing-page/styles/style.css';

function test() {
  const headerElement = document.createElement('h1');
  headerElement.textContent = `It's a test!`;
  headerElement.classList.add('test');
  return headerElement;
}

document.body.appendChild(test());