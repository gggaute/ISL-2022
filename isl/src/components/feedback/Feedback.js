import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import NavBar from "../NavBar/Navbar";
//Denne importen må endres etter strukturen blir endret
import exerciseStyles from '../exerciseStyle';
import ProgressBar from '../ProgressBar';

const Feedback = ({
  totalExercises,
  totalScore,
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
    case 'playing':
      return (
        <>
          <NavBar></NavBar>
          <Paper className={classes.root}>
            <div className={classes.progresscontainer}>
              <ProgressBar progress={progress} possible={possible} />
            </div>
            <Typography variant="h2" className={classes.text}>
                  Poengsummen din er
                  {` ${totalScore} `}
                  av totalt
                  {` ${totalExercises} `}
                  mulige!
                </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => nextExercise()}
                fullWidth
              >
                Neste oppgave
              </Button>
          </Paper>
        </>
      );
      case 'finished':
      return (
        <>
          <NavBar></NavBar>
          <Paper className={classes.root}>
          <div className={classes.progresscontainer}>
            <ProgressBar progress={2} possible={1} />
          </div>
          <Typography variant="h2" className={classes.text}>
                Poengsummen din er
                {` ${totalScore} `}
                av totalt
                {` ${totalExercises} `}
                mulige!
              </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => nextExercise()}
              fullWidth
            >
              Fullfør sett
            </Button>
          </Paper>
        </>
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
