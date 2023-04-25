import Image from 'next/image';
import React, { useState } from 'react';
import { ErrorMessage, Field, Form } from 'formik';

import { IProps } from '../../../../../types';
import { styles } from '../../../../../styles/FormFields';

import openedEye from '../../../../../../public/images/Eye.svg';
import closedEye from '../../../../../../public/images/EyeOff.svg';

export const FormFields = ({ isSubmitting }: IProps) => {
  const [isPasswordType, setIsPasswordType] = useState<Boolean>(true);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);

  const handleClick = () => {
    setIsAdmin((currentState) => !currentState);
  };

  const togglePassword = () => {
    setIsPasswordType(!isPasswordType);
  };

  return (
    <Form className={styles.form}>
      <div className={styles.nameLabel}>
        <div className={styles.firstName}>
          <label htmlFor="firstName" className={styles.label}>
            First Name
            <Field type="firstName" name="firstName" id="firstName" className={styles.input} />
            <ErrorMessage name="firstName" component="div" className={styles.errorMessage} />
          </label>
        </div>

        <div className={styles.lastName}>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
            <Field type="lastName" name="lastName" id="lastName" className={styles.input} />
            <ErrorMessage name="lastName" component="div" className={styles.errorMessage} />
          </label>
        </div>
      </div>

      <label htmlFor="company" className={styles.label}>
        Company
        <Field type="company" name="company" id="company" className={styles.input} />
        <ErrorMessage name="company" component="div" className={styles.errorMessage} />
      </label>

      <div className={styles.status.base}>
        <label htmlFor="status" id="status">
          Status
        </label>
        <div role="group" aria-labelledby="status" className={styles.status.section.base}>
          <label
            htmlFor="user"
            className={`${isAdmin ? styles.status.notFocused : styles.status.focused}`}
            id="userLabel"
          >
            <Field
              type="radio"
              name="status"
              value="user"
              id="user"
              checked={!isAdmin}
              className="invisible"
              onClick={handleClick}
            />
            User
          </label>

          <label
            htmlFor="admin"
            className={`${isAdmin ? styles.status.focused : styles.status.notFocused}`}
            id="adminLabel"
          >
            <Field
              type="radio"
              name="status"
              value="admin"
              id="admin"
              checked={isAdmin}
              className="invisible"
              onClick={handleClick}
            />
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

      <label htmlFor="password" className={styles.password.base}>
        Password
        <Field
          type={isPasswordType ? 'password' : 'text'}
          name="password"
          id="password"
          className={styles.input}
        />
        <span className={styles.password.label}>
          <Image
            src={isPasswordType ? openedEye : closedEye}
            alt="eye"
            width={32}
            height={32}
            className={styles.password.img}
            onClick={togglePassword}
          />
        </span>
      </label>
      <ErrorMessage name="password" component="div" className={styles.errorMessage} />

      <Field type="submit" disabled={isSubmitting} value="Submit" className={styles.submit} />
    </Form>
  );
};
