import React from "react";
import { THeader } from "../../../types/zodglobal.types";

interface IAppGlobal {
  header: THeader;
}

const initialState: IAppGlobal = {
  header: { description: "", title: "" },
};

interface IIGlobalContext {
  state: IAppGlobal;
  dispatch: React.Dispatch<GlobalActions>;
}

const GlobalContext = React.createContext<IIGlobalContext>({
  state: { header: { description: "", title: "" } },
  dispatch: () => {},
});

export enum GlobalActionsTypes {
  SET_HEADER = "SET_HEADER",
}

interface GlobalActions {
  type: GlobalActionsTypes;
  header?: {};
}

const GlobalReducer = (
  state: IAppGlobal,
  action: GlobalActions
): typeof initialState => {
  switch (action.type) {
    case "SET_HEADER": {
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

interface IGlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<IGlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    GlobalReducer,
    initialState as IAppGlobal
  );
  const memiosedvalues = React.useMemo(() => [state, dispatch], []);
  return (
    // @ts-ignore
    <GlobalContext.Provider value={memiosedvalues}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = React.useContext(GlobalContext);

export { GlobalProvider, useGlobal };

export type { GlobalActions };
