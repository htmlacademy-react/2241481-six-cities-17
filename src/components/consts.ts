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
    Offer = '/offers/:id'
}

enum SortItem {
    Popular = 'Popular',
    PriceLow = 'Price: low to high',
    PriceHigh = 'Price: hihg to low',
    Rating = 'Top rate first'
}

export {
  AuthorizationStatus,
  AppRoute,
  ApiRoute,
  SortItem
};

