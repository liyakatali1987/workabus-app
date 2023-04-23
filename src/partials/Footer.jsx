import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
    sx={{
      width: "100%",
      height: "auto",
      backgroundColor: "transparent",
      paddingTop: "50px",
      paddingBottom: "10px",
      alignContent: "center",
    }}
  >
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography color="black" variant="h5">
           WORKABUS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="primary" variant="subtitle">
            {`${new Date().getFullYear()} | React | Material UI | React Router`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default Footer