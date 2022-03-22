import React, { useState, useEffect } from 'react';

import {
  AppBar,
  Button,
  Card,
  Grid,
  CardContent,
  Typography,
  Toolbar,
  Paper,
  IconButton,
} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ChatBubble from '../ChatBubble/ChatBubble';
import forsaudio from '../../assets/audiofiles/forstaelseVoice.mp3';
import ProgressBar from '../ProgressBar';
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import axios from 'axios';
import useStyles from './styles';
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import ContentHeader from "../ContentHeader/ContentHeader";

/**
 * This is the forstaelse exercise component that is playable from Playsets.
 * @author Simen, Phajsi
 * @param {object} props
 * @property {integer} id This is the id of the forstaelse exercise being played.
 * @property {function} showFeedback Tracks a user's score when playing an exercise in a set and
 * which feedback case to show after finishing the exercise.
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @property {function} restartSet Sets setStep in Playsets to "overview" so the user can exit
 * the exercise set from any exercise.
 * @property {function} playAudio Returns a new HTMLAudioElement.
 * @returns A forstaelse exercise instance.
 */
const Forstaelse = ({
  id,
  nextExercise,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {
  // Data for the forstaelse exercise from backend.
  const [formData, setFormData] = useState({});

  // Null if user hasn't given an answer, "correct" or "incorrect" if user has given an answer.
  const [answerState, setAnswerState] = useState(null);

  // Keeps track of which task in the exercise the user is currently on.
  const [taskStep, setTaskStep] = useState(1);
  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  const [disabled, setDisabled] = useState(false);

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  // Gets the exercise content with {id} from backend.
  function getContent() {
    axios
      .get(`http://localhost:8000/api/forstaelse/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        setFormData(res.data);
      })
      .catch((e) => {
        return e;
      });
  }

  // Updates states after a user has clicked on an answer.
  function onClickAnswer(userAnswer) {
    if (formData[`answer${taskStep}`] === userAnswer) {
      setAnswerState('correct');
      setScore(score + 1);
      setTotalPossibleScore(totalPossibleScore + 1);
    } else {
      setAnswerState('incorrect');
      setTotalPossibleScore(totalPossibleScore + 1);
    }
  }

  // Goes to the next task or the next exercise after the user has played the current task.
  const handleNextTask = () => {
    setAnswerState(null);
    // Checks if there are more tasks in the exercise before incrementing the task count.
    if (!formData[`chat${taskStep + 1}`]) {
      showFeedback(score, totalPossibleScore);
      // nextExercise();
    } else {
      setTaskStep(taskStep + 1);
    }
  };

  /*
  function fireAudio() {
    setDisabled(true);
    playAudio(forsaudio);
    setTimeout(() => {
      setDisabled(false);
    }, 4000);
  }
  */

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <ContentHeader></ContentHeader>
      <Paper className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar component="nav" className={classes.toolbar}>
          </Toolbar>
        </AppBar>
        {/*<IconButton
    <Paper className={classes.root}>
      <div className={classes.topContent}>
        <div className={classes.progresscontainer}>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Card>
          <CardContent className={classes.cardcontent}>
            {/*<IconButton
              onClick={() => fireAudio()}
              disabled={disabled}
              data-testid="volumeForstaelse"
            >
              <VolumeUpIcon />
            </IconButton>
            */}
        <Typography
          variant="body2"
          component="p"
          className={classes.audiotext}
        >
          Les hva meldingen sier. Svar på spørsmålet.
        </Typography>
        {/* </CardContent>
          </Card>
        </div> */}
        <Paper className={classes.layout} elevation={0}>
          <Grid container spacing={3}>
            <ChatBubble chat={formData[`chat${taskStep}`]} />
            <Grid className={classes.gridText} item xs={12}>
              <hr />
              <Typography className={classes.text}>
                {formData[`question${taskStep}`]}
              </Typography>
            </Grid>
            {answerState === null && (
              <>
                <Grid item xs={6}>
                  <Button
                    onClick={() => onClickAnswer('true')}
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    JA
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    onClick={() => onClickAnswer('false')}
                    variant="contained"
                    color="secondary"
                    fullWidth
                  >
                    NEI
                  </Button>
                </Grid>
              </>
            )}
            {answerState !== null && (
              <Typography className={classes.explanation}>
                {formData[`explanation${taskStep}`]}
              </Typography>
            )}
            <NextExerciseBtn
              answerState={answerState}
              handleNextTask={handleNextTask}
            />
          </Grid>
        </Paper>
      </Paper>
    </>
  );
};

export default Forstaelse;