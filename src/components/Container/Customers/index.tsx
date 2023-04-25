import React from 'react';

import Table from './Table';
import { styles } from '../../../styles/Customers';
import useCustomersContext from '../../../hooks/useCustomersContext';


export const Customers = () => {
  const context = useCustomersContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Customers</h1>
      <Table data={context?.customers || []} />
    </div>
  );
};
