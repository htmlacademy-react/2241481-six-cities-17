enum LoginStatus{
    AUTH = 'AUTH',
    NOT_AUTH = 'NOT_AUTH',
    UNKNOWN = 'UNKNOWN',
}

enum AppRoute{
    Root = '/',
    LogIn = '/login',
    Favorites = '/favorites',
    Offer = '/offer:id',
    NotFound = '*'
}

enum SortItem {
    Popular = 'Popular',
    PriceLow = 'Price: low to high',
    PriceHigh = 'Price: hihg to low',
    Rating = 'Top rate first'
}

export {
  LoginStatus,
  AppRoute,
  SortItem
};

