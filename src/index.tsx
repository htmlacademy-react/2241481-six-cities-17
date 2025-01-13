import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockFavorites from './mocks/favorites';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App favorites={mockFavorites} />
    </Provider>
  </React.StrictMode>
);
