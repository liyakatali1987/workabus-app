import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper
} from "@mui/material";
import axios from "axios";
import { API_BASE_URL } from "../Constants";
import { useAuth0 } from "@auth0/auth0-react";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

// some styling
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    minHeight: "25vh",
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const defaultValues = {
  companyName: "",
  abn: "",
  about: "",
  mobilePhone: "",
  phoneNumber: "",
  address: "",
};

function getStepContent(step, formData) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 formData={formData} />;
  }
}

export default function MultiStepForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Company Details", "Contact", "Review"];
  const { user } = useAuth0();

  const onSubmit = async (data) => {
    try {
      const requestData = {
        ...data,
        email: user.email // Add the user's email to the request data
      };
      const response = await axios.post(`${API_BASE_URL}/company/createCompany`, requestData);
      // const response = await axios.get(`${API_BASE_URL}/company/getCompany`, user.email);
      console.log(response)
      return response
    } catch (error) {
      console.error(error.message); // Handle any error that occurred
    }
    
  };

  const validationSchema = [
    // validation for step1
    yup.object({
      companyName: yup
        .string()
        .required("Company Name is required")
        .min(3, "Minimum 3 characters"),
      abn: yup
        .string()
        .matches(/^\d{2}\s\d{3}\s\d{3}\s\d{3}$/, 'Invalid ABN')
        .test('valid', 'Invalid ABN', (value) => {

          const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
          let abn = value?.toString().replace(/[^\d]/g, '');
          let result = false;

          // check length is 11 digits
          if (abn?.length === 11) {

            // apply ato check method
            let sum = 0,
              weight,
              digit;

            for (let index = 0; index <= weights.length - 1; index++) {
              weight = weights[index];
              digit = abn[index] - (index ? 0 : 1);
              sum += weight * digit;
            }

            result = sum % 89 === 0;
          }

          return result;
        }),
      about: yup
        .string()
        .required("About cannot be empty")
        .min(25, "Minimum 25 characters"),
    }),
    //validation for step2
    yup.object({
      mobilePhone: yup
        .string()
        .matches(/^(\+?61|0)4\d{8}$/, 'Invalid mobile number'),
      address: yup.string().required(),
    }),
    // validation for step3
    yup.object({}),
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });
  const { handleSubmit, reset, trigger, getValues } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={1}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>

                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                  Back
                </Button>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Box>

            </>
          ) : (
            <FormProvider {...methods}>
              <form >
                <div className={classes.instructions}>
                  {getStepContent(activeStep, getValues())}
                </div>
                <Box display="flex" justifyContent="center" style={{ paddingTop: "5vh" }}>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit(onSubmit)} >
                      Submit
                    </Button>
                  ) : (
                    <Button variant="contained" color="primary" onClick={handleNext} className={classes.button} >
                      Next
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </div>
      </Paper>
    </main>
  );
}
