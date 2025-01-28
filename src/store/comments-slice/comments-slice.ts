import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/consts';
import CommentType from '../../types/comment-type';
import { CommentsStateType } from '../../types/state-type';
import { fetchComments, postComment } from '../action-api';
import { toast } from 'react-toastify';

const initialState: CommentsStateType = {
  comments: [] as CommentType[],
  isCommentsRequestRunning: false,
};

const CommentsSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isCommentsRequestRunning = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isCommentsRequestRunning = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isCommentsRequestRunning = false;
        toast.warn('Unable to fetch comments from server');
      })
      .addCase(postComment.fulfilled, (state) => {
        state.isCommentsRequestRunning = false;
      })
      .addCase(postComment.pending, (state) => {
        state.isCommentsRequestRunning = false;
      })
      .addCase(postComment.rejected, (state) => {
        state.isCommentsRequestRunning = false;
        toast.warn('Unable to post comment.');
      });
  }
});

export default CommentsSlice;
