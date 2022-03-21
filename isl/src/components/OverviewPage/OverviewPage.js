import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Button,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import topTriangle from '../../assets/images/topTriangle.svg';
import bottomTriangle from '../../assets/images/bottomTriangle.svg';

/**
 * The overviewPage component is displayed when a user searches for an exercise set to play.
 * This component displays the set's title, description, commentfield, rating, and a like button
 * if the user is authenticated. The user can click to play the set from this page.
 * @author Maja, Simen
 * @param {object} props
 * @property {string} title The exercise set's title.
 * @property {string} description The exercise set's description.
 * @property {integer} id The id of the exercise set.
 * @property {function} nextExercise Fires when play button is clicked. Starts the exercise set.
 * @property {boolean} isAuthenticated Redux state used to check if a user is auth.
 * @property {object} user Redux object used to get user information.
 * @property {boolean} completed Boolean is true if the user has played the exercise set before.
 * @returns A component displaying overview information to an exercise set.
 */
const OverviewPage = ({
  title,
  description,
  id,
  nextExercise,
}) => {
  const [redirectHome, setRedirectHome] = useState(false);
  return (
    <Paper >
      <img src={topTriangle} alt="topTriangle"  />
      <IconButton
        data-testid="homeButton"
        onClick={() => setRedirectHome(true)}
      >
        <ArrowBackIcon />
        <Typography variant="h3">Hjem</Typography>
      </IconButton>
      <Grid container  />
        <Grid item xs={12} >
          <div >
            <Typography variant="h1" >
              {title}
            </Typography>
          </div>
          <Divider  />
          <Grid container>
            <Grid item sm={9} xs={12} >
              <Typography >
                {description}
              </Typography>
            </Grid>
            <Grid item sm={3} xs={12} >
              <Button
                variant="contained"
                color="primary"
                onClick={() => nextExercise()}
              >
                Spill
                <PlayArrowIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} >
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <img
        src={bottomTriangle}
        alt="bottomTriangle"
      />
       {redirectHome && (
        <Navigate
          to={{ pathname: '/' } }
        />
      )}
      </Grid>
    </Paper>
  );
};

export default OverviewPage;