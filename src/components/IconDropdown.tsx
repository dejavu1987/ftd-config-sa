import { FC, useState } from 'react';
import { mdIcoUrl } from '../Data';

import './IconDropdown.css';

type IconDropdownProps = {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
};

const IconDropdown: FC<IconDropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectIcon = (selectedIcon: string) => {
    onChange(selectedIcon);
    setIsOpen(false);
  };

  return (
    <div className="icon-dropdown">
      <div className="selected-icon" onClick={toggleDropdown}>
        <img
          className="icon-img lg"
          src={`${mdIcoUrl}${value || 'border-none-variant'}.svg`}
          alt={value || 'Select an icon'}
        />
      </div>

      {isOpen && (
        <div className="popup-background">
          <div className="popup-content">
            <h2>Select an icon</h2>

            <div className="icon-list">
              {options.map((icon, index) => (
                <div
                  key={index}
                  className="icon-option"
                  onClick={() => selectIcon(icon)}
                >
                  <img
                    className="icon-img"
                    src={`${mdIcoUrl}${icon}.svg`}
                    alt={icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconDropdown;
