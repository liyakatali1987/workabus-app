import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { green } from '@mui/material/colors';
import dayjs from 'dayjs';


const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 2,
    textAlign: "center",
    color: green[500],
    fontFamily: "Roboto",
  },
  gridContainer: {
    border: "1px solid #ccc",
    borderRadius: 2,
    marginTop: 2,
    padding: 2,
  },
  gridItem: {
    padding: 1,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontWeight: "normal",
    color: green[500],
    whiteSpace: "pre-line",
  },
};

const ReviewForm = ({ values }) => {

  return (
    <Box>
      <Paper sx={classes.paper}>Review Details</Paper>
      <Grid container sx={classes.gridContainer}>
        <Grid item xs={12} sm={6} sx={classes.gridItem}>
          <Typography variant="body1" sx={classes.label}>Name</Typography>
          <Typography variant="body1" sx={classes.value}>{values.firstName} {values.middleName} {values.lastName}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={classes.gridItem}>
          <Typography variant="body1" sx={classes.label}>Sex</Typography>
          <Typography variant="body1" sx={classes.value}>{values.gender.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={classes.gridItem}>
          <Typography variant="body1" sx={classes.label}>Date of Birth</Typography>
          <Typography variant="body1" sx={classes.value}>{dayjs(values.dob).format('DD/MM/YYYY')}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={classes.gridItem}>
          <Typography variant="body1" sx={classes.label}>Nationality</Typography>
          <Typography variant="body1" sx={classes.value}>{values.nationality}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={classes.gridItem}>
          <Typography variant="body1" sx={classes.label}>Contact Number</Typography>
          <Typography variant="body1" sx={classes.value}>+{values.mobile}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={classes.gridItem}>
          <Typography variant="body1" sx={classes.label}>Address</Typography>
          <Typography variant="body1" sx={classes.value}>
            {`Unit: ${values.address.unit}\n`}
            {`Street: ${values.address.street}\n`}
            {`City: ${values.address.city}\n`}
            {`Post Code: ${values.address.postcode}\n`}
            {`State: ${values.address.state}\n`}
            {`Country: ${values.address.country}`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;
