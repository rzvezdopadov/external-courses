/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

import { UpdateActiveTask } from '../footer/active-tasks/active-tasks.js';
import { UpdateFinishedTask } from '../footer/finished-tasks/finished-tasks.js';
import { setState } from '../state/state.js';
import { CreateBoards } from './boards/boards.js';

export const CreateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.id = 'main';

  const boards = CreateBoards();

  if (document.getElementById('main') !== null) {
    return boards;
  }

  main.appendChild(boards);

  return main;
};

export const UpdateMain = (state) => {
  setState(state);
  document.getElementById('main').innerHTML = '';
  document.getElementById('main').append(CreateMain());
  UpdateActiveTask();
  UpdateFinishedTask();
};
