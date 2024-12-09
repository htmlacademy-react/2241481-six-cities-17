import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OfferType from '../../types/offerType';
import { AppRoute } from '../consts';
import MainPage from '../../pages/main/mainPage';
import FavoritesPage from '../../pages/favorites/favoritesPage';
import LoginPage from '../../pages/login/loginPage';
import OfferPage from '../../pages/offer/offerPage';
import PageNotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../privateRoute';

type AppProps = {
  offers: OfferType[];
  favorites: OfferType[];
}

function App({offers, favorites}: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage offers={offers} />} />
          <Route path={AppRoute.LogIn} element={<LoginPage />}></Route>
          <Route path={AppRoute.Offer} element={<OfferPage />}></Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isRedirectRequired = {false} navigatePath={AppRoute.LogIn}>
                <FavoritesPage favorites={favorites}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.NotFound} element={<PageNotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
