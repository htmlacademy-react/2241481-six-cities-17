import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectFavorites = (state: AppState) => state[NameSpace.Favorites].favorites;
const selectIsFavoritesDataLoading = (state: AppState) => state[NameSpace.Favorites].isFavoritesDataLoading;
const getFavoriteStatusById = (state: AppState, id: string) => state[NameSpace.Favorites].favorites.findIndex((offer) => offer.id === id) !== -1;

export {
  selectFavorites,
  selectIsFavoritesDataLoading,
  getFavoriteStatusById
};
