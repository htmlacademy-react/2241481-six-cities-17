import { createAsyncThunk } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { AppDispatch, AppState } from '../types/store';
import { AxiosInstance } from 'axios';
import { requireAuthorization, setOffers } from './action';
import { ApiRoute, AuthorizationStatus } from '../components/consts';


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
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
  }
);

export {
  fetchOffers,
  checkAuth
};
