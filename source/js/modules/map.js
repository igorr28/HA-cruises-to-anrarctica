const CENTER_COORDS = [59.93897, 30.32385];
const MARKER_COORDS = [59.93856, 30.32266];
const DEFAULT_SCALE = 15;
const MARKER_SIZE = [18, 22];
const MARKER_OFSET = [-9, -22];
const map = document.querySelector('[data-map]');

const initMap = () => {
  // отложенная загрузка карты
  setTimeout(function () {
    const elem = document.createElement('script');
    elem.src = 'https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=5316c9d2-e4e3-49ac-b505-21d9271287c5&lang=ru_RU';
    document.body.append(elem);
    elem.addEventListener('load', () => {
      // eslint-disable-next-line no-undef
      ymaps.ready(init);
    }
    );
  }, 4000);

  function init() {
    map.classList.remove('map--no-js');

    // eslint-disable-next-line no-undef
    let myMap = new ymaps.Map(map, {
      center: CENTER_COORDS,
      zoom: DEFAULT_SCALE,
    });

    // eslint-disable-next-line no-undef
    const myPlacemark = new ymaps.Placemark(MARKER_COORDS, {
      balloonContent: 'г. Санкт-Петербург,<br> ул. Большая Конюшенная, 19/8',
      hintContent: 'г. Санкт-Петербург,<br> ул. Большая Конюшенная, 19/8',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/map-marker.svg',
      iconImageSize: MARKER_SIZE,
      iconImageOffset: MARKER_OFSET,
    });

    myMap.geoObjects.add(myPlacemark);
  }
};

export {initMap};
