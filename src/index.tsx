import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockOffers from './mocks/offers';
import mockFavorites from './mocks/favorites';
import { Provider } from 'react-redux';
import store from './store';
import { getOffers } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(getOffers(mockOffers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={mockOffers} favorites={mockFavorites} />
    </Provider>
  </React.StrictMode>
);
