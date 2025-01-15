import { OfferPreviewType } from '../types/offer-type';

const mockFavorites: OfferPreviewType[] = [
  {
    'id': '88635663-6a06-4d54-b132-817bfee95c45',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 264,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7
  },
  {
    'id': '28b6705f-04a8-4103-990e-585b64d8741b',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 310,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '4243e604-611c-4bd2-bcca-601598e51869',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 482,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  }
];

export default mockFavorites;
