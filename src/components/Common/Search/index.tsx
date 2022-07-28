import React, { useContext, useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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

  const handleSearchReset = () => {
    setSearch('');
    setState((prev: ProviderProps) => ({
      ...prev,
      searchValue: '',
    }));
  };

  useEffect(() => {
    setSearch(state.searchValue);
  }, [state]);

  return (
    <div className="search-input-wrapper">
      <Input
        placeholder="type here"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onPressEnter={handleSearch}
      />
      {search && (
        <CloseOutlined
          className="search-input-reset"
          onClick={handleSearchReset}
        />
      )}
      <Button
        type="primary"
        htmlType="submit"
        onClick={handleSearch}
        className="search-input-submit"
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
