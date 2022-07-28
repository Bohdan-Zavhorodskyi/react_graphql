import React, { useContext } from 'react';
import { Divider, List } from 'antd';

import { AppContext } from 'context/FilterSettingsProvider';

const SearchHistory = () => {
  const { state, setState } = useContext(AppContext);
  const filteredHistory = state.searchHistory.filter((item) => item !== '');
  const setFilterValue = (value: string) => {
    setState((prev: ProviderProps) => ({ ...prev, searchValue: value }));
  };

  return (
    <div className="search-history">
      <Divider>Search History</Divider>
      <List
        size="small"
        dataSource={filteredHistory}
        renderItem={(item) => (
          <List.Item
            className="history-item"
            onClick={() => setFilterValue(item)}
          >
            {item}
          </List.Item>
        )}
      />
      <Divider></Divider>
    </div>
  );
};

export default SearchHistory;
