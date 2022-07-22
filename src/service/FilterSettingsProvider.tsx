import React, { useState, createContext } from 'react';

const appCtxDefaultValue = {
  state: { searchValue: '', searchHistory: [''], filterValue: '' },
  setState: (state: ProviderProps) => {},
};

export const AppContext = createContext(appCtxDefaultValue);

export const AppProvider = (props: any) => {
  const [state, setState] = useState(appCtxDefaultValue.state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {props.children}
    </AppContext.Provider>
  );
};
