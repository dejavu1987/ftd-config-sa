import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Action, actions, pages } from './Data';
import ActionForm from './components/ActionForm';
import { useState } from 'react';

const mdIcoUrl =
  'https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg/';

interface PageItemProps {
  name: string;
  icon: string;
}

function PageItem({ name, icon }: PageItemProps) {
  return (
    <div className="icon">
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}

interface PageContentProps {
  pageName: string;
  actions: Action[];
}

function PageContent({ pageName, actions }: PageContentProps) {
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
              to={`/page/${page.name}`}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <PageItem
                key={index}
                name={page.name}
                icon={`${mdIcoUrl}${page.icon}.svg`}
              />
            </NavLink>
          ))}
        </section>
        <Routes>
          {Object.keys(actions).map((pageName, index) => (
            <Route
              key={index}
              path={`/page/${pageName}`}
              element={
                <PageContent pageName={pageName} actions={actions[pageName]} />
              }
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
