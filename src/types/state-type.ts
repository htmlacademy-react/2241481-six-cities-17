import { AuthorizationStatus, SortItem } from '../components/consts';
import { OfferPreviewType, OfferType } from './offer-type';
import reviewType from './reivew-type';
import userDataType from './user-data';

type stateType = {
  currentCity: string;
  offers: OfferPreviewType[];
  sortingType: SortItem;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearByDataLoading: boolean;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: userDataType | null;
  offer: OfferType | null;
  nearBys: OfferType[] | null;
  reviews: reviewType[] | null;
}

export default stateType;
