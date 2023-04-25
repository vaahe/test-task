import React from 'react';
import Image from 'next/image';
import useCustomersContext from '../../../../../hooks/useCustomersContext';

export const DeleteButton = ({ id }: any) => {
  const context = useCustomersContext();

  const handleDelete = () => {
    const customers: any = context?.customers.filter((customer) => customer?.id !== id);
    context?.setCustomers(customers);
  };

  return (
    <button onClick={handleDelete}>
      <Image src="/images/Trash.svg" alt="Trash" height={24} width={24} />
    </button>
  );
};
