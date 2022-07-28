import React from 'react';

import { TableBodyProps } from './types';

const TableBody: React.FC<TableBodyProps> = ({ peoples }) => {
  return (
    <tbody>
      {peoples.map((people, i) => (
        <tr key={i}>
          <td className="table-cell"> {people.name}</td>
          <td className="table-cell"> {people.eyeColor}</td>
          <td className="table-cell"> {people.birthYear}</td>
          <td className="table-cell"> {people.skinColor}</td>
          <td className="table-cell"> {people.gender}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
