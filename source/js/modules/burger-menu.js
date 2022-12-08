const initMainMenu = () => {
  const header = document.querySelector('.main-header');
  const buttonToogle = document.querySelector('.button-toogle');
  if (header && buttonToogle) {
    header.classList.remove('main-header--no-js');

    buttonToogle.addEventListener('click', () => {
      header.classList.toggle('is-menu-opened');
    });
  }
};

export {initMainMenu};
