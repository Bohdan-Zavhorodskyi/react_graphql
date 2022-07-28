import React, { useContext } from 'react';
import { Menu, Dropdown, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { AppContext } from 'context/FilterSettingsProvider';
import { TableHeaderProps } from './types';

const TableHeader: React.FC<TableHeaderProps> = ({ keys }) => {
  const { state, setState } = useContext(AppContext);
  const gendersArr = [
    'unfiltered',
    'male',
    'n/a',
    'female',
    'hermaphrodite',
    'none',
  ];

  const filter = (
    <div className="filter-wrapper">
      <Radio.Group
        onChange={(e) =>
          setState((prev: ProviderProps) => ({
            ...prev,
            filterValue: e.target.value as string,
          }))
        }
        value={state.filterValue}
      >
        {gendersArr.map((gender, i) => (
          <Radio key={i} value={gender}>
            {gender}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );

  return (
    <thead className="column-name">
      <tr>
        {keys.map((key, i) => (
          <th key={i}> {key}</th>
        ))}
        <th>
          <Dropdown overlay={filter} trigger={['click']}>
            <span>
              gender <DownOutlined />
            </span>
          </Dropdown>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
