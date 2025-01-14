import { createAsyncThunk } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { AppDispatch, AppState } from '../types/store';
import { AxiosInstance } from 'axios';
import { requireAuthorization, setCurrentUser, setOffer, setOffers } from './action';
import { ApiRoute, AuthorizationStatus } from '../components/consts';
import userDataType from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import credentialsType from '../types/credentials-type';


const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(ApiRoute.Offers);
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
      const {data} = await api.get<userDataType>(ApiRoute.Login);
      dispatch(setCurrentUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  }
);

const login = createAsyncThunk<void, credentialsType, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<userDataType>(ApiRoute.Login, {email, password});
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
      console.log(`offer with id ${offerId} not found`);
    }
  }
);

export {
  fetchOffers,
  checkAuth,
  login,
  logout,
  fetchOffer
};
