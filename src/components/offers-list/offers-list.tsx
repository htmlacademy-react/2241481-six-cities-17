import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { OfferPreviewType } from '../../types/offer-type';
import { sortOffers } from '../../utils/utils';
import { OfferCard } from '../offerCard';
import { selectSortingType } from '../../store/app-slice/selectors';

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


const MemoizedOfferCardsList = memo(OfferCardsList);
export { MemoizedOfferCardsList as OfferCardsList };
