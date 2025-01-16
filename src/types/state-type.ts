import { AuthorizationStatus, SortItem } from '../components/consts';
import CommentType from './comment-type';
import { OfferPreviewType, OfferType } from './offer-type';
import ReviewType from './reivew-type';
import UserDataType from './user-data';

type StateType = {
  currentCity: string;
  offers: OfferPreviewType[];
  comments: CommentType[];
  sortingType: SortItem;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearByDataLoading: boolean;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: UserDataType | null;
  offer: OfferType | null;
  nearBys: OfferPreviewType[] | null;
  reviews: ReviewType[] | null;
  isOffersError: boolean;
  isCommentsError: boolean;
}

export default StateType;
