type OfferType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
};

const mockOffers: OfferType[] = [
  {
    'id': '4ab12757-ac53-419c-b825-a1db4922197b',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 105,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '5bccc1c4-0c2b-407b-8142-86ed640be82c',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 227,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': 'df04175a-34b6-4857-8402-7c187bc87ca5',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 221,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': 'cfdf1cff-9854-43c4-9284-738fa6fde0b4',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 204,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'a0df8c1c-18c3-407f-9883-77c0930231a4',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 784,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': 'a56db0f3-9066-4170-b958-a1f72a02b769',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 227,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': 'a0c80683-a09f-42c8-b1cb-8fb3ad5e6b53',
    'title': 'Tile House',
    'type': 'house',
    'price': 977,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
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

export default mockOffers;
