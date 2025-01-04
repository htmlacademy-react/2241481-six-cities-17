import { useAppSelector } from '../../hooks';
import OfferType from '../../types/offer-type';
import { sortOffers } from '../../utils/utils';
import OfferCard from '../offerCard';

type props = {
  offers: OfferType[];
  onActiveOfferCardChanged: (id: string | null) => void;
}

function OfferCardsList({offers, onActiveOfferCardChanged}: props) : JSX.Element{
  const sortingType = useAppSelector((state) => state.sortingType);
  const sortedOffers = sortOffers(offers, sortingType);
  return(
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map(
        (offerItem) => <OfferCard onActiveOfferCardChanged={onActiveOfferCardChanged} offer={offerItem} key={offerItem.id} />
      )};
    </div>
  );
}

export default OfferCardsList;
