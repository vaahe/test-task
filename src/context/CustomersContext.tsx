import * as React from 'react';
import { ICustomerProps, ICustomerValues, customerType } from '../types';


export const CustomersContext = React.createContext<ICustomerValues | null>(null);

export const CustomerProvider: React.FC<ICustomerProps> = ({ children }) => {
  const [customerOnEdit, setCustomerOnEdit] = React.useState<customerType | undefined>();
  const [customers, setCustomers] = React.useState<Array<customerType | undefined>>([]);

  return (
    <CustomersContext.Provider
      value={{ customerOnEdit, customers, setCustomers, setCustomerOnEdit }}
    >
      {children}
    </CustomersContext.Provider>
  );
};
