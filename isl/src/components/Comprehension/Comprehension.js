import React, { useState, useEffect } from 'react';

import {
  Button,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import ChatBubble from '../ChatBubble/ChatBubble';
import compAudio from '../../assets/audiofiles/comprehensionAudio.mp3';
import ProgressBar from '../ProgressBar';
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import axios from 'axios';
import useStyles from './styles';
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import Question from '../Question/Question';
import "../exerciseStyle.css";

/**
 * This is the comprehension exercise component that is playable from Playsets.
 * @author Old group
 * @param {object} props
 * @property {integer} id This is the id of the comprehension exercise being played.
 * @property {function} showFeedback Tracks a user's score when playing an exercise in a set and
 * which feedback case to show after finishing the exercise.
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @property {function} playAudio Returns a new HTMLAudioElement.
 * @returns A comprehension exercise instance.
 */
const Comprehension = ({
  id,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {
  // Data for the comprehension exercise from backend.
  const [formData, setFormData] = useState({});

  // Null if user hasn't given an answer, "correct" or "incorrect" if user has given an answer.
  const [answerState, setAnswerState] = useState(null);

  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  //A string with the question displayed for the task
  const question = 'Les hva meldingen sier. Svar på spørsmålet under.';

  /**
   * Fetches content from backend based on the given id, and sets
   * the data to formdata().
   */
  function getContent() {
    axios
      .get(`/api/comprehension/${id}`, {
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

  /**
   * This function updates states after a user has clicked on an answer.
   * @param {object} userAnswer The answer the user chose. 
   */
  function onClickAnswer(userAnswer) {
    if (formData[`answer`] === userAnswer) {
      setAnswerState('correct');
      setScore(score + 1);
      setTotalPossibleScore(totalPossibleScore + 1);
    } else {
      setAnswerState('incorrect');
      setTotalPossibleScore(totalPossibleScore + 1);
    }
  }

  /**
   * The function calls showFeedback(int,int) and sends the user to the feedback page, 
   * after the user has played the current task.
   */ 
  const handleNextTask = () => {
    setAnswerState(null);
    showFeedback(score, totalPossibleScore);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root} id="rootPaper">
      {/* <ContentHeader></ContentHeader> */}
        <div className={classes.progresscontainer}>
          <h1 className={classes.exerciseType}>Forståelse</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
       <Question question={question} audio={compAudio} playAudio={playAudio} />

        {/* </CardContent>
          </Card>
        </div> */}
        <Paper className={classes.layout} elevation={0}>
          <Grid container spacing={3}>
            <ChatBubble chat={formData[`chat`]} />
            <Grid className={classes.gridText} item xs={12}>
              <hr />
              <Typography className={classes.text}>
                {formData[`question`]}
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
                {formData[`explanation`]}
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

export default Comprehension;