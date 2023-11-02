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

import './App.css';
import { PageItem } from './components/PageItem';
import { PageContent } from './components/PageContent';
import { IconGrid } from './components/IconGrid';

function App() {
  return (
    <>
      <Router>
        <header className="p-5">
          <Link to={'/'}>
            <h1>FTD Configurator</h1>
          </Link>
          <nav>
            <div className="menu flex justify-center gap-2">
              <NavLink
                to={`/`}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <PageItem
                  className="sm"
                  name="Menus"
                  icon={`${mdIcoUrl}home.svg`}
                />
              </NavLink>
              <NavLink
                to={`/wifi`}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <PageItem
                  className="sm"
                  name="WiFi"
                  icon={`${mdIcoUrl}wifi.svg`}
                />
              </NavLink>
              <NavLink
                to={`/settings`}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <PageItem
                  className="sm"
                  name="Settings"
                  icon={`${mdIcoUrl}cog.svg`}
                />
              </NavLink>
              <NavLink
                to={`/icons`}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <PageItem
                  className="sm"
                  name="Manage Icons"
                  icon={`${mdIcoUrl}emoticon-poop.svg`}
                />
              </NavLink>
            </div>
          </nav>
        </header>

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
      </Router>
    </>
  );
}

export default App;
