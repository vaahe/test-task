import React from 'react';

import { styles } from '../../../styles/Table';
import { customerType } from '../../../types';

const Table = ({ datas }: any) => {
  console.log(datas);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="border border-black text-start">Name</th>
          <th className="border border-black text-start">Company</th>
          <th className="border border-black text-start">Email</th>
          <th className="border border-black text-start">Admin</th>
          <th className="border border-black text-start">Actions</th>
        </tr>
      </thead>
      <tbody className="border-black border">
        {datas.map(
          (
            { firstName, lastName, company, email, status, actions }: customerType,
            index: number,
          ) => (
            <tr key={`${firstName}.${lastName}.${index}`} className="border border-black">
              <td className="border border-black">
                {firstName} {lastName}
              </td>
              <td className="border border-black">{company}</td>
              <td className="border border-black">{email}</td>
              <td className="border border-black">{`${status}`}</td>
              <td>{Object(actions)}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Table;

// <table {...getTableProps()} className="border border-black w-full">
//   <thead className="border border-black">
//     {headerGroups.map((headerGroup: any, index: number) => (
//       <tr {...headerGroup.getHeaderGroupProps()} key={`${headerGroup + index}`}>
//         {headerGroup.headers.map((column: any, index: number) => (
//           <th {...column.getHeaderProps()} key={`${column + index}`}>
//             {column.render('Header')}
//           </th>
//         ))}
//       </tr>
//     ))}
//   </thead>
//   <tbody {...getTableBodyProps()}>
//     {rows.map((row: any, index: number) => {
//       prepareRow(row);
//       return (
//         <tr {...row.getRowProps()} key={`${row + index}`}>
//           {row.cells.map((cell: any, index: number) => {
//             return (
//               <td {...cell.getCellProps()} key={`${cell + index}`}>
//                 {cell.render('Cell')}
//               </td>
//             );
//           })}
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
