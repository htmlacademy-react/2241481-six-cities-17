import { createSlice } from '@reduxjs/toolkit';
import { OfferPreviewType } from '../../types/offer-type';
import { FavoritesStateType } from '../../types/state-type';
import { NameSpace } from '../../components/consts';
import { fetchFavorites } from '../action-api';

const initialState: FavoritesStateType = {
  offers: [] as OfferPreviewType[],
  isFavoritesDataLoading: false
};

const FavoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isFavoritesDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isFavoritesDataLoading = false;
      });
  }
});

export default FavoritesSlice;
