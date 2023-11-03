import { FC } from 'react';
import { IconButton } from './IconButton';
import { mdIcoUrl, pages } from '../Data';
import { useGeneralSettings } from '../hooks/UseGeneralSettings';

export const Home: FC = () => {
  const { settings } = useGeneralSettings();
  return (
    <div className="icon-grid" style={{ backgroundColor: settings.background }}>
      {pages.map((page, index) => (
        <IconButton
          className="icon"
          key={index}
          name={page.name}
          icon={`${mdIcoUrl}${page.icon}.svg`}
          style={{ backgroundColor: settings.menubuttoncolor }}
        />
      ))}
      <IconButton className="icon" name="Save" icon={`${mdIcoUrl}floppy.svg`} />
    </div>
  );
};
