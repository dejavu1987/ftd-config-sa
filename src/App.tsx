import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom';

import { mdIcoUrl, pages } from './Data';

import GeneralSettingsForm from './components/GeneralSettings';
import WiFiSettingsForm from './components/WifiSettings';
import { ManageIcons } from './components/ManageIcons';
import { Home } from './components/Home';

import './App.css';
import './components/Forms.css';
import { PageItem } from './components/PageItem';
import { PageContent } from './components/PageContent';

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>FTD Configurator</h1>
        </header>

        <section className="grid">
          {pages.map((page, index) => (
            <NavLink
              key={index}
              to={`/page/${index}/${page.name}`}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <PageItem
                key={index}
                name={page.name}
                icon={`${mdIcoUrl}${page.icon}.svg`}
              />
            </NavLink>
          ))}
          <NavLink
            to={`/page/home`}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <PageItem name="Edit Homepage" icon={`${mdIcoUrl}home.svg`} />
          </NavLink>
          <NavLink
            to={`/wifi`}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <PageItem
              className="sm"
              name="Config WiFi"
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
        </section>
        <Routes>
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
