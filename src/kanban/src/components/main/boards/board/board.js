/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import { CreateBoardFooter } from './footer/footer.js';
import { CreateBoardHeader } from './header/header.js';
import { CreateBoardTasks } from './tasks/tasks.js';

export const CreateBoard = (key, state) => {
  const elemTaskBoard = document.createElement('div');
  elemTaskBoard.classList.add('flexboxtype');
  elemTaskBoard.classList.add('task-board');

  elemTaskBoard.appendChild(CreateBoardHeader(key, state));
  elemTaskBoard.appendChild(CreateBoardTasks(key, state));
  elemTaskBoard.appendChild(CreateBoardFooter(key, state));

  return elemTaskBoard;
};
