import React, { useState } from 'react';
import AddCustomer from './AddCustomer';
import Customers from './Customers';
import { customerType } from '../../types';
import { Images } from './AddCustomer/Images';
import Image from 'next/image';
import { toSvg } from 'jdenticon';

const Container = () => {
  const [datas, setDatas] = useState<Array<Object>>([]);

  const svgString = toSvg('emain', 100);
  const base64 = Buffer.from(svgString).toString('base64');
  console.log(base64);

  const initialValues: customerType = {
    firstName: '',
    lastName: '',
    email: '',
    actions: <Images />,
    company: '',
    password: '',
    status: false,
  };

  const onSubmit = (values: customerType, onSubmitProps: any) => {
    let data: customerType = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      actions: values.actions,
      company: values.company,
      password: values.password,
      status: String(values.status) === 'user' ? false : true,
    };

    setDatas([...datas, data]);

    onSubmitProps.resetForm();
  };

  return (
    <div className="flex h-screen">
      <AddCustomer initialValues={initialValues} onSubmit={onSubmit} />
      <Customers datas={datas} />
      <Image src={`data:image/svg+xml;base64,${base64}`} alt={'User Avatar'} />
    </div>
  );
};

export default Container;
