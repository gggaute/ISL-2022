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
  showFeedback,
  progress,
  possible,
  restartSet,
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

  // Gets the exercise content with {id} from backend.
  function getContent() {
      fetch(`${process.env.REACT_APP_API_URL}/api/forstaelse/${id}`)
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
    } else {
      setTaskStep(taskStep + 1);
    }
  };

  function fireAudio() {
    setDisabled(true);
    playAudio(forsaudio);
    setTimeout(() => {
      setDisabled(false);
    }, 4000);
  }

  useEffect(() => {
    getContent();
  });

  return (
    <Paper >
      <AppBar position="static">
        <Toolbar component="nav">
          {restartSet()}
        </Toolbar>
      </AppBar>
      <div >
        <div >
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Card>
          <CardContent >
            <IconButton
              onClick={() => fireAudio()}
              disabled={disabled}
              data-testid="volumeForstaelse"
            >
              <VolumeUpIcon />
            </IconButton>
            <Typography
              variant="body2"
              component="p"
            >
              Les hva meldingen sier. Svar på spørsmålet.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Paper elevation={0}>
        <Grid container spacing={3}>
          <ChatBubble chat={formData[`chat${taskStep}`]} />
          <Grid item xs={12}>
            <hr />
            <Typography>
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
            <Typography >
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
  );
};

export default Forstaelse;
