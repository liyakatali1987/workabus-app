import React from "react";
import { TextFieldCustom } from "../TextFieldCustom";
import { CustomAbn } from "../CustomAbn";
import { Box, Grid } from "@material-ui/core";

function Step1() {

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

      <Grid container spacing={3} sx={{width:"full", backgroundColor:"blue"}} >
        <Grid item xs={12} mt={2}>
          <TextFieldCustom label="Company name" name="companyName" />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextFieldCustom label="About" name="about" multiline rows={4} />
        </Grid>
        <Grid item xs={12} mt={2}>
          <CustomAbn label="ABN" name="abn" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Step1;