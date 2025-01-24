import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OfferPreviewType } from '../../types/offer-type';
import { AppRoute } from '../consts';
import { MainPage } from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../privateRoute';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { checkAuth, fetchOffers } from '../../store/action-api';


type AppProps = {
  favorites: OfferPreviewType[];
}

function App({favorites}: AppProps): JSX.Element{
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(checkAuth());
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.LogIn} element={<LoginPage />}></Route>
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute navigatePath={AppRoute.LogIn}>
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
