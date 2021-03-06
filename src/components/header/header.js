import React from 'react';
import {useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: green[600],
  },
}));

export default function Header() {
  
  const classes = useStyles();

  let savedList = useSelector( state => state.savedList);


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Restaurant Randomizer
          </Typography>
          <Button color="inherit">Saved List ({Object.values(savedList).length})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}