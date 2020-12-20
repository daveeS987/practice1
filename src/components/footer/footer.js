import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import green from '@material-ui/core/colors/green';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: green[600],
    left: 0,
    bottom: 0,
    width: '100%'
  },
}));



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function Footer() {

  const classes = useStyles();

  return (

    <>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Davee Sok
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          React/Redux/MaterialUI
        </Typography>
        <Copyright />
      </footer>

    </>

  );
}

export default Footer;