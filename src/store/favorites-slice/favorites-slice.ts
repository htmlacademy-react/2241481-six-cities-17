import { createSlice } from '@reduxjs/toolkit';
import { OfferPreviewType } from '../../types/offer-type';
import { FavoritesStateType } from '../../types/state-type';
import { NameSpace } from '../../components/consts';
import { fetchFavorites, toggleFavorite } from '../action-api';
import { toast } from 'react-toastify';

const initialState: FavoritesStateType = {
  favorites: [] as OfferPreviewType[],
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
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.isFavoritesDataLoading = false;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (action.payload.isFavorite){
          state.favorites.push(action.payload);
          toast.success('Offer was added to favorites');
        }else{
          const offerIndex = state.favorites.findIndex((offer) => offer.id === action.payload.id);
          state.favorites.splice(offerIndex, 1);
          toast.success('Offer was removed from favorites');
        }
      })
      .addCase(toggleFavorite.rejected, () => {
        toast.warn('There was an error while toggling favorite.');
      });
  }
});

export default FavoritesSlice;
