const menu = () => {
  let menustate = 0;

  const change = () => {
    if (menustate === 0) {
      menustate = 1;
      document.getElementById('arrow-down').className = '';
      document.getElementById('arrow-down').classList.add('arrow-down-reverse');

      let str = '<div class="menu-item">My account</div>';
      str += '<div class="menu-item">My tasks</div>';
      str += '<div class="menu-item">Log out</div>';
      document.getElementById('menu').innerHTML = str;
    } else {
      menustate = 0;
      document.getElementById('arrow-down').className = '';
      document.getElementById('arrow-down').classList.add('arrow-down');

      const destroyMenu = () => {
        document.getElementById('menu').innerHTML = '';
      };

      setTimeout(destroyMenu, 300);
    }
  };

  return { change };
};

const mainMenu = menu();

window.onload = () => {
  document.getElementById('arrow-down').onclick = mainMenu.change;
};
