import OfferType from '../../types/offer-type';
import OfferCard from '../offerCard';

type props = {
  offers: OfferType[];
  onActiveOfferCardChanged: (id: string | null) => void;
}

function OfferCardsList({offers, onActiveOfferCardChanged}: props) : JSX.Element{
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map(
        (offerItem) => <OfferCard onActiveOfferCardChanged={onActiveOfferCardChanged} offer={offerItem} key={offerItem.id} />
      )};
    </div>
  );
}

export default OfferCardsList;
