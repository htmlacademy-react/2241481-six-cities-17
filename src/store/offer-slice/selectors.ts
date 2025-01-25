import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectIsOfferDataLoading = (state: AppState) => state[NameSpace.Offer].isOfferDataLoading;
const selectOffer = (state: AppState) => state[NameSpace.Offer].offer;

export {
  selectIsOfferDataLoading,
  selectOffer
};
