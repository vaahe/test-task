export type customerType = {
  id?: any;
  email: string;
  status: string;
  company: string;
  lastName: string;
  password: string;
  firstName: string;
};

export interface AddCustomerProps {
  onSubmit: (values: customerType, onSubmitProps: any) => void;
  initialValues: customerType;
}

export interface IProps {
  isSubmitting: boolean;
}

export interface ICustomerProps {
  children: React.ReactNode;
}

export interface ICustomerValues {
  customerOnEdit?: customerType;
  customers: Array<customerType | undefined>;
  setCustomers: React.Dispatch<React.SetStateAction<Array<customerType | undefined>>>;
  setCustomerOnEdit: React.Dispatch<React.SetStateAction<customerType | undefined>>;
}
