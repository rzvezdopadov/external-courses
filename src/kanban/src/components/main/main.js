/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
export const CreateMain = (getState, setState) => {
  const main = document.createElement('main');
  main.classList.add('flexboxtype');
  main.classList.add('main');
  main.id = 'main';

  const div = document.createElement('div');
  div.classList.add('flexboxtype');
  div.classList.add('main-div-container');

  const state = getState();

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      const elemTaskBoard = document.createElement('div');
      elemTaskBoard.classList.add('flexboxtype');
      elemTaskBoard.classList.add('task-board');

      const elemHeader = document.createElement('div');
      elemHeader.classList.add('flexboxtype');
      elemHeader.classList.add('task-board-header');

      const elemSpan = document.createElement('span');
      elemSpan.classList.add('flexboxtype');
      elemSpan.classList.add('task-board-header-span');
      elemSpan.innerHTML = state[key].title;
      elemHeader.appendChild(elemSpan);

      const elemButton = document.createElement('button');
      elemButton.classList.add('flexboxtype');
      elemButton.classList.add('task-board-dots');
      elemButton.innerHTML = '•••';
      elemHeader.appendChild(elemButton);

      elemTaskBoard.appendChild(elemHeader);

      const elemTaskContainer = document.createElement('div');
      elemTaskContainer.classList.add('flexboxtype');
      elemTaskContainer.classList.add('task-container');
      const strKey = `taskContainer${key}`;
      elemTaskContainer.id = strKey;

      for (let i = 0; i < state[key].items.length; i += 1) {
        const elemTask = document.createElement('div');
        elemTask.classList.add('flexboxtype');
        elemTask.classList.add('task');
        elemTask.innerHTML = state[key].items[i];
        elemTaskContainer.appendChild(elemTask);
      }

      elemTaskBoard.appendChild(elemTaskContainer);

      const elemAddCard = document.createElement('div');
      elemAddCard.classList.add('flexboxtype');
      elemAddCard.classList.add('add-card');

      const elemAddCardBtn = document.createElement('button');
      elemAddCardBtn.classList.add('add-card-btn');
      elemAddCardBtn.innerHTML = 'Add card';
      if (key !== '0' && (state[key - 1].items.length === 0)) elemAddCardBtn.setAttribute('disabled', 'disabled');

      const f = () => {
        let elemTask;
        const strKeyTask = `task${key}`;

        if (key === '0') {
          elemTask = document.createElement('div');
          elemTask.classList.add('flexboxtype');
          elemTask.classList.add('task');
          elemTask.contentEditable = true;
          elemTask.id = strKeyTask;
          elemTask.focus();

          elemTask.addEventListener('blur', () => {
            const elemTaskDo = document.getElementById(strKeyTask);
            const keyTaskValue = elemTaskDo.innerHTML;
            let keyTaskRepeat = -1;
            state[key].items.forEach((val, index) => {
              if (val === keyTaskValue) {
                keyTaskRepeat = index;
              }
              return true;
            });

            if (keyTaskValue && keyTaskRepeat === -1) {
              state[key].items.push(elemTaskDo.innerHTML);
            } else if (keyTaskRepeat !== -1) alert('Нельзя создать заметку с одинаковым содержимым!');

            setState(state);
            document.getElementById('main').innerHTML = '';
            document.getElementById('main').append(CreateMain(getState, setState));
          });
        } else {
          elemTask = document.createElement('select');
          elemTask.classList.add('flexboxtype');
          elemTask.classList.add('task');
          elemTask.id = strKeyTask;

          const fOpt = () => {
            const elemTaskDo = document.getElementById(strKeyTask);
            if (elemTaskDo.value) {
              const value = elemTaskDo.value;
              state[key - 1].items.splice(state[key - 1].items.indexOf(elemTaskDo.value), 1);
              state[key].items.push(value);
            }
            setState(state);
            document.getElementById('main').innerHTML = '';
            document.getElementById('main').append(CreateMain(getState, setState));
          };

          let elemOption = document.createElement('option');
          elemOption.disabled = true;
          elemOption.defaultSelected = true;
          elemTask.appendChild(elemOption);

          for (let i = 0; i < state[key - 1].items.length; i += 1) {
            elemOption = document.createElement('option');
            elemOption.innerHTML = state[key - 1].items[i];
            elemTask.appendChild(elemOption);
          }

          elemTask.addEventListener('change', fOpt);
          elemTask.addEventListener('blur', () => {
            document.getElementById('main').innerHTML = '';
            document.getElementById('main').append(CreateMain(getState, setState));
          });
        }

        if (!document.getElementById(strKeyTask)) {
          document.getElementById(strKey).appendChild(elemTask);
          document.getElementById(elemTask.id).focus();
        }
      };

      elemAddCardBtn.addEventListener('click', f);

      elemTaskBoard.appendChild(elemAddCard);

      elemAddCard.appendChild(elemAddCardBtn);

      div.appendChild(elemTaskBoard);
    }
  }

  if (document.getElementById('main') !== null) {
    return div;
  }

  main.appendChild(div);

  return main;
};
