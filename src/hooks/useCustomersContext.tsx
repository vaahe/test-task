import { useContext } from 'react';
import { CustomersContext } from '../context/CustomersContext';

const useCustomersContext = () => useContext(CustomersContext);

export default useCustomersContext;
