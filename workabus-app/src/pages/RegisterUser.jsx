import IconLogo from '../assets/ICON.png';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Avatar, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useForm } from "react-hook-form";
import { PhotoCamera } from '@mui/icons-material';


const steps = ['Select your user type', 'Your company Details', 'Contact Details'];

const RegisterUser = () => {
  const {state} = useLocation();
  console.log('Register User', state);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const { register, handleSubmit, reset, trigger, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', marginTop: "100px", marginBottom: "100px" }}>

      <Box sx={{ marginBottom: "30px" }}>
        <Typography variant="h5" align="center" gutterBottom> Hi, {state.email} Create your Profile </Typography>
      </Box>

      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)}>

        {activeStep === 0 &&

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
            <FormControl sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FormLabel sx={{ marginBottom: "15px", fontSize: "20px" }} id="demo-row-radio-buttons-group-label">Select your User Type</FormLabel>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" defaultValue="worker" >
                <FormControlLabel value="worker" control={<Radio />} label="Worker" />
                <FormControlLabel value="company" control={<Radio />} label="Company" />
              </RadioGroup>
            </FormControl>
          </Box>
        }

        {activeStep === 1 &&

          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", marginTop: "30px" }}>
            <Typography sx={{ marginBottom: "25px" }} variant="h6" align="center" gutterBottom> Company details </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "25px" }}>
              <Avatar sx={{ width: 90, height: 90 }} alt="Remy Sharp" src={IconLogo}>
              </Avatar>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField {...register("company_name", { required: true, minLength: 3 })}
                  aria-invalid={errors.company_name ? "true" : "false"}
                  label="Company Name"
                  fullWidth
                  autoComplete="off"
                />
                {errors.company_name?.type === 'required' && <Alert severity="error"> Company name cannot be empty </Alert>}
                {errors.company_name?.type === 'minLength' && <Alert severity="error"> Minimum 3 chareacteres for the name </Alert>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField {...register("abn_number", { required: true, maxLength: 11 })}
                  label="ABN Number"
                  fullWidth
                  autoComplete="off"
                  inputProps={{ maxLength: 11 }}
                />
                {errors.abn_number?.type === 'required' && <Alert severity="error"> ABN cannot be empty </Alert>}

              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField {...register("about", { required: true, minLength: 25, maxLength: 250 })}
                  label="About "
                  multiline
                  rows={4}
                  fullWidth
                  autoComplete="off"
                />
                {errors.about?.type === 'required' && <Alert severity="error"> Company name cannot be empty </Alert>}
                {errors.about?.type === 'minLength' && <Alert severity="error"> Minimum 25 characteres </Alert>}
                {errors.about?.type === 'maxLength' && <Alert severity="error"> Maximum 250 characteres </Alert>}
              </Grid>
            </Grid>
          </Box>

        }
        {activeStep === 2 &&

          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", marginTop: "30px" }}>
            <Typography sx={{ marginBottom: "25px" }} variant="h6" align="center" gutterBottom> Company details </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField  {...register("phone_Number")}
                  label="Phone Number"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField  {...register("mobile_Phone", { required: true })}
                  label="Mobile Phone"
                  inputProps={{ maxLength: 10 }}
                  fullWidth
                  autoComplete="off"
                />
                {errors.mobile_Phone?.type === 'required' && <Alert severity="error"> Mobile phone  cannot be empty </Alert>}
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField  {...register("company_Address", { required: true })}
                  label="Company Address"
                  fullWidth
                  autoComplete="off"
                />
                {errors.company_address?.type === 'required' && <Alert severity="error"> Company name cannot be empty </Alert>}
              </Grid>

            </Grid>

          </Box>

        }

        {activeStep === steps.length ? (
          <> </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: 'row', pt: 2, marginTop: "25px" }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }} >
                Back
              </Button>

              {activeStep === 2 ? <Button variant="contained" type="submit" sx={{ mr: 1 }} >Submit</Button> : null}
              {activeStep !== 2 ? <Button onClick={handleNext} sx={{ mr: 1 }} >Next</Button> : ''}

            </Box>
          </>
        )}
      </form>
    </Box>
  );
}

export default RegisterUser;