const scrollTo = () => {
  const smoothLinks = document.querySelectorAll('[data-scroll]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const href = smoothLink.getAttribute('href');

      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {scrollTo};
