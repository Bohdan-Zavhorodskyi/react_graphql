import React from 'react';

interface TableBodyProps {
  peoples: People[];
}

const TableBody: React.FC<TableBodyProps> = ({ peoples }) => {
  return (
    <tbody>
      {peoples.map((people, i) => (
        <tr key={i}>
          <td> {people.name}</td>
          <td> {people.eyeColor}</td>
          <td> {people.birthYear}</td>
          <td> {people.skinColor}</td>
          <td> {people.gender}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
