/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import { getState } from '../../state/state.js';

export const UpdateActiveTask = () => {
  const state = getState();

  let count = 0;

  for (const key in state) {
    if (state.hasOwnProperty(key) && (Number(key) !== Object.keys(state).length - 1)) {
      count += state[key].items.length;
    }
  }

  const numberSpan = document.getElementById('active-tasks');
  if (numberSpan) numberSpan.innerHTML = count;

  return count;
};

export const CreateActiveTask = () => {
  const div = document.createElement('div');

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('tasks-count-label');
  labelSpan.innerHTML = 'Active tasks: ';

  const numberSpan = document.createElement('span');
  numberSpan.classList.add('active-tasks');
  numberSpan.id = 'active-tasks';
  numberSpan.innerHTML = UpdateActiveTask();

  div.appendChild(labelSpan);
  div.appendChild(numberSpan);

  return div;
};
