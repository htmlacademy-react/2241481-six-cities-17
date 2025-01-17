import { MAX_REVIEWS_COUNT, SortItem } from '../components/consts';
import OfferReviewsList from '../components/offer-reviews/offer-reviews';
import { OfferPreviewType, OfferType } from '../types/offer-type';
import ReviewType from '../types/reivew-type';

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

const prepareReviews = (reviews: ReviewType[]): ReviewType[] => {
  const result = reviews.slice(0, MAX_REVIEWS_COUNT);
  return result.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export {
  sortOffers,
  filterOffers,
  convertToOfferPreview,
  prepareReviews
};
