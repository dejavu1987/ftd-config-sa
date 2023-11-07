import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './css/base.css';
import { GeneralSettingsProvider } from './hooks/UseGeneralSettings.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeneralSettingsProvider>
      <ToastContainer />
      <App />
    </GeneralSettingsProvider>
  </React.StrictMode>
);
