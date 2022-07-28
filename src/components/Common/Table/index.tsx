import React from 'react';

import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

import { TableProps } from './types';

const Table: React.FC<TableProps> = ({ peoples }) => {
  const keys = ['name', 'eyeColor', 'birthYear', 'skinColor'];

  return (
    <table className="table">
      <TableHeader keys={keys} />
      <TableBody peoples={peoples} />
    </table>
  );
};

export default Table;
