import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../components/consts';
import { UserStateType } from '../../types/state-type';
import { checkAuth, login, logout } from '../action-api';
import { dropToken, saveToken } from '../../services/token';

const initialState: UserStateType = {
  currentUser: null,
  authorizationStatus: AuthorizationStatus.Unknown
};

const UserSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.currentUser = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.currentUser = action.payload;
        saveToken(action.payload.token);
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        //TODO: error message.
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        dropToken();
      })
      .addCase(logout.rejected, () => {
        //TODO: error message.
      });
  }
});

export default UserSlice;
