import * as yup from "yup";

export const validationSchema = [
    // validation for step1
    yup.object({
      firstName: yup.string().required('First Name is required'),
      lastName: yup.string().required('Last Name is required'),
      gender: yup.string().required('Please select a gender'),
    }),
    // //validation for step2
    // yup.object({
    //   address: yup.string().required()
    // }),
    // //validation for step3
    // yup.object({
    //   job: yup.string().required()
    // })
  ];