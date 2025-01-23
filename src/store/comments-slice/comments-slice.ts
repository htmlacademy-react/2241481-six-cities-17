import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/consts';
import CommentType from '../../types/comment-type';
import { CommentsStateType } from '../../types/state-type';
import { fetchComments } from '../action-api';

const initialState: CommentsStateType = {
  comments: [] as CommentType[],
  isCommentsDataLoading: false
};

const CommentsSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isCommentsDataLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isCommentsDataLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isCommentsDataLoading = false;
      });
  }
});

export default CommentsSlice;
