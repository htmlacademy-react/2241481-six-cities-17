import { createAction } from '@reduxjs/toolkit';
import { SortItem } from '../components/consts';

const changeCity = createAction<string>('city/changeCity');
const setSotringType = createAction<SortItem>('offers/setSortingType');
const setIsOffersError = createAction<boolean>('error/setIsOffersError');
const setIsCommentsFetchingError = createAction<boolean>('error/setIsCommentsFetchingError');
const setIsCommentPostingError = createAction<boolean>('error/setIsCommentPostingError');

export {
  changeCity,
  setSotringType,
  setIsOffersError,
  setIsCommentsFetchingError,
  setIsCommentPostingError
};

