import { FC, useState } from 'react';
import { mdIcoUrl } from '../Data';
import classNames from 'classnames';

type IconDropdownProps = {
  options: string[];
  value?: string;
  onIconChange: (value: string) => void;
};

const IconDropdown: FC<JSX.IntrinsicElements['div'] & IconDropdownProps> = ({
  options,
  value,
  onIconChange,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectIcon = (selectedIcon: string) => {
    onIconChange(selectedIcon);
    setIsOpen(false);
  };

  return (
    <div
      className={classNames(
        'icon-dropdown text-center flex justify-center',
        className
      )}
      {...rest}
    >
      <div className="selected-icon" onClick={toggleDropdown}>
        <img
          src={`${mdIcoUrl}${value || 'border-none-variant'}.svg`}
          alt={value || 'Select an icon'}
        />
      </div>

      {isOpen && (
        <div className="popup-background">
          <div className="popup-content">
            <span
              className="close"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ×
            </span>
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
