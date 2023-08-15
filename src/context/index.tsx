import React, { ReactNode, createContext, useContext, useState } from "react";

interface StateContextProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false);

  const contextValue: StateContextProps = {
    state,
    setState,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    );
  }
  return context;
};
