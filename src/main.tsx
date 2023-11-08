import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './css/base.css';
import { GeneralSettingsProvider } from './hooks/UseGeneralSettings.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSW } from 'virtual:pwa-register';
// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeneralSettingsProvider>
      <ToastContainer />
      <App />
    </GeneralSettingsProvider>
  </React.StrictMode>
);
