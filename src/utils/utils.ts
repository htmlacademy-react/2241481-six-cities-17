import { SortItem } from '../components/consts';
import { OfferPreviewType, OfferType } from '../types/offer-type';

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

const convertToOfferPreview = (offer: OfferType): OfferPreviewType => ({
  id: offer.id,
  title: offer.title,
  type: offer.type,
  price: offer.price,
  city: offer.city,
  location: offer.location,
  isFavorite: offer.isFavorite,
  isPremium: offer.isPremium,
  rating: offer.rating,
  previewImage: offer.images[0] ?? ''
});

const convertToRating = (strValue: string | null): number =>{
  const result = Number(strValue);
  return isNaN(result) ? 0 : result;
};

export {
  sortOffers,
  filterOffers,
  convertToOfferPreview,
  convertToRating
};
