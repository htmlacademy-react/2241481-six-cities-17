import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockOffers from './mocks/offers';
import mockFavorites from './mocks/favorites';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={mockOffers} favorites={mockFavorites} />
  </React.StrictMode>
);
