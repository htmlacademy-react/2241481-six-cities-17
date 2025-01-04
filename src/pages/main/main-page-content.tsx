import Map from '../../components/map/map';
import OfferCardsList from '../../components/offers-list/offers-list';
import CITIES_MAP from '../../data/cities';
import OfferType from '../../types/offer-type';

type Props = {
    offers: OfferType[];
    currentCity: string;
    activeOfferId: string | null;
    handleActiveOfferChange: (id: string | null) => void;
}

function MainPageContent({offers, currentCity, activeOfferId, handleActiveOfferChange}: Props): JSX.Element{
  return(
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
          <OfferCardsList onActiveOfferCardChanged={handleActiveOfferChange} offers={offers}/> :
        </section>
        <div className="cities__right-section">
          <Map
            city={CITIES_MAP[currentCity] ? CITIES_MAP[currentCity] : CITIES_MAP['Amsterdam']}
            offers={offers}
            activeOfferId={activeOfferId}
            className={'cities__map map'}
          />
        </div>
      </div>
    </div>);
}

export default MainPageContent;
