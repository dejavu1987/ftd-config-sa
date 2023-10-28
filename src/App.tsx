import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import { Action, actions, pages } from './Data';

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
  return (
    <section>
      <h2>{pageName}</h2>
      <div className="grid grid--action">
        {actions.map((action, index) => (
          <div className="action icon" key={index}>
            <img src={`${mdIcoUrl}${action.icon}.svg`} alt={action.name} />
            <p>{action.name}</p>
          </div>
        ))}
      </div>
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
            <Link key={index} to={`/page/${page.name}`}>
              <PageItem
                key={index}
                name={page.name}
                icon={`${mdIcoUrl}${page.icon}.svg`}
              />
            </Link>
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
