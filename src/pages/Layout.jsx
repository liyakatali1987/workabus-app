import React, {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'fixed',
    marginLeft:10,
    marginRight:10
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    justifyContent: 'center',

  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5"
    }
  },
});

const Layout = ({ children, drawer }) => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
        <Header drawer={drawer}/>
        <main className={classes.content}>
          {children}
        </main>
        <Footer />
    </ThemeProvider>
  );
};

export default Layout;