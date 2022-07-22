import React, { useContext } from 'react';
import { Menu, Dropdown, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { AppContext } from 'context/FilterSettingsProvider';
import { TableHeaderProps } from './types';

const TableHeader: React.FC<TableHeaderProps> = ({ keys }) => {
  const { state, setState } = useContext<any>(AppContext);
  const gendersArr = [
    'unfiltered',
    'male',
    'n/a',
    'female',
    'hermaphrodite',
    'none',
  ];

  const filter = (
    <Menu>
      <Menu.Item>
        <Radio.Group
          onChange={(e) =>
            setState((prev: ProviderProps) => ({
              ...prev,
              filterValue: e.target.value,
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
      </Menu.Item>
    </Menu>
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
