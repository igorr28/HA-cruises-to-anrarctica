import {FocusLock} from '../utils/focus-lock.js';
import {ScrollLock} from '../utils/scroll-lock.js';

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const initMainMenu = () => {
  const header = document.querySelector('[data-header]');
  const buttonToogle = document.querySelector('[data-burger]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

  const openMenu = () => {
    header.classList.add('is-menu-opened');
    focusLock.lock('.header');
    scrollLock.disableScrolling();
    document.addEventListener('keydown', onMenuKeydownEsc);
    document.addEventListener('click', onClickMenuOut);
  };

  const closeMenu = () => {
    header.classList.remove('is-menu-opened');
    focusLock.unlock();
    scrollLock.enableScrolling();
    document.removeEventListener('keydown', onMenuKeydownEsc);
    document.removeEventListener('click', onClickMenuOut);
  };

  const onMenuKeydownEsc = (e) => {
    const isEscKey = e.key === 'Escape' || e.key === 'Esc';

    if (isEscKey && header.classList.contains('is-menu-opened')) {
      e.preventDefault();
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
