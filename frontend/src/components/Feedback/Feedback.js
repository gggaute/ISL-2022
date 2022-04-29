import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import ProgressBar from '../ProgressBar/ProgressBar';
import globalStyle from '../globalStyle';
import useStyles from "./feedbackStyle";
import "./poengsumFeedbackStyle.css";
import "../globalStyle.css";

/**
 * This is component for the pages between exercises and the final page of the set.
 * @author Jasmina, Guri
 * @param {object} props 
 * @property {integer} totalExercises Number of exercises in the set being played.
 * @property {integer} totalScore Number of exercises the player has gotten correct.
 * @property {integer} progress How many exercises of the set the player has done. Used for the progressbar.
 * @property {integer} possible The total number of exercises in the set. Used for the progressbar.
 * @property {string} feedbackState State of the set being played. Returns either 'playing' or 'finished', used in cases below to determine which feedback-page is shown.
 * @property {function} nextExercise Function in Playsets.js
 * @returns 
 */
const Feedback = ({
  totalExercises,
  totalScore,
  progress,
  possible,
  feedbackState,
  nextExercise,
}) => {


  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = globalStyle();
  const classes = { ...className, ...classesBase };

  // Returns a different feedback page depending on the state of the progress in the set. Playing vs finished.
  switch (feedbackState) {
    case 'playing':
      return (
        <>
          <NavBar></NavBar>
          <Paper className={classes.root} id="rootPaper">
            <div className={classes.progresscontainer}>
              <ProgressBar progress={progress} possible={possible} />
            </div>
            <div id="divPointsText">
              <Typography variant="h1" align="center" id="pointsText">
                Poengsummen din er
                {` ${totalScore} `}
                av totalt
                {` ${totalExercises} `}
                mulige!
              </Typography>
            </div>
            <div className={classes.btnParent}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => nextExercise()}
                fullWidth
              >
                Neste oppgave
              </Button>
            </div>
          </Paper>
        </>
      );

    case 'finished':
      return (
        <>
          <NavBar></NavBar>
          <Paper className={classes.root} id="rootPaper">
            <div className={classes.progresscontainer}>
              <ProgressBar progress={2} possible={1} />
            </div>

            <Typography variant="h1" align="center" className={classes.textFeedback} id="exclamationText">
              Du har gjort alle oppgavene!
            </Typography>

            <Typography variant="h2" align="center" className={classes.textFeedback} id="pointsText">
              Dine poeng:
            </Typography>

            <Typography variant="h2" align="center" className={classes.textFeedback} id="points">
              <div className={classes.points}>
                {` ${totalScore} `}
                /
                {` ${totalExercises} `}
              </div>
            </Typography>

            <div className={classes.btnParent}>
              <Button variant="contained" color="primary" onClick={() => nextExercise()} fullWidth>
                Fullfør sett
              </Button>
            </div>

          </Paper>
        </>
      );

    default:
      return (
        <Paper className={classes.root} id="rootPaper">
          <div>
            <Typography variant="h1">Noe gikk galt</Typography>
          </div>
        </Paper>
      );
  }
};

export default Feedback;
