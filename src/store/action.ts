import { createAction } from '@reduxjs/toolkit';
const setIsOffersError = createAction<boolean>('error/setIsOffersError');
const setIsCommentsFetchingError = createAction<boolean>('error/setIsCommentsFetchingError');
const setIsCommentPostingError = createAction<boolean>('error/setIsCommentPostingError');

export {
  setIsOffersError,
  setIsCommentsFetchingError,
  setIsCommentPostingError
};

