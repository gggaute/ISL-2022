import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  AppBar,
  Card,
  CardContent,
  Typography,
  Grid,
  Toolbar,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ryddaudio from "../../assets/audiofiles/ryddeSetningerVoice.mp3";
import ProgressBar from "../ProgressBar";
import NextExerciseBtn from "../NextExerciseBtn/NextExerciseBtn";
import useStyles from './styles';
import exerciseStyles from '../exerciseStyle';

import Navbar from "../Fill-In-Word/Navbar";



/**
 * This is the ryddeSetninger exercise component that is playable from Playsets.
 * @author Julie, Phajsi
 * @param {object} props
 * @property {integer} id This is the id of the ryddeSetninger exercise being played.
 * @property {function} showFeedback Tracks a user's score when playing an exercise in a set and
 * which feedback case to show after finishing the exercise.
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @property {function} restartSet Sets setStep in Playsets to "overview" so the user can exit
 * the exercise set from any exercise.
 * @property {function} playAudio Returns a new HTMLAudioElement.
 * @returns A ryddeSetninger exercise instance.
 */
const RyddeSetninger = ({
  id,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {
  const [renderPage, setRenderPage] = useState();
  // List of the words displayed in the exercise.
  const [words] = useState([]);
  // List of the words the user has chosen in the exercise.
  const [chosenWords, setChosenWords] = useState([]);
  // List of objects containing the word
  const [wordWithColorCode, setWordWithColorCode] = useState([]);
  // List of the wordclasses corresponding to the words displayed.
  const [wordClasses] = useState([]);
  /* State that keeps track of the correct sentence, which needs 
  to be checked against when the user is satisfied with their answer. */
  const [rightAnswer, setRightAnswer] = useState();

  const [answerState, setAnswerState] = useState();
  const [disableButton, setDisableButton] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  const [disabled, setDisabled] = useState(false);

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  // List of the the words gotten from the database and assembled together with their respective worldclasses.
  let concatenatedWords = [];
  let counter = 0;

  // Splits the words in the sentence from their wordclasses and into their respective states.
  const splitData = (el) => {
    counter += 1;
    if (!(el === "" || typeof el === "number")) {
      if (counter % 2 === 0) {
        words.push(el);
      } else {
        wordClasses.push(el);
      }
    }
  };

  const randomizeWords = () => {
    concatenatedWords.sort(() => Math.random() - 0.5);
  };

  /* Function that transforms the wordclass into its corresponding color and returns the
  css backgroundColor object with its the colors HEX code. */
  const colorCodeTransform = (wordClass) => {
    switch (wordClass) {
      case "sub":
        return { backgroundColor: "#3366FF" };
      case "ob":
        return { backgroundColor: "#99CCFF" };
      case "adv":
        return { backgroundColor: "#FFFFCC" };
      case "set":
        return { backgroundColor: "#FFCC00" };
      case "conj":
        return { backgroundColor: "#33CC33" };
      case "subj":
        return { backgroundColor: "#CCFFCC" };
      case "fin":
        return { backgroundColor: "#CC0000" };
      case "infin":
        return { backgroundColor: "#FF6699" };
      default:
        return { backgroundColor: "#E0E0E0" };
    }
  };

  /** Function that filters the data gotten from the database and processes them through
   * several stages:
   * 1. Splits the object into a list of only the words, and another list of only wordclasses
   * 2. Saves a copy of the previously created list of words into the rigthAnswer state
   * 3. Glues together the words and wordClasses states and saves them in the concatenatedWords array.
   * 4. Randomizes the concatenatedWords array, so that the words are displayed in a randomized order.
   * 5. Goes through all the wordclasses in the concatenatedWords array and returns their corresponding
   *    HEX color codes instead.
   * 6. Saves a copy of the concatenatedWords array into the wordWithColorCode state, that will be the state
   *    used for displaying the words in the Rydde Setninger exercise.
   * @param {object} data Object containing all the words and wordclasses used in the exercise.
   */
  const filterData = (data) => {
    Object.values(data).map((el) => splitData(el));
    setRightAnswer([...words]);
    concatenatedWords = words.map(function (e, i) {
      return [words[i], wordClasses[i]];
    });
    randomizeWords();
    concatenatedWords.forEach(function (item, index) {
      const hexCode = colorCodeTransform(item[1]);
      concatenatedWords[index].splice(1, 1, hexCode);
    });
    setWordWithColorCode([...concatenatedWords]);
  };

  function getContent() {
    axios
      .get(`http://localhost:8000/api/rydde_setninger/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        filterData(res.data);
        setRenderPage(renderPage + 1);
      })
      .catch((e) => {
        return e;
      });
  }

  /**
   * Function that adds the chosen word object into the chosenWord state array, and deletes the
   * same object from the wordWithColorCode state array.
   * @param {object} e The clicked button Event object.
   * @param {object} el The [word, wordclass] object.
   */
  const clicked = (e, el) => {
    chosenWords.push(el);
    const temp = [...wordWithColorCode];
    temp.splice(e.currentTarget.id, 1);
    setWordWithColorCode(temp);
  };

  /**
   * Function that removes the chosen word object from the chosenWord state array, and adds the
   * same object to the wordWithColorCode state array.
   * @param {object} e The clicked button Event object.
   * @param {object} el The [word, wordclass] object.
   */
  const removeWord = (e, el) => {
    wordWithColorCode.push(el);
    const temp = [...chosenWords];
    temp.splice(e.currentTarget.id, 1);
    setChosenWords(temp);
  };

  /**
   * Function that checks if the sentences chosen by the user equals the sentence
   * intended by the creator of the exercise, that are saved in the rightAnswer state.
   * The function will also disable the "Sjekk svar"-button and award a score of 1 if the
   * sentence is correct, and 0 if not. In addition to increase the totalPossibleScore of
   * the set by one.
   */
  const checkAnswer = () => {
    setDisableButton(true);
    const finalSentence = chosenWords.map((el) => el[0]);
    if (JSON.stringify(finalSentence) === JSON.stringify(rightAnswer)) {
      setAnswerState("correct");
      setScore(1);
      setTotalPossibleScore(totalPossibleScore + 1);
    } else {
      setAnswerState("incorrect");
      setScore(0);
      setTotalPossibleScore(totalPossibleScore + 1);
    }
  };

  const nextExercise = () => {
    showFeedback(score, totalPossibleScore);
  };

  /*
  function fireAudio() {
    setDisabled(true);
    playAudio(ryddaudio);
    setTimeout(() => {
      setDisabled(false);
    }, 6000);
  }
  */

  useEffect(() => {
    getContent();
  }, []);

  return (
    <Paper className={classes.root}>
       <Navbar></Navbar>
      <AppBar className={classes.navbar} position="static">
        <Toolbar component="nav" className={classes.toolbar}>
        </Toolbar>
      </AppBar>
      <div className={classes.topContent}>
        <div className={classes.progresscontainer}>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Card>
          <CardContent className={classes.cardcontent}>
           {/* <IconButton
              onClick={() => fireAudio()}
              disabled={disabled}
              data-testid="volumeRyddeSetninger"
            >
              <VolumeUpIcon />
            </IconButton> */}
            <Typography
              variant="body2"
              component="p"
              className={classes.audiotext}
            >
              Trykk på ordene sånn at de kommer i riktig rekkefølge. Husk å
              sjekke tegnsettingen!
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Paper className={classes.layout} elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div style={{ alignSelf: 'center' }}>
              {wordWithColorCode.map((el, index) => (
                <Button
                  key={index}
                  id={index}
                  value={el[0]}
                  style={el[1]}
                  className={classes.wordBtn}
                  variant="contained"
                  disabled={disableButton}
                  onClick={(e) => clicked(e, el)}
                >
                  {el[0]}
                </Button>
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.chosenWords}>
              {chosenWords.map((el, index) => (
                <Button
                  key={index}
                  id={index}
                  value={el[0]}
                  style={el[1]}
                  className={classes.wordBtn}
                  variant="contained"
                  disabled={disableButton}
                  onClick={(e) => removeWord(e, el)}
                >
                  {el[0]}
                </Button>
              ))}
            </div>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Button
              variant="contained"
              disabled={disableButton}
              onClick={checkAnswer}
              className={classes.checkAnswerBtn}
            >
              Sjekk svar
            </Button>
          </Grid>
          <NextExerciseBtn
            answerState={answerState}
            handleNextTask={() => nextExercise()}
          />
        </Grid>
      </Paper>
    </Paper>
  );
};

export default RyddeSetninger;