import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectComments = (state: AppState) => state[NameSpace.Comments].comments;
const selectIsCommentsRequestRunning = (state: AppState) => state[NameSpace.Comments].isCommentsRequestRunning;

export {
  selectComments,
  selectIsCommentsRequestRunning,
};
