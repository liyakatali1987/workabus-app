import React from 'react';
import { TextFieldCustom } from '../custom/CustomComponents';
import { RadioGroupCustom } from '../custom/CustomComponents';
import { Grid, Paper, Box, Typography } from '@mui/material';

const PersonalDetails = ({defaultValues}) => {

  const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 10,
      textAlign: "center",
      color: "green",
      fontFamily: "Roboto",
    }
  };

  const radioButtons = [
    {
      id: 'male',
      label: 'Male',
    },
    {
      id: 'female',
      label: 'Female',
    },
    {
      id: 'notdisclosed',
      label: 'Wish not to disclose',
    }
  ];


  return (
    <Box style={classes.root}>
      <Grid container spacing={3} sx={{justifyContent: "center"}}>
        <Grid item xs={12} mt={2}>
          <Paper style={classes.paper}>Personal Details</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldCustom label="First Name" name="firstName"  defaultValue={defaultValues.firstName}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldCustom label="Middle Name (optional)" name="middleName" defaultValue={defaultValues.middleName}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldCustom label="Last Name" name="lastName" defaultValue={defaultValues.lastName} />
        </Grid>
        
        <Grid item xs={12}>
        <Typography>Gender</Typography> 
        <RadioGroupCustom name="gender" buttons={radioButtons} defaultValue={defaultValues.gender}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Box>
  )
}


export default PersonalDetails