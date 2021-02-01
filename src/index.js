import _ from 'lodash';
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // lodash，现在通过一个 script 引入
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);


  element.appendChild(btn)
  return element;
}

document.body.appendChild(component());