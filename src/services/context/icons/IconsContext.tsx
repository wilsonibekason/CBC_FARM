import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { MdOutlineKeyboard } from "react-icons/md";

interface IIcon {
  name: string;
  Component: React.FC;
}

interface IIconsContext {
  icons: IIcon[];
}

const IconsContext = React.createContext<IIconsContext>({
  icons: [
    { name: "home", Component: AiFillAccountBook },
    { name: "keyboard", Component: MdOutlineKeyboard },
  ],
});
interface IIconsProviderProps {
  children: React.ReactNode;
}
const IconsProvider: React.FC<IIconsProviderProps> = ({ children }) => {
  const [allIcons, setIcons] = React.useState<IIcon[]>([]);

  return (
    <IconsContext.Provider value={{ icons: allIcons }}>
      {children}{" "}
    </IconsContext.Provider>
  );
};

const useIcons = () => React.useContext(IconsContext);

export { useIcons, IconsProvider };
