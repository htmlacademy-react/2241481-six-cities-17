import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/consts';
import { OfferStateType } from '../../types/state-type';
import { fetchOffer } from '../action-api';

const initialState: OfferStateType = {
  offer: null,
  isOfferDataLoading: false
};

const OfferSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.isOfferDataLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferDataLoading = false;
      });
  }
});

export default OfferSlice;
