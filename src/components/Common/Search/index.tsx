import React, { useContext, useEffect, useState } from 'react';
import { Input, Button } from 'antd';

import { AppContext } from 'context/FilterSettingsProvider';

const Search = () => {
  const { state, setState } = useContext(AppContext);
  const [search, setSearch] = useState(state.searchValue);

  const handleSearch = () => {
    const newArr: string[] = [...state.searchHistory];
    newArr.push(search);

    setState((prev: ProviderProps) => ({
      ...prev,
      searchValue: search,
      searchHistory: newArr,
    }));
  };
  useEffect(() => {
    setSearch(state.searchValue);
  }, [state]);

  return (
    <div className="search">
      <Input
        placeholder="type here"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onPressEnter={handleSearch}
      />
      <Button type="primary" htmlType="submit" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Search;
