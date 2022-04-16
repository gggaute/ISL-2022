import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import NavBar from "../NavBar/Navbar";
import ProgressBar from '../ProgressBar';
import exerciseStyles from '../exerciseStyle';
import useStyles from "./styles";
import "./poengsum.css";
import "../exerciseStyle.css";

/**
 * TODO
 * @param {object} props 
 * @property {} totalExercises
 * @property {} totalScore
 * @property {} progress
 * @property {} possible
 * @property {} feedbackState
 * @property {} nextExercise
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
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  // Returns a different feedback page if the player succeeded or not.
  switch (feedbackState) {
    case 'playing':
      return (
        <>
          <NavBar></NavBar>
          <Paper className={classes.root} id="rootPaper">
            <div className={classes.progresscontainer}>
              <ProgressBar progress={progress} possible={possible} />
            </div>
            <Typography variant="h4" align="center" className={classes.textFeedback} id="poengsumText">
              Poengsummen din er
              {` ${totalScore} `}
              av totalt
              {` ${totalExercises} `}
              mulige!
            </Typography>

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

            <Typography variant="h4" align="center" className={classes.textFeedback}>
              Du har gjort alle oppgavene!
            </Typography>

            <Typography variant="h4" align="center" className={classes.textFeedback} id="poengsumText">
              Dine poeng:
            </Typography>

            <Typography variant="h4" align="center" className={classes.textFeedback} id="poengsum">
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
            <Typography variant="h3">Noe gikk galt</Typography>
          </div>
        </Paper>
      );
  }
};

export default Feedback;
