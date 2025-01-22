import Map from '../../components/map/map';
import PlacesSorting from '../../components/sorting/sorting';
import CITIES_MAP from '../../data/cities';
import { OfferPreviewType } from '../../types/offer-type';
import { filterOffers } from '../../utils/utils';
import { OfferCardsList } from '../../components/offers-list/offers-list';
import { memo } from 'react';

type Props = {
    offers: OfferPreviewType[];
    currentCity: string;
    activeOfferId: string | null;
    handleActiveOfferChange: (id: string | null) => void;
}

function MainPageContent({offers, currentCity, activeOfferId, handleActiveOfferChange}: Props): JSX.Element{
  const filteredOffers = filterOffers(offers, currentCity);
  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
          <PlacesSorting />
          <OfferCardsList onActiveOfferCardChanged={handleActiveOfferChange} offers={filteredOffers}/> :
        </section>
        <div className="cities__right-section">
          <Map
            city={CITIES_MAP[currentCity] ? CITIES_MAP[currentCity] : CITIES_MAP['Amsterdam']}
            offers={filteredOffers}
            activeOfferId={activeOfferId}
            className={'cities__map map'}
          />
        </div>
      </div>
    </div>);
}

const MemoizedMainPageContent = memo(MainPageContent);
export {MemoizedMainPageContent as MainPageContent};
