import { useFormContext } from 'react-hook-form';

export const customFormContext = () => {
  const context = useFormContext();
  const { control, formState } = context;
  const { errors, getValues} = formState;
  return { control, errors, getValues };
};
