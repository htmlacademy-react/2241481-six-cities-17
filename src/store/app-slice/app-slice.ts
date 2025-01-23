import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CITIES_MAP from '../../data/cities';
import { AuthorizationStatus, NameSpace, SortItem } from '../../components/consts';
import { checkAuth, login, logout } from '../action-api';
import { dropToken, saveToken } from '../../services/token';
import { setIsCommentPostingError, setIsCommentsFetchingError } from '../action';
import { AppStateType } from '../../types/state-type';

const initialState: AppStateType = {
  currentCity: CITIES_MAP['Paris'].name,
  sortingType: SortItem.Popular,
  isReviewsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUser: null,
  reviews: null,
  isCommentsFetchingError: false,
  isCommentPostingError: false,
};

const AppSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setSotringType: (state, action: PayloadAction<SortItem>) => {
      state.sortingType = action.payload;
    }
  },
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
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NotAuth;
        state.currentUser = null;
        dropToken();
      })
      .addCase(setIsCommentsFetchingError, (state, action) => {
        state.isCommentsFetchingError = action.payload;
      })
      .addCase(setIsCommentPostingError, (state, action) => {
        state.isCommentPostingError = action.payload;
      });
  }
});

export {AppSlice};
export const {changeCity, setSotringType} = AppSlice.actions;
