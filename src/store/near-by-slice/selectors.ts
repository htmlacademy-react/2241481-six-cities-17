import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectIsNearByDataLoading = (state: AppState) => state[NameSpace.NearBy].isNearByDataLoading;
const selectNearBys = (state: AppState) => state[NameSpace.NearBy].nearBys;

export {
  selectIsNearByDataLoading,
  selectNearBys
};
