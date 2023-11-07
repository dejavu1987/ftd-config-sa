import { FC, useEffect, useState } from 'react';
import { IconButton } from './IconButton';
import { mdIcoUrl, pages as defaultPages, Page } from '../Data';
import { useGeneralSettings } from '../hooks/UseGeneralSettings';
import IconDropdown from './IconDropdown';
import { useIcons } from '../hooks/UseIcons';

import { sendConfig } from './sendConfig';

export const Home: FC = () => {
  const { settings } = useGeneralSettings();
  const [pages, setPages] = useState<Page[]>([]);
  const { icons } = useIcons();

  // Load Pages from local storage on component mount
  useEffect(() => {
    const savedPages = localStorage.getItem('ftd.Pages');

    if (savedPages) {
      setPages(JSON.parse(savedPages));
    } else {
      // If no Pages found in local storage, use defaultPages from Data.ts
      setPages(defaultPages);
    }
  }, []);

  // Update local storage when pages change
  useEffect(() => {
    if (pages.length) localStorage.setItem('ftd.pages', JSON.stringify(pages));
  }, [pages]);

  const saveHome = async () => {
    console.log('Save');
    const formData = new FormData();
    formData.append('save', `homescreen`);
    formData.append('homescreenlogo5', `sys/ico/settings.bmp`);
    pages.forEach((item, index) => {
      formData.append(`homescreenlogo${index}`, `${item.icon}.bmp`);
    });
    // @ts-expect-error This their bug
    const body = new URLSearchParams(formData).toString();
    await sendConfig(body);
  };

  const changeIcon = (idx: number, newIcon: string) => {
    const updatedPages = [...pages];
    updatedPages[idx].icon = newIcon;
    setPages(updatedPages);
  };

  return (
    <div className="icon-grid" style={{ backgroundColor: settings.background }}>
      {pages.map((page, index) => (
        <div className="relative">
          <IconButton
            className="icon"
            key={index}
            name={page.name}
            icon={`${mdIcoUrl}${page.icon}.svg`}
            style={{ backgroundColor: settings.menubuttoncolor }}
          />
          <IconDropdown
            options={icons}
            value={page.icon}
            className="absolute left-0 top-0 w-full hidden-selected"
            onIconChange={(newIcon) => {
              changeIcon(index, newIcon);
            }}
          />
        </div>
      ))}
      <IconButton
        className="icon"
        onClick={saveHome}
        name="Save"
        icon={`${mdIcoUrl}floppy.svg`}
      />
    </div>
  );
};
