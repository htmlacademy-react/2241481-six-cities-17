import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../consts';
import { MainPage } from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuth, fetchFavorites, fetchOffers } from '../../store/action-api';
import { selectAuthorizationStatus } from '../../store/user-slice/selectors';

function App(): JSX.Element{
  const dispatch = useAppDispatch();
  const authenticationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(()=>{
    dispatch(checkAuth());
    dispatch(fetchOffers());
  }, [dispatch]);

  useEffect(()=> {
    dispatch(fetchFavorites());
  }, [authenticationStatus, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
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
                <FavoritesPage />
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
