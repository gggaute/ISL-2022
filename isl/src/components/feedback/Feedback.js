import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import NavBar from "../NavBar/Navbar";
import exerciseStyles from '../exerciseStyle';
import ProgressBar from '../ProgressBar';
import "./poengsum.css";


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
            <Typography variant="h4" align="center" className={classes.text2}>
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
          <Paper className={classes.root}>
          <div className={classes.progresscontainer}>
            <ProgressBar progress={2} possible={1} />
          </div>

          <Typography variant="h4" align="center" className={classes.text2}>
          Du har gjort alle oppgavene!
              </Typography>
          <Typography variant="h4" align="center" className={classes.text2} id="poengsumText">
                Dine poeng: 
                <div  className={classes.points}>
                {` ${totalScore } ` }
                /
                {` ${totalExercises} `}
                </div>
              </Typography>

              <div className={classes.btnParent}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => nextExercise()}
              fullWidth
            >
              Fullfør sett
            </Button>
            </div>
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
