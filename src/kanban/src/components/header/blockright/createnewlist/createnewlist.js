export const CreateNewList = () => {
  const button = document.createElement('button');
  button.classList.add('flexboxtype');
  button.classList.add('createnewlist');

  const img = document.createElement('img');
  img.classList.add('add-list');
  const imgSrc = '../../src/kanban/src/images/add.png';
  img.src = imgSrc;
  img.alt = imgSrc;

  const span = document.createElement('span');
  span.classList.add('labelcreatenew');
  span.innerHTML = 'Create new list';

  button.appendChild(img);
  button.appendChild(span);
  return button;
};
