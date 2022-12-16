const CENTER_COORDS = [59.93897, 30.32385];
const MARKER_COORDS = [59.93856, 30.32266];
const DEFAULT_SCALE = 15;
const MARKER_SIZE = [18, 22];
const MARKER_OFSET = [-9, -22];
const map = document.querySelector('[data-map]');

const initMap = () => {
  if (map) {
    map.classList.remove('map--no-js');
    init();
  }
};

function init() {
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


export {initMap};
