import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';
import { Spin, Space } from 'antd';

import { AppContext } from 'context/FilterSettingsProvider';
import Search from 'components/Search';
import Table from 'components/Table';
import { GET_ALL_PEOPLE } from 'graphql/queries';
import SearchHistory from 'components/SearchHistory';

const ItemList = () => {
  const { state } = useContext(AppContext);
  const { data, loading } = useQuery(GET_ALL_PEOPLE, {
    fetchPolicy: 'cache-and-network',
  });

  const peoples: People[] = get(data, 'allPeople.people', [])
    .filter((item: People) => {
      if (state.filterValue === 'unfiltered') return true;
      return state.filterValue ? item.gender === state.filterValue : true;
    })
    .filter((item: People) => {
      const regexp = new RegExp(state.searchValue, 'ig');
      if (!state.searchValue) return true;
      return state.searchValue ? item.name.match(regexp) : true;
    });

  if (loading)
    return (
      <Space>
        <Spin />
      </Space>
    );

  return (
    <div className="App">
      <Search />
      <div className="main">
        <SearchHistory />
        <Table peoples={peoples} />
      </div>
    </div>
  );
};

export default ItemList;
