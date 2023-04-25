import React from 'react';

import { styles } from '../../../styles/Table';
import { customerType } from '../../../types';
import { Buttons } from '../AddCustomer/components/buttons';

import { toSvg } from 'jdenticon';

const Table = ({ data }: any) => {
  const generateIcon = (email: string) => {
    const svgString = toSvg(email, 100);

    const url = encodeURIComponent(svgString);
    const dataUri = `url("data:image/svg+xml,${url}")`;
    return dataUri;
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.column}>
          <th className={styles.th.wide}>Name</th>
          <th className={styles.th.wide}>Company</th>
          <th className={styles.th.wide}>Email</th>
          <th className={styles.th.narrow}>Admin</th>
          <th className={styles.th.narrow}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ firstName, lastName, company, email, status, id }: customerType, index: number) => (
            <tr key={`${firstName}.${lastName}.${index}`} className={styles.data.base}>
              <td className={styles.data.td}>
                <div
                  className={styles.data.icon}
                  style={{
                    backgroundImage: generateIcon(email),
                    backgroundSize: 'cover',
                  }}
                />
                {firstName} {lastName}
              </td>
              <td className={styles.company}>{company}</td>
              <td className={styles.email}>{email}</td>
              <td>
                <div className={status === 'admin' ? styles.admin : styles.user} />
              </td>
              <td>
                <Buttons id={id} />
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Table;
