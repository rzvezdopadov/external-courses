/* eslint-disable import/extensions */
import { CreateHeader } from './components/header/header.js';
import { CreateFooter } from './components/footer/footer.js';
import { CreateMain } from './components/main/main.js';

const setState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

const getState = () => {
  let state = JSON.parse(localStorage.getItem('state'));

  if (state === null) {
    state = {
      0: { title: 'Backlog', items: [] },
      1: { title: 'Ready', items: [] },
      2: { title: 'In progress', items: [] },
      3: { title: 'Finished', items: [] },
    };
    setState(state);
  }

  return state;
};

window.onload = () => {
  getState();
  const body = document.getElementById('body');
  body.appendChild(CreateHeader());
  body.appendChild(CreateMain(getState, setState));
  body.appendChild(CreateFooter());
};
