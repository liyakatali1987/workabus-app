import React, { useEffect, useState } from 'react';
import {
  TextFieldCustom,
  RadioGroupCustom,
  CustomDatePicker,
  CustomDropdown,
  CustomDateField
} from '../custom/CustomComponents';
import { Grid, Paper, Box, Typography } from '@mui/material';
import nationality from '../../data/nations.json';

const PersonalDetails = ({ handleFormInput, values }) => {

  const [nationList, setNationList] = useState([]);
  useEffect(() => {
    const list = []
    for (const value of nationality) {
      list.push({
        id: value.num_code,
        name: value.nationality
      })
    }
    setNationList(list);
  }, []);

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
    <Box style={classes.root} sx={{ width: '70%', margin: 'auto', padding: 2 }}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} mt={2}>
          <Paper style={classes.paper}>Personal Details</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldCustom
            label="First Name"
            name="firstName"
            value={values.firstName}
            handleFormInput={handleFormInput}
            values={values} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldCustom
            label="Middle Name (optional)"
            name="middleName"

            handleFormInput={handleFormInput}
            values={values}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextFieldCustom 
            label="Last Name" 
            name="lastName"
            handleFormInput={handleFormInput}
            values={values}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography>Gender</Typography>
          <RadioGroupCustom 
            name="gender" 
            buttons={radioButtons}
            handleFormInput={handleFormInput} 
            values={values}
            />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography>Date of Birth</Typography>
          <CustomDateField 
          name="dob" 
          label="DD/MM/YYYY" 
          defaultValue="DD/MM/YYYY" 
          handleFormInput={handleFormInput} 
          values={values}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Nationality</Typography>
          <CustomDropdown 
            name="nationality" 
            label="Nationality" 
            defaultValue="Australian" 
            menuItems={nationList} 
            handleFormInput={handleFormInput} 
            values={values}
            />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography>About</Typography>
          <TextFieldCustom
            label="Tell us about yourself..."
            name="about"
            handleFormInput={handleFormInput}
            values={values}
            multiline
            rows={3}
          />
        </Grid>
      </Grid>

    </Box>
  )
}


export default PersonalDetails