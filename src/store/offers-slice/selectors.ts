import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectOffers = (state: AppState) => state[NameSpace.Offers].offers;
const selectIsOffersDataLoading = (state: AppState) => state[NameSpace.Offers].isOffersDataLoading;

export {
  selectOffers,
  selectIsOffersDataLoading
};
