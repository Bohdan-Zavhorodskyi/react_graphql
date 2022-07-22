declare interface People {
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  skinColor: string;
  id: string;
  created: string;
}

declare interface ProviderProps {
  searchHistory: string[];
  searchValue: string;
  filterValue: string;
}

declare interface ContextProps {
  state: { value: string; searchHistory: string[] };
  setState: (state: ProviderProps) => {};
}
