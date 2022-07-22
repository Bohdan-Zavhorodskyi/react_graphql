import React from 'react';

import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

interface TableProps {
  peoples: People[];
}

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
