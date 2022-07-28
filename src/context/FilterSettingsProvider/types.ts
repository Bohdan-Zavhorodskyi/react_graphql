import { Dispatch } from 'react';

export interface AppContextProps {
  state: ProviderProps;
  setState: Dispatch<React.SetStateAction<ProviderProps>>;
}

export interface FilterSettingsProviderProps {
  children: JSX.Element;
}
