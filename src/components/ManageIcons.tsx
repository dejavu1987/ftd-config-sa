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

  const handleDownloadIcons = () => {
    // Send a POST request to the API to download icons as a ZIP file
    const iconNames = icons; // Assuming icons is an array of icon names
    fetch(
      'https://436teoijgb.execute-api.eu-central-1.amazonaws.com/get-icons',
      {
        method: 'POST',
        body: JSON.stringify({ iconNames }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the ZIP file
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'icons.zip';

        // Simulate a click to trigger the download
        a.click();

        // Release the temporary URL
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading icons:', error);
      });
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
      <button
        className="download-zip button button--primary"
        onClick={handleDownloadIcons}
      >
        Download icons as ZIP
      </button>
    </div>
  );
};
