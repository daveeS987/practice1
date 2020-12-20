import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


import {deleteFromList} from '../../store/savedList.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));


function SimpleCart() {

  const classes = useStyles();
  const dispatch = useDispatch();
  let savedList = useSelector( state => state.savedList);


  return (
    <>
    <List component="nav" className={classes.root}>

    {
      Object.values(savedList).map(restaurant => {
        return (
          <ListItem key={restaurant.id} >
            <ListItemText primary={restaurant.name}  />
            <ListItemText secondary={restaurant.location.address1}  />
            <IconButton aria-label="delete" onClick={ () => dispatch(deleteFromList(restaurant))}>
              <DeleteIcon />
            </IconButton >
          </ListItem>
        )
      })
    }

    </List>
    </>
  )
}

export default SimpleCart;