import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OfferType from '../../types/offer-type';
import { AppRoute } from '../consts';
import MainPage from '../../pages/main/mainPage';
import FavoritesPage from '../../pages/favorites/favoritesPage';
import LoginPage from '../../pages/login/loginPage';
import OfferPage from '../../pages/offer/offerPage';
import PageNotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../privateRoute';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import fetchOffers from '../../store/action-api';


type AppProps = {
  favorites: OfferType[];
}

function App({favorites}: AppProps): JSX.Element{
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((store) => store.currentCity);

  useEffect(()=>{
    dispatch(fetchOffers());
  }, [dispatch, currentCity]);

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
