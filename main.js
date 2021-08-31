import docReady from './src/docReady';
import getDay from './src/getDay';

import './style.css';

const app = document.getElementById('app');

function init() {
  const content = `
    <h1>Hello from Vite</h1>
    <p>Today is ${getDay()}</p>
  `;

  app.innerHTML = content;
}

docReady(init);
