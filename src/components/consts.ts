enum AuthorizationStatus{
    Auth = 'AUTH',
    NotAuth = 'NOT_AUTH',
    Unknown = 'UNKNOWN',
}

enum AppRoute{
    Root = '/',
    LogIn = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    NotFound = '*'
}

enum ApiRoute{
    Offers = '/offers',
    Login = '/login',
    Logout = '/logout',
    Offer = '/offers/:id',
    Comments = '/comments/:id',
    NearByOffers = '/offers/:id/nearby',
}


enum SortItem {
    Popular = 'Popular',
    PriceLow = 'Price: low to high',
    PriceHigh = 'Price: hihg to low',
    Rating = 'Top rate first'
}

const REVIEW_THRESHOLD = {
  MIN: 5,
  MAX: 300
};

const RATING_THRESHOLD = {
  MIN: 1,
  MAX: 5
};

const MAX_REVIEWS_COUNT = 10;

const RATIMG_MAP: { [key: number]: string } = {
  1 : 'terribly',
  2 : 'badly',
  3 : 'not bad',
  4 : 'good',
  5 : 'perfect'
};

export {
  AuthorizationStatus,
  AppRoute,
  ApiRoute,
  SortItem,
  REVIEW_THRESHOLD,
  RATING_THRESHOLD,
  RATIMG_MAP,
  MAX_REVIEWS_COUNT
};

