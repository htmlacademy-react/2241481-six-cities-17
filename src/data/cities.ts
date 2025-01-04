import cityType from '../types/city-type';

const CITIES_MAP: { [key: string]: cityType } = {
  Paris: {
    name: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13
  },
  Cologne: {
    name: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 13
  },
  Brussels: {
    name: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 13
  },
  Amsterdam: {
    name: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 13
  },
  Hamburg: {
    name: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 13
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 13
  }
};

export default CITIES_MAP;
