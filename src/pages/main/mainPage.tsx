import { useState } from 'react';
import Header from '../../components/common/header';
import OfferCardsList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CityTabs from '../../components/city-tabs/city-tabs';
import { useAppSelector } from '../../hooks';
import CITIES_MAP from '../../data/cities';
import OffersEmpty from '../offer/offers-empty';

function MainPage(): JSX.Element{
  const [activeOffer, setActiveOffer] = useState<string | null>(null);
  const handleActiveOfferChange = (id: string | null) => {
    setActiveOffer(id);
  };

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  console.log('mainPage render: ', currentCity);

  return (
    <div className="page page--gray page--main">
      <Header isNavigationRequired />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs currentCity={currentCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref ="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              {offers.length > 0 ?
                <OfferCardsList onActiveOfferCardChanged={handleActiveOfferChange} offers={offers}/> :
                <OffersEmpty cityName={currentCity}/>}
            </section>
            <div className="cities__right-section">
              <Map
                city={CITIES_MAP[currentCity] ? CITIES_MAP[currentCity] : CITIES_MAP['Amsterdam']}
                offers={offers}
                activeOfferId={activeOffer}
                className={'cities__map map'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
