const telInputs = Array.from(document.querySelectorAll('input[type="tel"]'));

const initMask = () => {
  setTimeout(function () {
    const elem = document.createElement('script');
    elem.src = 'https://unpkg.com/imask';
    document.body.append(elem);
    elem.addEventListener('load', () => {
      if (telInputs) {
        telInputs.forEach(
            // eslint-disable-next-line no-undef
            (telInput) => new IMask(telInput, {
              mask: '+{7}(000)000-00-00',
            })
        );
      }
    }
    );
  }, 3000);
};

export {initMask};
