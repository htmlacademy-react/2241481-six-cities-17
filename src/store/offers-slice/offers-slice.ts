import { createSlice } from '@reduxjs/toolkit';
import { OfferPreviewType } from '../../types/offer-type';
import { OffersStateType } from '../../types/state-type';
import { NameSpace } from '../../components/consts';
import { fetchOffers } from '../action-api';
import { toast } from 'react-toastify';

const initialState: OffersStateType = {
  offers: [] as OfferPreviewType[],
  isOffersDataLoading: false,
};

const OffersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        toast.warn('Unable to fetch offers data from server');
      });
  }
});

export default OffersSlice;

