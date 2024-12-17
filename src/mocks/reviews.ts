import reviewType from '../types/reivew-type';

const mockReviews: reviewType[] = [
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  },
  {
    'id': '29735af6-f2ec-4690-a6e4-726ffe4058a2',
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2024-11-23T21:00:00.617Z',
    'rating': 3,
    'user': {
      'name': 'Corey',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/6.jpg',
      'isPro': true
    }
  },
  {
    'id': '8cb898b3-0b21-4f0f-a30c-277f626857eb',
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2024-11-23T21:00:00.617Z',
    'rating': 1,
    'user': {
      'name': 'Mollie',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      'isPro': true
    }
  }
];

export default mockReviews;
