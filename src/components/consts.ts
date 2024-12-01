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

export { LoginStatus };
export { AppRoute };
