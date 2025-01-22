import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/default.css';

import App from './App.tsx';
import { AppProvider } from './contexts/appContext/AppContext.tsx';
import { ModalProvider } from './contexts/modalContext/ModalContext.tsx';
import { FiltersProvider } from './contexts/filtersContext/FiltersContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <FiltersProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </FiltersProvider>
    </ModalProvider>
  </StrictMode>
);
