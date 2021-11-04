export const CreateActiveTask = () => {
  const div = document.createElement('div');

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('tasks-count-label');
  labelSpan.innerHTML = 'Active tasks: ';

  const numberSpan = document.createElement('span');
  numberSpan.classList.add('active-tasks');
  numberSpan.id = 'active-tasks';
  numberSpan.innerHTML = '0';

  div.appendChild(labelSpan);
  div.appendChild(numberSpan);

  return div;
};
