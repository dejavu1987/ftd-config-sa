import {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  FC,
  useContext,
} from 'react';

type GeneralSettingsType = {
  settings: Record<string, string>;
  updateGeneralSettings: (newSettings: Record<string, string>) => void;
};

const GeneralSettingsContext = createContext<GeneralSettingsType>({
  settings: {},
  updateGeneralSettings: () => {},
});

export const GeneralSettingsProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load general settings from local storage on component mount
    const savedSettings = localStorage.getItem('ftd.generalSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Function to update and save the general settings to local storage
  const updateGeneralSettings = (newSettings: Record<string, string>) => {
    setSettings(newSettings);
    localStorage.setItem('ftd.generalSettings', JSON.stringify(newSettings));
  };

  return (
    <GeneralSettingsContext.Provider
      value={{ settings, updateGeneralSettings }}
    >
      {children}
    </GeneralSettingsContext.Provider>
  );
};
export const useGeneralSettings = () => {
  const context = useContext(GeneralSettingsContext);
  return context;
};
