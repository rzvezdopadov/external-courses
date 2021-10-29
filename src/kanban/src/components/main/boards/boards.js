/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import { getState } from '../../state/state.js';
import { CreateBoard } from './board/board.js';

export const CreateBoards = () => {
  const div = document.createElement('div');
  div.classList.add('main-div-container');

  const state = getState();

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      div.appendChild(CreateBoard(key, state));
    }
  }

  if (!div.innerHTML) {
    const elemSpan = document.createElement('span');
    elemSpan.innerHTML = 'Boards not created yet, please create new list!';
    elemSpan.style.color = 'white';
    div.appendChild(elemSpan);
  }

  return div;
};
