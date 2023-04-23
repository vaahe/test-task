import React, { createContext, useContext } from 'react';
import { customerType } from '../types';

export const FormContext = createContext({});
export const useFormContext = () => useContext(FormContext);

interface FormProviderProps {
  component: React.ElementType;
  data: customerType;
  onSubmit: any;
}

const FormProvider = ({ component: Component, data, onSubmit }: FormProviderProps) => {
  return (
    <FormContext.Provider value={data}>
      <Component handleSubmit={onSubmit} value={data} />
    </FormContext.Provider>
  );
};

export default FormProvider;
