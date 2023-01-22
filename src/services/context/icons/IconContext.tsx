import React, { useContext, createContext, useState, useEffect } from "react";
import * as icons from "react-icons/fa";

interface IIcon {
  name: string; 
  component: React.FC;
}

interface IIconsContext {
  icons: IIcon[];
  addIcon: (icon: IIcon) => void;
  removeIcon: (name: string) => void;
}

const IconContext = createContext<IIconsContext>({
  icons: [],
  addIcon: () => {},
  removeIcon: () => {},
});

interface IIconsProviderProps {
  children: React.ReactNode;
}

const IconProvider: React.FC<IIconsProviderProps> = ({ children }) => {
  const [allIcons, setIcons] = useState<IIcon[]>([]);
  const addIcon = (icon: IIcon) => {
    setIcons([...allIcons, icon]);
  };
  const removeIcon = (name: string) => {
    setIcons(allIcons.filter((icon) => icon.name !== name));
  };
  useEffect(() => {
    const loadedIcons: IIcon[] = [];
    Object.keys(allIcons).forEach((icon) => {
      loadedIcons.push({
        name: icon,
        // @ts-ignore
        component: icons[icon],
      });
    });
    setIcons(loadedIcons);
  }, []);
  return (
    <IconContext.Provider value={{ icons: allIcons, addIcon, removeIcon }}>
      {children}
    </IconContext.Provider>
  );
};

const useIcon = () => {
  !IconContext
    ? console.error("Please provide a context provider on a JSX Element ")
    : useContext(IconContext);
};

export { IconProvider, useIcon };
