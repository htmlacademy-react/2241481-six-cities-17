import { createAsyncThunk } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { AppDispatch, AppState } from '../types/store';
import { AxiosInstance } from 'axios';
import { setOffers } from './action';
import { ApiRoute } from '../components/consts';


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

export default fetchOffers;
