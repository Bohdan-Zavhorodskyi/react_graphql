import React, { useContext } from 'react';
import { AppContext } from '../../service/FilterSettingsProvider';

import { Divider, List } from 'antd';

const SearchHistory = () => {
  const { state, setState } = useContext<any>(AppContext);
  const filteredHistory = state.searchHistory.filter(
    (item: any) => item !== ''
  );
  const setFilterValue = (value: any) => {
    setState((prev: ProviderProps) => ({ ...prev, searchValue: value }));
  };

  return (
    <div className="search-history">
      <Divider>Search History</Divider>
      <List
        size="small"
        dataSource={filteredHistory}
        renderItem={(item: any) => (
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
