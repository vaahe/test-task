export const styles = {
  form: 'text-input font-medium leading-6',
  nameLabel: 'flex text-base flex-start justify-between p-0 w-full',
  errorMessage: 'text-[#F87171]',
  label: 'pt-4',
  input:
    'bg-white flex flex-row items-start py-2 px-3 border rounded-lg border-[#E2E8F0] w-full focus:outline-none focus:ring focus:ring-[#bae6fd]',
  firstName: 'flex flex-col w-full mr-2 mb-4',
  lastName: 'flex flex-col w-full ml-2 mb-4',
  status: {
    base: 'my-4 box-border',
    section: {
      base: 'flex justify-between bg-status text-center p-1 rounded-lg',
    },
    focused: 'w-full rounded bg-white shadow cursor-pointer',
    notFocused: 'w-full rounded bg-transparent cursor-pointer',
  },
  password: {
    base: 'relative block mt-4',
    label: 'absolute inset-y-0 right-0 flex items-end my-auto py-1 px-3',
    img: 'absolute inset-y-0 right-0 flex items-center pr-3',
  },
  submit: 'w-full py-2 px-3 my-4 bg-blue rounded-lg text-white cursor-pointer hover:bg-[#0284C7]',
};
