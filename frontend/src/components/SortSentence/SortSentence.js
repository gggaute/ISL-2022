import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import sortAudio from "../../assets/audiofiles/sortAudio.mp3";
import ProgressBar from "../ProgressBar/ProgressBar";
import NextExerciseBtn from "../NextExerciseBtn/NextExerciseBtn";
import useStyles from './sortSentenceStyle';
import globalStyles from '../globalStyle';
import NavBar from "../NavBar/NavBar";
import Question from "../Question/Question";
import "../globalStyle.css";


/**
 * This is the SortSentence exercise component that is playable from Playsets.
 * @author Group 2021
 * Revised by Guri
 * @param {object} props
 * @property {integer} id This is the id of the sortSentence exercise being played.
 * @property {function} showFeedback Tracks a user's score when playing an exercise in a set and
 * which feedback case to show after finishing the exercise.
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @property {function} playAudio Returns a new HTMLAudioElement.
 * @returns A sortSentence exercise instance.
 */
const SortSentence = ({
  id,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {
  // List of the words displayed in the exercise.
  const [words] = useState([]);
  // List of the words the user has chosen in the exercise.
  const [chosenWords, setChosenWords] = useState([]);
  // List of objects containing the word
  const [wordWithColorCode, setWordWithColorCode] = useState([]);
  // List of the wordclasses corresponding to the words displayed.
  const [wordClasses] = useState([]);

  // State that keeps track of the correct sentence, which needs 
  // to be checked against when the user is satisfied with their answer.
  const [rightAnswer, setRightAnswer] = useState();

  const [answerState, setAnswerState] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  // A string with the question displayed for the task
  const question = "Trykk p?? ordene for ?? skrive setningen i riktig rekkef??lge.";

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = globalStyles();
  const classes = { ...className, ...classesBase };

  // List of the the words gotten from the database and assembled together with their respective worldclasses.
  let concatenatedWords = [];
  let counter = 0;

  /**
   * Splits the words in the sentence from their wordclasses and into their respective states.
   * @param {string} el 
   */
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

  /**
   * Randomizes the words that the user needs to sort.
   */
  const randomizeWords = () => {
    concatenatedWords.sort(() => Math.random() - 0.5);
  };

  /**
   * Function that transforms the wordclass into its corresponding color and returns the
   * css backgroundColor object with its the colors HEX code. 
   * @param {String} wordClass Backends wordclasses
  */
  const colorCodeTransform = (wordClass) => {
    switch (wordClass) {
      case "sub":
        return { backgroundColor: "#3366FF" };
      case "ob":
        return { backgroundColor: "#99CCFF" };
      case "adv":
        return { backgroundColor: "#F27D16" };
      case "set":
        return { backgroundColor: "#FFCC00" };
      case "conj":
        return { backgroundColor: "#33CC33" };
      case "subj":
        return { backgroundColor: "#954BC9" };
      case "fin":
        return { backgroundColor: "#CC0000" };
      case "infin":
        return { backgroundColor: "#FF6699" };
      default:
        return { backgroundColor: "#969595" };
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
   *    used for displaying the words in the Sort Sentence exercise.
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

  /**
   * Fetches content from backend based on the given id, and runs
   * filterData() to render the info on the page.
   */
  function getContent() {
    axios
      .get(`/api/sort_sentence/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        filterData(res.data);
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

  /**
   * The function calls showFeedback(int,int) and sends the user to the feedback page,
   * after the user has played the current task.
   */
  const nextExercise = () => {
    showFeedback(score, totalPossibleScore);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root} id="rootPaper">
        <div className={classes.progresscontainer}>
          <h1 className={classes.exerciseType}>Rydd setningen</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={question} audio={sortAudio} playAudio={playAudio} ></Question>
        <Paper className={classes.layout} elevation={0}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div data-cy="div-with-buttons" style={{ alignSelf: 'center' }}>
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
                    data-cy="word-into-sentence-button"
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
            <Grid item xs={12} className={classes.checkAnswerBtn}>
              <Button
                data-cy="check"
                variant="contained"
                disabled={disableButton}
                onClick={checkAnswer}
              >
                Sjekk svar
              </Button>
            </Grid>
            {answerState === 'incorrect' && (
              <Grid className={classes.gridText} item xs={12}>
                <Typography className={classes.explanation}>
                  <strong>Fasit: </strong>{rightAnswer.map(function (e, i) { return [words[i] + " "]; })}
                </Typography>
              </Grid>
            )}
            <NextExerciseBtn
              answerState={answerState}
              handleNextTask={() => nextExercise()}
            />
          </Grid>
        </Paper>
      </Paper>
    </>
  );
};

export default SortSentence;