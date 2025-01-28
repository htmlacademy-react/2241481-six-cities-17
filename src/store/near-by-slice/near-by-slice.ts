import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/consts';
import { NearByStateType } from '../../types/state-type';
import { fetchNearByOffers } from '../action-api';
import { toast } from 'react-toastify';

const initialState: NearByStateType = {
  nearBys: null,
  isNearByDataLoading: false
};

const NearBySlice = createSlice({
  name: NameSpace.NearBy,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchNearByOffers.pending, (state) => {
        state.isNearByDataLoading = true;
      })
      .addCase(fetchNearByOffers.fulfilled, (state, action) => {
        state.isNearByDataLoading = false;
        state.nearBys = action.payload;
      })
      .addCase(fetchNearByOffers.rejected, (state) => {
        state.isNearByDataLoading = false;
        toast.warn('Unable to fetch near-by offers data from server');
      });
  }
});

export default NearBySlice;
