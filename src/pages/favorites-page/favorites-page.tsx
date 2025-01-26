import { useEffect } from 'react';
import Header from '../../components/common/header';
import { OfferPreviewType } from '../../types/offer-type';
import FavoriteGroup from './favorites-group';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavorites } from '../../store/action-api';
import { selectAuthorizationStatus } from '../../store/user-slice/selectors';
import { AuthorizationStatus } from '../../components/consts';
import { selectFavorites } from '../../store/favorites-slice/selectors';

function groupByCityName(offers: OfferPreviewType[]): Record<string, OfferPreviewType[]> {
  return offers.reduce((grouped: Record<string, OfferPreviewType[]>, offer) => {
    const cityName = offer.city.name;
    if (!grouped[cityName]) {
      grouped[cityName] = [];
    }
    grouped[cityName].push(offer);
    return grouped;
  }, {});
}

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(()=>{
    if (authorizationStatus === AuthorizationStatus.Auth){
      dispatch(fetchFavorites());
    }
  }, [authorizationStatus, dispatch]);

  const favorites = useAppSelector(selectFavorites);

  const favoritesGroups: Record<string, OfferPreviewType[]> = groupByCityName(favorites);
  return (
    <div className="page">
      <Header showUserLogin={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesGroups).map(
                ([city, offers]) => <FavoriteGroup cityName={city} offers={offers} key={city}/>
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
