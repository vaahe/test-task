import React from 'react';
import { EditButton } from './EditButton';
import { DeleteButton } from './DeleteButton';

export const Buttons = ({ id }: any) => {
  return (
    <div className="flex items-start">
      <EditButton id={id} />
      <DeleteButton id={id} />
    </div>
  );
};
