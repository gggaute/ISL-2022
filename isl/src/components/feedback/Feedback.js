import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
// import sadPickle from '../../assets/images/sadPickle.png';
// import mariusPickle from '../../assets/images/mariusPickle.png';
import useStyles from './styles'

/**
 * This is the feedback page between exercises.
 * @author Julie
 * @param {object} props
 * @property {integer} totalScore Keeps track of the players total score.
 * @property {integer} totalExercises Total number of exercises in a set.
 * @property {boolean} feedbackState True if the player answered correctly, false if not.
 * @property {function} nextExercise Button that takes the player to the next exercise.
 * @returns A feedback page.
 */
const Feedback = ({
  totalScore,
  totalExercises,
  feedbackState,
  nextExercise,
}) => {
  const style = useStyles();
  // Returns a different feedback page if the player succeeded or not.
  switch (feedbackState) {
    case true:
      return (
        <Paper elevation={0} >
          {/* <img
            src={mariusPickle}
            alt="Marius pickle"
          /> */}
          <div>
            <Typography variant="h1" className={style.text}>
              Hurra, du klarte det!
            </Typography>
            <br />
            {/* <Typography variant="h2" >
              Poengsummen din er
              {` ${totalScore} `}
              <br />
              av totalt
              {` ${totalExercises} `}
              mulige!
            </Typography> */}
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
        <Paper elevation={0}>
          {/* <img src={sadPickle} alt="sad pickle"  /> */}
          <div >
            <Typography variant="h1" className={style.text}>
              Bedre lykke neste gang!
            </Typography>
            <br />
            {/* <Typography variant="h2" >
              Poengsummen din er
              {` ${totalScore} `}
              <br />
              Av totalt
              {` ${totalExercises} `}
              mulige!
            </Typography> */}
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
        <Paper>
          <div>
            <Typography variant="h3" >
              Noe gikk galt
            </Typography>
          </div>
        </Paper>
      );
  }
};

export default Feedback;
