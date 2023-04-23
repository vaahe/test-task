import React, { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { styles } from '../../../styles/Container';
import { AddCustomerProps } from '../../../types';
import Image from 'next/image';

const schema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const AddCustomer = ({ initialValues, onSubmit }: AddCustomerProps) => {
  const [passwordType, setPasswordType] = useState('password');
  const [imgSrc, setImgSrc] = useState('/images/Eye.svg');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setImgSrc('/images/EyeOff.svg');
      setPasswordType('text');
      return;
    }

    setImgSrc('/images/Eye.svg');
    setPasswordType('password');
  };

  return (
    <div className="p-5 w-1/3">
      <h1 className="font-bold text-header text-[20px]">Add Customer</h1>

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
        {({ isSubmitting }) => (
          <Form className="text-input font-medium leading-6">
            <div className="flex text-base flex-start justify-between p-0 w-full">
              <div className="flex flex-col w-36">
                <label htmlFor="firstName">
                  First Name
                  <Field
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    className={styles.input}
                  />
                  <ErrorMessage name="firstName" component="div" className={styles.errorMessage} />
                </label>
              </div>

              <div className="flex flex-col w-36">
                <label htmlFor="lastName">
                  Last Name
                  <Field type="lastName" name="lastName" id="lastName" className={styles.input} />
                  <ErrorMessage name="lastName" component="div" className={styles.errorMessage} />
                </label>
              </div>
            </div>

            <label htmlFor="company">
              Company
              <Field type="company" name="company" id="company" className={styles.input} />
              <ErrorMessage name="company" component="div" className={styles.errorMessage} />
            </label>

            <div className="my-4">
              <label htmlFor="status" id="status">
                Status
              </label>
              <div role="group" aria-labelledby="status">
                <label>
                  <Field type="radio" name="status" value="user" />
                  User
                </label>
                <label>
                  <Field type="radio" name="status" value="admin" />
                  Administrator
                </label>
                <ErrorMessage name="status" component="div" className={styles.errorMessage} />
              </div>
            </div>

            <label htmlFor="email">
              Email
              <Field type="email" name="email" id="email" className={styles.input} />
              <ErrorMessage name="email" component="div" className={styles.errorMessage} />
            </label>

            <label htmlFor="password" className="relative block">
              Password
              <Field
                type={passwordType}
                name="password"
                id="password"
                className={`bg-white placeholder:font-italitc border border-slate-400 drop-shadow ${styles.input}`}
              />
              <span className="absolute inset-y-0 right-0 flex items-end my-auto py-1 px-3">
                <Image
                  src={imgSrc}
                  alt="eye"
                  width={32}
                  height={32}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={togglePassword}
                />
              </span>
            </label>
            <ErrorMessage name="password" component="div" className={styles.errorMessage} />

            <Field
              type="submit"
              disabled={isSubmitting}
              value="Submit"
              className="w-full py-2 px-3 bg-buttonBg rounded-lg text-white cursor-pointer"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCustomer;
