import { AuthorizationStatus, SortItem } from '../components/consts';
import OfferType from './offer-type';
import userDataType from './user-data';

type stateType = {
  currentCity: string;
  offers: OfferType[];
  sortingType: SortItem;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: userDataType | null;
}

export default stateType;
