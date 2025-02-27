import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/services';
import rootReducer from './reducer';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export default store;
export {api};
