import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectAuthorizationStatus = (state: AppState) => state[NameSpace.User].authorizationStatus;
const selectCurrentUser = (state: AppState) => state[NameSpace.User].currentUser;

export {
  selectAuthorizationStatus,
  selectCurrentUser
};
