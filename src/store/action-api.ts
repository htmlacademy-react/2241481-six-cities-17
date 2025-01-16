import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferPreviewType, OfferType } from '../types/offer-type';
import { AppDispatch, AppState } from '../types/store';
import { AxiosInstance } from 'axios';
import { requireAuthorization, setComments, setCurrentUser, setIsCommentsError, setIsOffersError, setNearByOffers, setOffer, setOffers } from './action';
import { ApiRoute, AuthorizationStatus } from '../components/consts';
import UserDataType from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import CredentialsType from '../types/credentials-type';
import CommentType from '../types/comment-type';


const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(ApiRoute.Offers);
    dispatch(setOffers(data));
  }
);

const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_args, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<UserDataType>(ApiRoute.Login);
      dispatch(setCurrentUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  }
);

const login = createAsyncThunk<void, CredentialsType, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserDataType>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setCurrentUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_args, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    dispatch(setCurrentUser(null));
  }
);


const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<OfferType>(ApiRoute.Offer.replace(':id', offerId));
      dispatch(setOffer(data));
    }catch {
      dispatch(setIsOffersError(true));
    }
  }
);

const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<CommentType[]>(ApiRoute.Comments.replace(':id', offerId));
      dispatch(setComments(data));
    }catch {
      dispatch(setIsCommentsError(true));
    }
  }
);

const fetchNearByOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchNearByOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(ApiRoute.NearByOffers.replace(':id', offerId));
    dispatch(setNearByOffers(data));
  }
);

export {
  fetchOffers,
  checkAuth,
  login,
  logout,
  fetchOffer,
  fetchComments,
  fetchNearByOffers
};
