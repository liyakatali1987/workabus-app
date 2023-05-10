import React from 'react';
import {
  TextFieldCustom,
  CustomPhoneNumber
} from '../custom/CustomComponents';
import { Grid, Paper, Box, Typography } from '@mui/material';

const ContactDetails = ({ handleFormInput, values }) => {

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


  return (
    <Box style={classes.root} sx={{ width: '70%', margin: 'auto', padding: 2 }}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
      <Grid item xs={12} mt={2}>
          <Paper style={classes.paper}>Contact Details</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{marginBottom:1}}>Contact Number</Typography>
          <CustomPhoneNumber
            name="mobile" 
            label="Mobile" 
            handleFormInput={handleFormInput}
            values={values} 
            value="mobile" 
            />
        </Grid>
        <Grid item xs={12} sm={6}/>
        <Grid item xs={12}>
          <Typography>Address</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>

          <TextFieldCustom 
          label="Unit/House Number" 
          name="address.unit" 
          id="address" 
          value="unit" 
          handleFormInput={handleFormInput}
          values={values}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldCustom 
            label="Street..." 
            name="address.street"
            id="address" 
            value="street"
            handleFormInput={handleFormInput}
            values={values}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldCustom 
            label="City" 
            name="address.city"
            id="address" 
            value="city"
            handleFormInput={handleFormInput}
            values={values}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldCustom 
            label="State" 
            name="address.state"
            value="state"
            id="address"
            handleFormInput={handleFormInput}
            values={values}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldCustom 
          label="Post Code" 
          name="address.postcode"
          id="address" 
          value="postcode"
          handleFormInput={handleFormInput}
          values={values}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextFieldCustom 
        label="Country" 
        name="address.country"
        value="country"
        id="address" 
        handleFormInput={handleFormInput}
        values={values}
        />
        </Grid>
      </Grid>

    </Box>
  )
}


export default ContactDetails;