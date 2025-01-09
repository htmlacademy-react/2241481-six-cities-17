import { createAsyncThunk } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { AppRoute } from '../components/consts';
import { AppDispatch, AppState } from '../types/store';
import { AxiosInstance } from 'axios';
import { setOffers } from './action';


const fetchOffers = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(AppRoute.Offers);
    dispatch(setOffers(data));
  }
);

export default fetchOffers;
