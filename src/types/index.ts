export type customerType = {
  email: String;
  status: Boolean;
  actions: Object;
  company: String;
  lastName: String;
  password: String;
  firstName: String;
  avatar?: SVGElement;
};

export interface AddCustomerProps {
  initialValues: customerType;
  onSubmit: any;
}
