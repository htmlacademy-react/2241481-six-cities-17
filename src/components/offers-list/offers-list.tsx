import { useAppSelector } from '../../hooks';
import { OfferPreviewType } from '../../types/offer-type';
import { selectSortingType } from '../../types/store/selectors';
import { sortOffers } from '../../utils/utils';
import OfferCard from '../offerCard';

type Props = {
  offers: OfferPreviewType[];
  onActiveOfferCardChanged: (id: string | null) => void;
}

function OfferCardsList({offers, onActiveOfferCardChanged}: Props) : JSX.Element{
  const sortingType = useAppSelector(selectSortingType);
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
