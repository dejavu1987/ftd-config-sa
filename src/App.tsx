import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import GeneralSettingsForm from './components/GeneralSettings';
import WiFiSettingsForm from './components/WifiSettings';
import { ManageIcons } from './components/ManageIcons';
import { Home } from './components/Home';
import { PageContent } from './components/PageContent';
import { IconGrid } from './components/IconGrid';
import { Menu } from './components/Menu';
import Logo from './assets/icons/icon.svg';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function App() {
  useEffect(() => {
    if (window.location.protocol === 'https:')
      toast.warning(
        <>
          <strong>Warning:</strong> You are on secure <strong>(https)</strong>{' '}
          page, you will need to open this page at{' '}
          <a href="http://ftd.anilmaharjan.com.np">
            http://ftd.anilmaharjan.com.np
          </a>
          <hr />
          FreeTouchDeck Webserver does not support https, to be able to save
          your config to FreeTouchDeck, you have to use the config page using
          http://. Click on the link above. On <strong>
            Google Chrome
          </strong>{' '}
          and similar browsers you may have to manually enter the url.
          <img
            src="https://res.cloudinary.com/anilmaharjan-com-np/image/upload/v1699443947/Blog/https_to_http.gif"
            alt="chrome help"
          />
        </>,
        {
          autoClose: false,
          position: 'top-center',
        }
      );
  }, []);
  return (
    <>
      <Router>
        <header className="p-5 pb-0 mb-6 bg-primary-700">
          <Link to={'/'}>
            <h1 className="text-white text-lg sm:text-xl md:text-2xl max-w-screen-sm mx-auto flex justify-center gap-4 items-center">
              <img src={Logo} width={32} height={32} className="invert" />
              FTD Configurator
            </h1>
          </Link>
          <Menu />
        </header>
        <main className="max-w-screen-sm m-auto lg:max-w-screen-lg">
          <Routes>
            <Route
              path={`/`}
              element={
                <>
                  <IconGrid />
                  <PageContent />
                </>
              }
            />
            <Route
              path={`/page/:pageIndex/:pageName`}
              element={<PageContent />}
            />
            <Route
              path={`/page/home`}
              element={
                <section>
                  <h2>Home</h2>
                  <Home />
                </section>
              }
            />
            <Route
              path={`/settings`}
              element={
                <section>
                  <h2>General Settings</h2>
                  <GeneralSettingsForm />
                </section>
              }
            />
            <Route
              path={`/wifi`}
              element={
                <section>
                  <h2>Wifi Settings</h2>
                  <WiFiSettingsForm />
                </section>
              }
            />
            <Route
              path={`/icons`}
              element={
                <section>
                  <h2>Manage Icons</h2>
                  <ManageIcons />
                </section>
              }
            />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
