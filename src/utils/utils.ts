import { MAX_REVIEWS_COUNT, SortItem } from '../components/consts';
import CommentType from '../types/comment-type';
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


const prepareReviews = (reviews: CommentType[]): CommentType[] => {
  const sorted = reviews.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sorted.slice(0, MAX_REVIEWS_COUNT);
};

const groupByCityName = (offers: OfferPreviewType[]): Record<string, OfferPreviewType[]> =>
  offers.reduce((grouped: Record<string, OfferPreviewType[]>, offer) => {
    const cityName = offer.city.name;
    if (!grouped[cityName]) {
      grouped[cityName] = [];
    }
    grouped[cityName].push(offer);
    return grouped;
  }, {});

const getRatingStarPercent = (rating: number): string =>
  `${Math.round(rating) * 20}%`;


export {
  sortOffers,
  filterOffers,
  convertToOfferPreview,
  prepareReviews,
  groupByCityName,
  getRatingStarPercent
};
