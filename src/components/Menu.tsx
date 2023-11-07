import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from './IconButton';
import { mdIcoUrl } from '../Data';

export const Menu: FC = () => {
  return (
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
          <IconButton name="Icons" icon={`${mdIcoUrl}emoticon-poop.svg`} />
        </NavLink>
      </div>
    </nav>
  );
};
