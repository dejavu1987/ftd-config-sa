import { useEffect, useState } from 'react';
import { useGeneralSettings } from '../hooks/UseGeneralSettings';
import { mdIcoUrl, pages as defaultPages, Page } from '../Data';
import { NavLink } from 'react-router-dom';
import { PageItem } from './PageItem';

export const IconGrid = () => {
  const { settings } = useGeneralSettings();
  const [pages, setPages] = useState<Page[]>(defaultPages);

  // Load icons from local storage on component mount
  useEffect(() => {
    const savedPages = localStorage.getItem('ftd.pages');

    if (savedPages) {
      setPages(JSON.parse(savedPages));
    } else {
      // If no icons found in local storage, use defaultIcons from Data.ts
      setPages(defaultPages);
    }
  }, []);
  return (
    <>
      <h2>Home</h2>
      <section
        className="icon-grid"
        style={{ backgroundColor: settings.background }}
      >
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
              style={{ backgroundColor: settings.menubuttoncolor }}
            />
          </NavLink>
        ))}
        <NavLink
          to={`/page/home`}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <PageItem name="Edit Homepage" icon={`${mdIcoUrl}home.svg`} />
        </NavLink>
      </section>
    </>
  );
};
