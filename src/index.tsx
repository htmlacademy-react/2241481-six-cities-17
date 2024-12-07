import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockOffers from './mockData/mockData';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={mockOffers} />
  </React.StrictMode>
);
