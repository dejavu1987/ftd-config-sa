import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
} from 'react-router-dom';

import { mdIcoUrl } from './Data';

import GeneralSettingsForm from './components/GeneralSettings';
import WiFiSettingsForm from './components/WifiSettings';
import { ManageIcons } from './components/ManageIcons';
import { Home } from './components/Home';
import { IconButton } from './components/IconButton';
import { PageContent } from './components/PageContent';
import { IconGrid } from './components/IconGrid';

function App() {
  return (
    <>
      <Router>
        <header className="p-5 pb-0 mb-6 bg-primary-700">
          <Link to={'/'}>
            <h1 className="text-white text-lg sm:text-xl md:text-2xl">
              FTD Configurator
            </h1>
          </Link>
          <nav>
            <div className="tabs flex justify-center gap-1 flex-wrap md:flex-nowrap sm:gap-2">
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  [isActive ? 'tab--active' : 'inactive', 'tab'].join(' ')
                }
              >
                <IconButton name="Menus" icon={`${mdIcoUrl}home.svg`} />
              </NavLink>
              <NavLink
                to={`/wifi`}
                className={({ isActive }) =>
                  [isActive ? 'tab--active' : 'inactive', 'tab'].join(' ')
                }
              >
                <IconButton name="WiFi" icon={`${mdIcoUrl}wifi.svg`} />
              </NavLink>
              <NavLink
                to={`/settings`}
                className={({ isActive }) =>
                  [isActive ? 'tab--active' : 'inactive', 'tab'].join(' ')
                }
              >
                <IconButton name="Settings" icon={`${mdIcoUrl}cog.svg`} />
              </NavLink>
              <NavLink
                to={`/icons`}
                className={({ isActive }) =>
                  [isActive ? 'tab--active' : 'inactive', 'tab'].join(' ')
                }
              >
                <IconButton
                  name="Icons"
                  icon={`${mdIcoUrl}emoticon-poop.svg`}
                />
              </NavLink>
            </div>
          </nav>
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
