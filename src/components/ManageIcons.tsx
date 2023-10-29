import { FC, useState, useEffect } from 'react';
import AddIconForm from './AddIcon';
import { icons as defaultIcons, mdIcoUrl } from '../Data';

export const ManageIcons: FC = () => {
  const [icons, setIcons] = useState<string[]>([]);

  // Load icons from local storage on component mount
  useEffect(() => {
    const savedIcons = localStorage.getItem('ftd.icons');

    if (savedIcons) {
      setIcons(JSON.parse(savedIcons));
    } else {
      // If no icons found in local storage, use defaultIcons from Data.ts
      setIcons(defaultIcons);
    }
  }, []);

  // Update local storage when icons change
  useEffect(() => {
    if (icons.length) localStorage.setItem('ftd.icons', JSON.stringify(icons));
  }, [icons]);

  const handleIconRemove = (index: number) => {
    const updatedIcons = [...icons];
    updatedIcons.splice(index, 1);
    setIcons(updatedIcons);
  };

  return (
    <div className="settings-form">
      <AddIconForm
        addIcon={(icon) => {
          setIcons([...icons, icon]);
        }}
      />
      <div className="icon-list">
        {icons.map((icon, index) => (
          <div key={index} className="icon-option" onClick={() => {}}>
            <img
              className="icon-img"
              src={`${mdIcoUrl}${icon}.svg`}
              alt={icon}
            />
            <button
              className="remove-icon"
              onClick={() => {
                console.log('Remove icon');
                console.log(index);
                console.log(icon);

                handleIconRemove(index);
              }}
            >
              <img
                className="icon-img sm"
                src={`${mdIcoUrl}delete-circle-outline.svg`} // Replace with your bin icon image
                alt={`Remove ${icon}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
