import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/default.css';

import App from './App.tsx';
import { AppProvider } from './contexts/appContext/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
