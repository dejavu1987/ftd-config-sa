import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './css/base.css';
import { GeneralSettingsProvider } from './hooks/UseGeneralSettings.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeneralSettingsProvider>
      <App />
    </GeneralSettingsProvider>
  </React.StrictMode>
);
