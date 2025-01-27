import Map from '../../components/map/map';
import { PlacesSorting } from '../../components/sorting/sorting';
import CITIES_MAP from '../../data/cities';
import { OfferPreviewType } from '../../types/offer-type';
import { OfferCardsList } from '../../components/offers-list/offers-list';
import { memo, useCallback, useState } from 'react';

type Props = {
    offers: OfferPreviewType[];
    currentCity: string;
}

function MainPageContent({offers, currentCity}: Props): JSX.Element{
  const [activeOfferId, setActiveOffer] = useState<string | null>(null);
  const handleActiveOfferChange = useCallback((id: string | null) => {
    setActiveOffer(id);
  }, []);

  return(
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity}</b>
          <PlacesSorting />
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

const MemoizedMainPageContent = memo(MainPageContent);
export {MemoizedMainPageContent as MainPageContent};
