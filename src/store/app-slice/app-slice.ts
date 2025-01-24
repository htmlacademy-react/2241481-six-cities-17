import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CITIES_MAP from '../../data/cities';
import { NameSpace, SortItem } from '../../components/consts';
import { AppStateType } from '../../types/state-type';

const initialState: AppStateType = {
  currentCity: CITIES_MAP['Paris'].name,
  sortingType: SortItem.Popular,
  isCommentsFetchingError: false,
  isCommentPostingError: false,
};

const AppSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setSotringType: (state, action: PayloadAction<SortItem>) => {
      state.sortingType = action.payload;
    }
  }
});

export {AppSlice};
export const {changeCity, setSotringType} = AppSlice.actions;
