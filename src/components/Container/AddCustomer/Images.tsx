import React from 'react';
import Image from 'next/image';

export const Images = () => {
  return (
    <div className='flex justify-around'>
      <Image src="/images/Edit.svg" alt="Edit" height={32} width={32} onClick={() => console.log("Edit")} />
      <Image src="/images/Trash.svg" alt="Trash" height={32} width={32} onClick={() => console.log("Trash")} />
    </div>
  );
};
