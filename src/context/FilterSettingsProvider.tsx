import React, { useState, createContext, Dispatch } from 'react';

export interface AppContextProps {
  state: ProviderProps;
  setState: Dispatch<React.SetStateAction<ProviderProps>>;
}

const appCtxDefaultValue = {
  searchValue: '',
  searchHistory: [''],
  filterValue: '',
};

export const AppContext = createContext<AppContextProps>({
  state: appCtxDefaultValue,
  setState: () => null,
});

export const AppProvider = (props: any) => {
  const [state, setState] = useState<ProviderProps>(appCtxDefaultValue);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {props.children}
    </AppContext.Provider>
  );
};
