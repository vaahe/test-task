interface Style {
  input: string;
  errorMessage: string;
  label: string;
}

export const styles: Style = {
  input:
    'bg-white flex flex-row items-start py-2 px-3 border rounded-lg border-[#E2E8F0] w-full mt-4',
  errorMessage: 'text-[#F87171]',
  label: 'pt-4',
};
