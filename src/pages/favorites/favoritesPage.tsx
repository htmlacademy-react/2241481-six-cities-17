import Header from '../../components/common/header';
import OfferType from '../../types/offerType';
import FavoriteGroup from './favoritesGroup';

type Props={
  favorites: OfferType[];
}

function groupByCityName(offers: OfferType[]): Record<string, OfferType[]> {
  return offers.reduce((grouped: Record<string, OfferType[]>, offer) => {
    const cityName = offer.city.name;
    if (!grouped[cityName]) {
      grouped[cityName] = [];
    }
    grouped[cityName].push(offer);
    return grouped;
  }, {});
}

export default function FavoritesPage({favorites}: Props): JSX.Element {
  const favoritesGroups: Record<string, OfferType[]> = groupByCityName(favorites);
  console.log(favorites);
  return (
    <div className="page">
      <Header isNavigationRequired />
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
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
