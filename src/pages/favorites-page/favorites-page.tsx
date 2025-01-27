import { useEffect } from 'react';
import Header from '../../components/common/header';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/action-api';
import { selectAuthorizationStatus } from '../../store/user-slice/selectors';
import { AuthorizationStatus } from '../../components/consts';
import { selectFavorites } from '../../store/favorites-slice/selectors';
import FavoritesContainer from './favorites-container';
import FavoritesEmpty from './favoirtes-empty';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(()=>{
    if (authorizationStatus === AuthorizationStatus.Auth){
      dispatch(fetchFavorites());
    }
  }, [authorizationStatus, dispatch]);

  const favorites = useAppSelector(selectFavorites);

  return (
    <div className="page">
      <Header showUserLogin />
      {favorites.length > 0 ?
        <FavoritesContainer favorites={favorites}/> :
        <FavoritesEmpty /> }
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
