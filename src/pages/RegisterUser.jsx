import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalDetails from "../components/userregistration/PersonalDetails";
import ContactDetails from "../components/userregistration/ContactDetails";
import ReviewForm from "../components/userregistration/ReviewForm";
import { validationSchema } from "../components/validation/UserValidation";
import { userFormDefaults } from "../Constants";
import { AppButton } from "../components/custom/CustomStyles";
import {registerUser} from "../api/UserApi";
import { async } from "regenerator-runtime";


const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minHeight: "25vh"
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

function getStepContent(step, handleFormInput, formData) {
  switch (step) {
    case 0:
      return <PersonalDetails handleFormInput={handleFormInput} values={formData} />;
    case 1:
      return <ContactDetails handleFormInput={handleFormInput} values={formData} />;
    case 2:
      return <ReviewForm handleFormInput={handleFormInput} values={formData} />;
    default:
      return <div>404: Page Not Found</div>;
  }
}

const RegisterUser = () => {
  const { state } = useLocation();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(userFormDefaults);

  // useEffect(() => {
  //   setFormData({ ...formData, ...state });
  // }, []);

  const handleFormInput = (input) => (e) => {
    let value;
    if (e.target === undefined) {
      value = e;
    } else {
      value = e.target.value;
    }
    setFormData((prevState) => {
      const updatedData = { ...prevState };
      const nestedFields = input.split('.'); // Split the nested field name by dot notation

      let nestedData = updatedData;
      for (let i = 0; i < nestedFields.length - 1; i++) {
        const nestedField = nestedFields[i];
        nestedData = nestedData[nestedField]; // Traverse through the nested fields until the second last field
      }

      const lastField = nestedFields[nestedFields.length - 1];
      nestedData[lastField] = value; // Set the value for the last field

      return updatedData;
    });
  };

  useEffect(() => {
    console.log(formData); // Print the updated form data when formData changes
  }, [formData]);


  const steps = ["Personal Details", "Contact Details", "Review"];

  const onSubmit = async(data) => {
    console.log('Adding data to the database');
    data = {...state, ...data};
    const resp = await registerUser(data)
    console.log(resp);
  };

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm({
    shouldUnregister: false,
    formData,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });
  const { handleSubmit, reset, trigger, register, watch } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset(setFormData(userFormDefaults));
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={1}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
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
          <FormProvider {...methods}>
            <form>
              <div className={classes.instructions}>
                {getStepContent(activeStep, handleFormInput, formData)}
              </div>
              <Box
                display="flex"
                justifyContent="center"
                sx={{ 
                  paddingTop: "5vh"
                }}
              >
                <AppButton variant="contained" color="primary" onClick={handleReset}>
                  Reset
                </AppButton>
                <AppButton
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                >
                  Back
                </AppButton>

                {activeStep === steps.length - 1 ? (
                  <AppButton
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </AppButton>
                ) : (
                  <AppButton
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Next
                  </AppButton>
                )}
              </Box>
            </form>
          </FormProvider>
        </div>
      </Paper>
    </main>
  );
}

export default RegisterUser;