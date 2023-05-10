import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = [
  yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    gender: yup.string().required('Please select a gender'),
    dob: yup.string().required('Please enter your Date of Birth'),
    nationality: yup.string().required('Please select a nationality'),
  }),
  yup.object().shape({
    address: yup.object().shape({
      unit: yup.string().required('This field is required'),
      street: yup.string().required('This field is required'),
      city: yup.string().required('This field is required'),
      state: yup.string().required('This field is required'),
      postcode: yup.string().required('This field is required'),
      country: yup.string().required('This field is required'),
    }),
    mobile: yup.string().matches(phoneRegExp, 'Invalid phone number'),
  }),
  yup.object().shape({}),
  yup.object().shape({}),
];
