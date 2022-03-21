import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
/* import axios from 'axios'; */
import SaveIcon from '../SaveIcon/SaveIcon';
import happyPickle from '../../assets/images/happyPickle.png';
import finalSad from '../../assets/images/finalSad.png';
/**
 * This component is displayed after a user has played through a set.
 * It gives the user an option to like/dislike, save the exercise and get an overview of the score.
 * @author Simen, Julie
 * @param {object} props
 * @property {integer} totalScore The player's score after playing the set.
 * @property {integer} id The id of the current set being played.
 * @property {integer} totalExercises The total number of exercises in the set.
 * @property {float} percentage The total score in percentage.
 * @property {object} completed Shows the score and if the set is completed or not.
 * @property {boolean} isAuthenticated Redux state used to check if a user is auth.
 * @property {function} setSteps Changes case in the playset container.
 * @property {function} getContents Gets the ID of the set so the user can start it over again.
 * @returns The finished set component displaying scores and buttons for rating and saving.
 */

const FinishedSet = ({
  totalScore,
  id,
  totalExercises,
  percentage,
  completed,
 // isAuthenticated,
  setSteps,
  getContents,
}) => {

  // Used to keep track of whether a user has given a rating before and what rating has been given.
  const [rating, setRating] = useState({ rating: null });

  const [step, setStep] = useState('');
  const [pers] = useState(Math.ceil(percentage * 100));

  // Checks if the current user has rated a set before from backend and updates the state.
  /* function getContent() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/rating/${id}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        setRating(res.data);
      })
      .catch((e) => {
        return e;
      });
  } */
  /**
   * Checks if the user scored over or under 75 percent of the total score
   * to give the user different feedback accordingly.
   */
  function scoreState() {
    if (percentage < 0.75) {
      setStep('under');
    } else {
      setStep('over');
    }
  }

  // Sends a post request to backend to update the users completed sets and the score.
 /*  function postCompleted() {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/completed/`,
        {
          sets: id,
          score: pers,
        },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        }
      )
      .catch((e) => {
        return e;
      });
  } */
  // Sends a put request to backend to update the score if a new hiscore has been reached.
 /*  function putCompleted() {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/completed/${completed.id}`,
        {
          score: pers,
          sets: id,
        },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        }
      )
      .catch((e) => {
        return e;
      });
  } */

  /**
   * Runs on first render and gets necessary content from backend
   * only if user is authenticated to avoid unnecessary requests.
   * Also updates the user's score if a new personal record was set.
   */
  /* useEffect(() => {
    if (isAuthenticated) {
      getContent();
      if (!completed.completed) {
        postCompleted();
      } else if (completed.completed && pers > completed.score) {
        putCompleted();
      }
    }
    scoreState();
  }, []); */

  // If user clicks on like or dislike, a post request is sent to update the users rating.
 /*  function onClickRating(rated) {
    const formData = {
      rating: rated,
      sets: id,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/rating/`, formData, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access')}`,
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then(() => {
        getContent();
      })
      .catch((e) => {
        return e;
      });
  } */
  // Button that sends the user back to the overview page.
  function restartSet() {
    return (
      <Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            getContents(id);
            setSteps('overview');
          }}
        >
          Kommentarer
        </Button>
      </Grid>
    );
  }

  // The const will display different responses to different results from playing a set.
  const switchStep = () => {
    switch (step) {
      case 'over':
        return (
          <div>
            <Typography variant="h3">
              Bra jobba!
            </Typography>
            <img
              src={happyPickle}
              alt="happy pickle"
            />
          </div>
        );
      case 'under':
        return (
          <div>
            <Typography variant="h1">
              Ikke værst!
            </Typography>
            <img
              src={finalSad}
              alt="Final sad pickle"
              width="100"
            />
          </div>
        );
      default:
        return <Typography>default</Typography>;
    }
  };

  return (
    <Paper elevation={0} >
      {switchStep()}
      <Typography variant="h2">
        Din totale poengsum ble
        {` ${totalScore} `}
        av totalt
        {` ${totalExercises} `}
        mulige!
      </Typography>
     {/*  {isAuthenticated && (
        <>
          <Typography variant="h3">
            <br />
            Hvis du likte settet kan du gi det tommel opp
          </Typography>
          <Grid container spacing={1}>
            <IconButton
              data-testid="ratingUpButton"
              onClick={() => onClickRating(true)}
            >
              {rating.rating ? (
                <ThumbUpIcon
                  data-testid="ratingUpButtonClicked"
                  className={classes.like}
                />
              ) : (
                <ThumbUpIcon data-testid="ratingUpButtonUnClicked" />
              )}
            </IconButton>
            <IconButton
              data-testid="ratingDownButton"
              onClick={() => onClickRating(false)}
            >
              {rating.rating === false ? (
                <ThumbDownIcon
                  data-testid="ratingDownButtonClicked"
                  className={classes.dislike}
                />
              ) : (
                <ThumbDownIcon data-testid="ratingDownButtonUnClicked" />
              )}
            </IconButton>
            <SaveIcon id={id} />
          </Grid>
        </>
      )} */}
      <Grid container justify="center">
        {restartSet()}
        <Button
          variant="outlined"
          component={Link}
         // to={isAuthenticated ? '/home' : '/'}
        >
          Hjem
        </Button>
      </Grid>
    </Paper>
  );
};

export default FinishedSet;
