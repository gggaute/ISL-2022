import React, { useState, useEffect } from 'react';
//import { Redirect } from 'react-router-dom';
//import axios from 'axios';
import {
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import topTriangle from '../../assets/images/topTriangle.svg';
import bottomTriangle from '../../assets/images/bottomTriangle.svg';
/* import SaveIcon from '../SaveIcon/SaveIcon'; */
/* import DeleteModal from '../DeleteModal'; */

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
  user,
  completed,
}) => {
  // Object which contains all the comments related to an exercise set with a specific ID.
  const [exerciseFeedback] = useState([]);
  // Object which contains a set ID, comment and username for creating a new comment.
  const [formDataComment, setFormDataComment] = useState({ sets: id });
  // Boolean used to check whether a user has clicked on a comment to delete it.
  const [open, setOpen] = useState(false);
  // Stores the ID of a comment the user is attempting to delete.
  const [deleteId, setDeleteId] = useState(null);
  const [ratings, setRatings] = useState({ upvote: 0, downvote: 0 });
  const [redirectHome, setRedirectHome] = useState(false);

  /**
   * This function updates exerciseFeedback when a user enters
   * the overviewpage of an exercise set with a given ID.
   * Only comments related to the set ID are added to exerciseFeedback.
   * @param {object} feedbacks An object containing comments from backend as input.
   */
  function createFeedbackList(feedbacks) {
    Object.entries(feedbacks).forEach(([comment]) => {
      exerciseFeedback.push(feedbacks[comment]);
    });
  }

/*   function getContent() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/comment/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        createFeedbackList(res.data);
      })
      .catch((e) => {
        return e;
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/getrating/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        setRatings(res.data);
      })
      .catch((e) => {
        return e;
      });
  } */

  // Post request to the backend for the comment being created.
/*   function onsubmitPostComment() {
    // This line adds the name of the user creating the comment to formDataComment.
    formDataComment.name = user.name;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/usercomment/`,
        formDataComment,
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        }
      )
      .then(() => {
        exerciseFeedback.length = 0;
        getContent();
        setFormDataComment({
          ...formDataComment,
          comment: '',
        });
      })
      .catch((e) => {
        return e;
      });
  } */

  /**
   * This function deletes a comment with a specific ID from backend.
   * Then setOpen is set to false so the delete dialog is closed.
   * Length of exerciseFeedback is set to 0 to empty the variable before
   * requesting the object list of updated comments from backend.
   * @param {number} id The id of a specific comment as input.
   */
/*   function onDelete(id) {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/usercomment/${id}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access')}`,
          accept: 'application/json',
        },
      })
      .then(() => {
        setOpen(false);
        exerciseFeedback.length = 0;
        getContent();
      })
      .catch((e) => {
        return e;
      });
  } */

  /* useEffect(() => {
    getContent();
  }, []); */

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
            {/* {isAuthenticated && (
              <SaveIcon className={classes.iconbutton} id={id} />
            )} */}
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
            {completed.completed && (
              <Typography gutterBottom data-testid="score">
                Din beste score på dette settet er
                {` ${completed.score}%.`}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h3">Kommentarer</Typography>
            <div >
              <Typography>
                <ThumbUpIcon />
                {ratings.upvotes}
                <ThumbDownIcon />
                {ratings.downvotes}
              </Typography>
            </div>
        <Grid item xs={12}>
          {exerciseFeedback.length === 0 && <></>}
          {exerciseFeedback.map((comment, index) => {
            return (
              <Card data-testid="card" key={index}>
                <CardContent >
                  <Grid container>
                    <Grid item xs={2} >
                      <Typography variant="subtitle1">
                        {comment.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={9} >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                      >
                        {comment.comment}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      {user && comment.name === user.name.toString() && (
                        <IconButton
                          data-testid="delete"
                          onClick={() => {
                            setDeleteId(comment.id);
                            setOpen(true);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
        {open && (
          {/* <DeleteModal
          //  onDelete={() => onDelete(deleteId)}
            open={open}
            setOpen={setOpen}
          /> */}
        )}
      </Grid>
      <img
        src={bottomTriangle}
        alt="bottomTriangle"
      />
  {/*     {redirectHome && (
        <Redirect
          to={
            isAuthenticated
              ? {
                  pathname: '/home',
                }
              : { pathname: '/' }
          }
        />
      )} */}
      </Grid>
    </Paper>
  );
};

export default OverviewPage;
