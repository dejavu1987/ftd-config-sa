import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

interface Page {
  name: string;
  icon: string;
}

interface Action {
  name: string;
  icon: string;
}
const pages: Page[] = [
  { name: 'Media', icon: '/icons/wrap.png' },
  { name: 'OBS', icon: '/icons/wrench-check-outline.png' },
  { name: 'Youtube', icon: '/icons/wrench-check.png' },
  { name: 'Premiere', icon: '/icons/wrench-clock-outline.png' },
  { name: 'Chrome', icon: '/icons/wrench-clock.png' },
  { name: 'Photoshop', icon: '/icons/wrench-cog-outline.png' },
  // Add more pages with their corresponding icons
];

const actions: { [pageName: string]: Action[] } = {
  Media: [
    { name: 'Volume Up', icon: '/icons/wrench.png' },
    { name: 'Volume Down', icon: '/icons/xamarin.png' },
    { name: 'Next', icon: '/icons/xml.png' },
    { name: 'Play/Pause', icon: '/icons/xmpp.png' },
    { name: 'Previous', icon: '/icons/yahoo.png' },
    { name: 'Mute', icon: '/icons/yeast.png' },
  ],
  OBS: [
    { name: 'Start Streaming', icon: '/icons/yin-yang.png' },
    { name: 'Stop Streaming', icon: '/icons/yoga.png' },
    { name: 'Start Recording', icon: '/icons/youtube-gaming.png' },
    { name: 'Stop Recording', icon: '/icons/youtube-studio.png' },
    // Add more OBS actions here
  ],
  Youtube: [
    { name: 'Like', icon: '/icons/youtube-subscription.png' },
    { name: 'Dislike', icon: '/icons/youtube-tv.png' },
    { name: 'Subscribe', icon: '/icons/youtube.png' },
    { name: 'Share', icon: '/icons/yurt.png' },
    // Add more Youtube actions here
  ],
  Premiere: [
    { name: 'Cut', icon: '/icons/z-wave.png' },
    { name: 'Copy', icon: '/icons/zend.png' },
    { name: 'Paste', icon: '/icons/zigbee.png' },
    { name: 'Undo', icon: '/icons/zip-box-outline.png' },
    // Add more Premiere actions here
  ],
  Chrome: [
    { name: 'Open New Tab', icon: '/icons/zip-box.png' },
    { name: 'Close Tab', icon: '/icons/zip-disk.png' },
    { name: 'Refresh Page', icon: '/icons/zodiac-aquarius.png' },
    { name: 'Bookmark Page', icon: '/icons/zodiac-aries.png' },
    // Add more Chrome actions here
  ],
  Photoshop: [
    { name: 'Create New Layer', icon: '/icons/zodiac-cancer.png' },
    { name: 'Select Area', icon: '/icons/zodiac-capricorn.png' },
    { name: 'Apply Filter', icon: '/icons/zodiac-gemini.png' },
    { name: 'Undo', icon: '/icons/zodiac-leo.png' },
    // Add more Photoshop actions here
  ],
};

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
            <img src={action.icon} alt={action.name} />
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
              <PageItem key={index} name={page.name} icon={page.icon} />
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
