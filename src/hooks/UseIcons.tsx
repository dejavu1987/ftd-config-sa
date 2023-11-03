import { useEffect, useState } from 'react';

import { icons as defaultIcons } from '../Data';

export const useIcons = () => {
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

  return { icons, setIcons };
};
