import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import Navbar from "../Fill-In-Word/Navbar";
//Denne importen må endres etter strukturen blir endret
import exerciseStyles from '../exerciseStyle';
import ProgressBar from '../ProgressBar';

const Feedback = ({
  progress,
  possible,
  feedbackState,
  nextExercise,
}) => {
  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  // Returns a different feedback page if the player succeeded or not.
  switch (feedbackState) {
    case true:
      return (
        <Paper className={classes.root}>
        <Navbar></Navbar>
        <div className={classes.progresscontainer}>
          <ProgressBar progress={progress} possible={possible} />
        </div>
          <div>
            <Typography variant="h1" className={classes.text}>
              Hurra, du klarte det!
            </Typography>
            <br />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextExercise()}
            fullWidth
          >
            neste oppgave
          </Button>
        </Paper>
      );
    case false:
      return (
        <Paper className={classes.root}>
        <Navbar></Navbar>
        <div className={classes.progresscontainer}>
          <ProgressBar progress={progress} possible={possible} />
        </div>
          <div>
            <Typography variant="h1" className={classes.text}>
              Bedre lykke neste gang!
            </Typography>
            <br />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextExercise()}
            fullWidth
          >
            neste oppgave
          </Button>
        </Paper>
      );
    default:
      return (
        <Paper className={classes.root}>
          <div>
            <Typography variant="h3">Noe gikk galt</Typography>
          </div>
        </Paper>
      );
  }
};

export default Feedback;
