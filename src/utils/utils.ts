import { SortItem } from '../components/consts';
import { OfferPreviewType } from '../types/offer-type';

const sortOffers = (offers: OfferPreviewType[], sortingType: SortItem): OfferPreviewType[] => {
  switch (sortingType){
    case SortItem.Popular:
      return [...offers];

    case SortItem.PriceHigh:
      return [...offers].sort((left, right) => right.price - left.price);

    case SortItem.PriceLow:
      return [...offers].sort((left, right) => left.price - right.price);

    case SortItem.Rating:
      return [...offers].sort((left, right) => right.rating - left.rating);
  }
};

const filterOffers = (offers: OfferPreviewType[], cityName: string): OfferPreviewType[] =>
  offers.filter((offer) => (offer.city.name === cityName));

export {sortOffers, filterOffers};
