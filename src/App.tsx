import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  useParams,
} from 'react-router-dom';
import './App.css';
import { Action, actions, mdIcoUrl, pages } from './Data';
import ActionForm from './components/ActionForm';
import { useState } from 'react';
import classNames from 'classnames';

interface PageItemProps {
  name: string;
  icon: string;
  className?: string;
}

function PageItem({ name, icon, className }: PageItemProps) {
  return (
    <div className={classNames('icon', className)}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}

interface PageContentProps {
  actions: Action[];
}

function PageContent({ actions }: PageContentProps) {
  const { pageName } = useParams();

  const [actionIsOpen, setActionIsOpen] = useState<boolean>(false);
  return (
    <section>
      <h2>{pageName}</h2>
      <div className="grid grid--action">
        {actions.map((action, index) => (
          <div
            className="action icon"
            key={index}
            onClick={() => {
              setActionIsOpen(true);
            }}
          >
            <img src={`${mdIcoUrl}${action.icon}.svg`} alt={action.name} />
            <p>{action.name}</p>
          </div>
        ))}
        <div
          className="action icon"
          onClick={() => {
            setActionIsOpen(true);
          }}
        >
          <img src={`${mdIcoUrl}floppy.svg`} alt="Save" />
          <p>Save</p>
        </div>
      </div>

      <ActionForm
        isOpen={actionIsOpen}
        onClose={() => {
          setActionIsOpen(false);
          console.log('closed');
        }}
      />
    </section>
  );
}

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
            to={`/page/wifi`}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <PageItem
              className="sm"
              name="Config WiFi"
              icon={`${mdIcoUrl}wifi.svg`}
            />
          </NavLink>
          <NavLink
            to={`/page/settings`}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <PageItem
              className="sm"
              name="Settings"
              icon={`${mdIcoUrl}cog.svg`}
            />
          </NavLink>
          <NavLink
            to={`/page/icons`}
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
          {actions.map((page, index) => (
            <Route
              key={index}
              path={`/page/${index}/:pageName`}
              element={<PageContent actions={page} />}
            />
          ))}
          <Route
            path={`/page/home`}
            element={
              <section>
                <h2>Home</h2>
                <div className="grid grid--action">
                  {pages.map((page, index) => (
                    <PageItem
                      key={index}
                      name={page.name}
                      icon={`${mdIcoUrl}${page.icon}.svg`}
                    />
                  ))}
                  <PageItem name="Save" icon={`${mdIcoUrl}floppy.svg`} />
                </div>
              </section>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
