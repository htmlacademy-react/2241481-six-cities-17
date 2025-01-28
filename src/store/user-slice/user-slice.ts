import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../components/consts';
import { UserStateType } from '../../types/state-type';
import { checkAuth, login, logout } from '../action-api';
import { dropToken, saveToken } from '../../services/token';
import { toast } from 'react-toastify';

const initialState: UserStateType = {
  currentUser: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isRequestPending: false
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
        state.isRequestPending = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.isRequestPending = false;
        toast.warn('Unable to check authentication status');
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.currentUser = action.payload;
        state.isRequestPending = false;
        saveToken(action.payload.token);
      })
      .addCase(login.pending, (state) => {
        state.isRequestPending = true;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        state.isRequestPending = false;
        toast.error('There was a login error');
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        state.isRequestPending = false;
        dropToken();
      })
      .addCase(logout.rejected, (state) => {
        state.isRequestPending = false;
        toast.error('There was a logout error');
      })
      .addCase(logout.pending, (state) => {
        state.isRequestPending = true;
      });
  }
});

export default UserSlice;
