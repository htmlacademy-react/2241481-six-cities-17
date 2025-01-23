import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectSortingType = (state: AppState) => state[NameSpace.App].sortingType;
const selectCurrentCity = (state: AppState): string => state[NameSpace.App].currentCity;

export {
  selectSortingType,
  selectCurrentCity,
};
