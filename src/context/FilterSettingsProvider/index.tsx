import React, { useState, createContext } from 'react';

import { AppContextProps, FilterSettingsProviderProps } from './types';

const appCtxDefaultValue = {
  searchValue: '',
  searchHistory: [''],
  filterValue: '',
};

export const AppContext = createContext<AppContextProps>({
  state: appCtxDefaultValue,
  setState: () => null,
});

export const FilterSettingsProvider: React.FC<FilterSettingsProviderProps> = (
  props
) => {
  const [state, setState] = useState<ProviderProps>(appCtxDefaultValue);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {props.children}
    </AppContext.Provider>
  );
};
