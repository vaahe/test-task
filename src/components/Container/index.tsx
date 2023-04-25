import React from 'react';

import { AddCustomer } from './AddCustomer';
import { Customers } from './Customers';
import { CustomerProvider } from '../../context/CustomersContext';

export const Container = () => {
  return (
    <div className="flex h-full">
      <CustomerProvider>
        <AddCustomer />
        <Customers />
      </CustomerProvider>
    </div>
  );
};
