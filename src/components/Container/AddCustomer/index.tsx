import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { styles } from '../../../styles/AddCustomer';

import { FormFields } from './components/formFields';
import { AddCustomerProps, customerType } from '../../../types';
import useCustomersContext from '../../../hooks/useCustomersContext';

const initialValues: customerType = {
  email: '',
  company: '',
  lastName: '',
  password: '',
  firstName: '',
  status: '',
};

export const AddCustomer = ({}: AddCustomerProps | any) => {
  const context = useCustomersContext();

  const onSubmit = (values: customerType, { resetForm }: any) => {
    if (context?.customerOnEdit) {
      context?.setCustomers(
        context?.customers.map((customer) =>
          customer?.id === context?.customerOnEdit?.id ? values : customer,
        ),
      );

      context?.setCustomerOnEdit(undefined);
      return;
    }

    context?.setCustomers([...context.customers, { ...values, id: Date.now() }]);
    resetForm({ values: initialValues });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Customer</h1>

      <Formik
        initialValues={context?.customerOnEdit || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => <FormFields isSubmitting={isSubmitting} />}
      </Formik>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  company: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().max(50, 'Too Long!').required('Required').min(8, '8+ characters'),
});
