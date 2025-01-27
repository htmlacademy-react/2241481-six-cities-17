import { AuthorizationStatus, SortItem } from '../components/consts';
import CommentType from './comment-type';
import { OfferPreviewType, OfferType } from './offer-type';
import UserDataType from './user-data';

type AppStateType = {
  currentCity: string;
  sortingType: SortItem;
  isCommentsFetchingError: boolean;
  isCommentPostingError: boolean;
}

type OffersStateType = {
  offers: OfferPreviewType[];
  isOffersDataLoading: boolean;
}

type FavoritesStateType = {
  favorites: OfferPreviewType[];
  isFavoritesDataLoading: boolean;
}

type OfferStateType = {
  offer: OfferType | null;
  isOfferDataLoading: boolean;
}

type CommentsStateType = {
  comments: CommentType[] | null;
  isCommentsRequestRunning: boolean;
}

type NearByStateType = {
  nearBys: OfferPreviewType[] | null;
  isNearByDataLoading: boolean;
}

type UserStateType = {
  currentUser: UserDataType | null;
  authorizationStatus: AuthorizationStatus;
  isRequestPending: boolean;
}

export type {
  AppStateType,
  OfferStateType,
  FavoritesStateType,
  OffersStateType,
  CommentsStateType,
  NearByStateType,
  UserStateType
};

