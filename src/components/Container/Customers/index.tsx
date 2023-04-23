import React from 'react';
import Table from './Table';

const Customers = ({ datas }: any) => {
  return (
    <div className="border border-black w-full text-black-100 text-xl m-1 px-4 py-2 overflow-auto">
      <h1 className="font-bold text-black-200 text-[20px]">Customers</h1>
      <Table datas={datas} />
    </div>
  );
};

export default Customers;
