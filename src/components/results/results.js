import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


import {addToList} from '../../store/savedList.js';


const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  body: {
    minHeight: '50%'
  }
}));




function Results() {

  const classes = useStyles();
  const dispatch = useDispatch();
  
  let results = useSelector( (state) => state.results);

  console.log('RESULTS from result page:', results);

  return (

    <>
      <Container maxWidth="md" component="main" className={classes.body}>
        <Grid container spacing={5} alignItems="stretch">
          {/* why 3 specs here? on a small screen, use 12 grid spots, 6 on a small screen, 4 on medium+ */}
          {/* In other words, 1 accross, 2 accross, or 3 accross */}

          {/* <Grid item xs={12} sm={6} md={4} > 
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image='https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg'
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Restaurant Name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Restaurant Description
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                         Address:
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      
                        <Button size="small" color="primary">
                          Save to List
                        </Button>
                      
                      <Button size="small" color="primary">
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
          </Grid> */}

          {
            results.map(restaurant => {
              return (

                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={restaurant.image_url}
                      />

                      <CardContent>

                        <Typography gutterBottom variant="h5" component="h2">
                          {restaurant.name}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                          {restaurant.location.address1}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                          Phone:{restaurant.display_phone}
                        </Typography>

                      </CardContent>

                    </CardActionArea>
                    <CardActions>
  
                      <Button size="small" color="primary"  onClick={() => dispatch(addToList(restaurant))}>
                        Save to List
                      </Button>
      
                      <Button size="small" color="primary">
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

              )
            })
          }




        </Grid>
      </Container>
    </>
  );
}

export default Results;