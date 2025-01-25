import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferPreviewType, OfferType } from '../types/offer-type';
import { AppDispatch, AppState } from '../types/store';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../components/consts';
import UserDataType from '../types/user-data';
import CredentialsType from '../types/credentials-type';
import CommentType, { PostCommentType } from '../types/comment-type';

const fetchOffers = createAsyncThunk<OfferPreviewType[], undefined, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_args, {extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(ApiRoute.Offers);
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<OfferPreviewType[], undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'favorites/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(ApiRoute.Favorites);
    return data;
  },
);

const checkAuth = createAsyncThunk<UserDataType, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_args, { extra: api}) => {
    const {data} = await api.get<UserDataType>(ApiRoute.Login);
    return data;
  }
);

const login = createAsyncThunk<UserDataType, CredentialsType, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, { extra: api}) => {
    const {data} = await api.post<UserDataType>(ApiRoute.Login, {email, password});
    return data;
  }
);

const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_args, { extra: api}) => {
    await api.delete(ApiRoute.Logout);
  }
);

const fetchOffer = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<OfferType>(ApiRoute.Offer.replace(':id', offerId));
    return data;
  }
);

const fetchComments = createAsyncThunk<CommentType[], string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentType[]>(ApiRoute.Comments.replace(':id', offerId));
    return data;
  }
);

const fetchNearByOffers = createAsyncThunk<OfferPreviewType[], string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offer/fetchNearByOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(ApiRoute.NearByOffers.replace(':id', offerId));
    return data;
  }
);

const postComment = createAsyncThunk<
  PostCommentType, // Тип данных, которые возвращает thunk
  { offerId: string; payload: PostCommentType }, // Тип аргументов, передаваемых в thunk
  {
    dispatch: AppDispatch; // Тип для функции dispatch
    state: AppState; // Тип состояния Redux
    extra: AxiosInstance; // Дополнительный аргумент (AxiosInstance)
  }
>(
  'offer/postComment', // Имя действия (action type)
  async ({ offerId, payload }, { extra: api }) => {
    const response = await api.post<PostCommentType>(
      ApiRoute.Comments.replace(':id', offerId), // URL-адрес запроса
      payload // Данные для отправки в POST-запросе
    );
    return response?.data; // Результат выполнения запроса
  }
);

export {
  fetchOffers,
  checkAuth,
  login,
  logout,
  fetchOffer,
  fetchComments,
  fetchNearByOffers,
  postComment
};
