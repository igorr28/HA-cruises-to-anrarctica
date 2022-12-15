import {FocusLock} from '../utils/focus-lock.js';

const focusLock = new FocusLock();

const initMainMenu = () => {
  const header = document.querySelector('[data-header]');
  const buttonToogle = document.querySelector('[data-burger]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

  const openMenu = () => {
    header.classList.add('is-menu-opened');
    document.body.style.overflow = 'hidden';
    focusLock.lock('.header');
    document.addEventListener('keydown', onMenuKeydownEsc);
    document.addEventListener('click', onClickMenuOut);
  };

  const closeMenu = () => {
    header.classList.remove('is-menu-opened');
    document.body.style.overflow = '';
    focusLock.unlock();
    document.removeEventListener('keydown', onMenuKeydownEsc);
    document.removeEventListener('click', onClickMenuOut);
  };

  const onMenuKeydownEsc = (evt) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey && header.classList.contains('is-menu-opened')) {
      evt.preventDefault();
      closeMenu();
    }
  };

  const onClickMenuOut = (e) => {
    const target = e.target;
    if (target.closest('[data-burger]')) {
      return;
    } else {
      if (header.classList.contains('is-menu-opened')) {
        closeMenu();
      }
    }
  };

  if (header) {
    header.classList.remove('main-header--no-js');
  }

  if (buttonToogle) {
    buttonToogle.addEventListener('click', () => {
      if (header.classList.contains('is-menu-opened')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navLinks.length) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', () => {
        closeMenu();
        const href = navLink.getAttribute('href');

        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  }
};

export {initMainMenu};
