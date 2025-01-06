import { SortItem } from '../components/consts';
import OfferType from '../types/offer-type';

const sortOffers = (offers: OfferType[], sortingType: SortItem): OfferType[] => {
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

const filterOffers = (offers: OfferType[], cityName: string): OfferType[] =>
  offers.filter((offer) => (offer.city.name === cityName));

export {sortOffers, filterOffers};
