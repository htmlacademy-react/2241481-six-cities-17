import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectComments = (state: AppState) => state[NameSpace.Comments].comments;
const selectIsCommentsDataLoading = (state: AppState) => state[NameSpace.Comments].isCommentsDataLoading;

export {
  selectComments,
  selectIsCommentsDataLoading
};
