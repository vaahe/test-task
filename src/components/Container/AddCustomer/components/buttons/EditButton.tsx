import React from 'react';
import Image from 'next/image';
import useCustomersContext from '../../../../../hooks/useCustomersContext';

export const EditButton = ({ id }: any) => {
  const context = useCustomersContext();

  const handleEdit = () => {
    const customer = context?.customers.find((customer) => customer?.id === id);
    context?.setCustomerOnEdit(customer);
  };

  return (
    <button onClick={handleEdit}>
      <Image src="/images/Edit.svg" alt="Edit" height={24} width={24} />
    </button>
  );
};
