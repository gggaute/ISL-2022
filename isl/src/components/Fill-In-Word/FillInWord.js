import React from "react";
import Question from "../Question/Question";
import Task from "./Task";
import Words from "./Words";
import { useState } from "react";
import CheckAnswer from "./CheckAnswer";
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import axios from "axios";
import { useEffect } from "react";
import ProgressBar from '../ProgressBar/ProgressBar';
import NavBar from "../NavBar/Navbar";
import {
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import fillaudio from "../../assets/audiofiles/fillInnAudio.mp3";
import useStyles from "./drainn_style";
import exerciseStyles from '../exerciseStyle';
import './drainn_style.css'
import "../exerciseStyle.css";

/**
 * This is the FillInWord exercise component that is playable from Playsets.
 * @author Gaute, Synne
 * @param {object} props
 * @property {integer} id This is the id of the FillInWord exercise being played.
 * @property {function} showFeedback Tracks a user's score when playing an exercise in a set and
 * which feedback case to show after finishing the exercise.
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @property {function} playAudio Returns a new HTMLAudioElement.
 * @returns A FillInWord exercise instance.
 */
const FillInWord = ({
  id,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {

  /* The state of the answered question, correct or incorrect answered */
  const [answerState, setAnswerState] = useState(null);
  
  /* The sentence and individual words for the buttons, fetched from the api-input and backend */ 
  let backendSentence = []
  let backendWords = []

  const [onload, setOnload] = useState(true);

  /* List of words in buttons, fetched from backend. Updated on user interaction */
  const [words, setWords] = useState([]);

  /* List of words in the sentence, fetched from backend. Updated on user interaction */
  const [sentence, setSentence] = useState([]);

  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles()
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  const [audioDisabled, setAudioDisabled] = useState(false);

  /* The word that was most recently clicked (one of the six button-words) */
  const [previousClickedWord, setPreviousClickedWord] = useState("");
  const [disabled, setDisabled] = useState(false);
  
  /* The correct solution as string and its position (index) in the sentence */
  const [missingWord, setMissingWord] = useState("");
  const [missingWordIndex, setMissingWordIndex] = useState(-1);

  const question = "Trykk på ordet som mangler i setningen.";

  useEffect(() => {
    getContent()
  }, [])


  /**
   * Function to fetch content from database
   * Sets @variable backendSentence to contain the sentence-words from database,
   * then sets @variable backendWords to contain the answer-words from database.
   * Pops unused/empty fields from backendSentence.
   * Sets @variable missingWord and @variable missingWordIndex.
   */
  function getContent() {
    axios
      .get(`/api/draInnManglendeOrd/${id}`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        backendSentence.push(res.data.sentenceWord1)
        backendSentence.push(res.data.sentenceWord2)
        backendSentence.push(res.data.sentenceWord3)
        backendSentence.push(res.data.sentenceWord4)
        backendSentence.push(res.data.sentenceWord5)
        backendSentence.push(res.data.sentenceWord6)
        backendSentence.push(res.data.sentenceWord7)
        backendSentence.push(res.data.sentenceWord8)
        backendSentence.push(res.data.sentenceWord9)
        backendSentence.push(res.data.sentenceWord10)
        backendSentence.push(res.data.sentenceWord11)
        backendSentence.push(res.data.sentenceWord12)
        backendSentence.push(res.data.sentenceWord13)
        backendSentence.push(res.data.sentenceWord14)
        backendSentence.push(res.data.sentenceWord15)
        backendWords.push(res.data.answerWord1)
        backendWords.push(res.data.answerWord2)
        backendWords.push(res.data.answerWord3)
        backendWords.push(res.data.answerWord4)
        backendWords.push(res.data.answerWord5)
        backendWords.push(res.data.answerWord6)
        
        let count = 0
        for (let index = 0; index < backendSentence.length; index++) {
          if (backendSentence[index] === '') {
            count += 1
          }
        }
        for (let i = 0; i < count; i++) {
          backendSentence.pop()
        }
        
        setSentence(backendSentence)
        setWords(backendWords)
        setMissingWord(backendSentence[res.data.correctSolutionIndex])
        setMissingWordIndex(res.data.correctSolutionIndex);
      });
  }


  /**
   * Function to handle click on word-buttons,
   * updates the sentence with the clickedWord, and sets @variable previousClickedWord
   * @param {string} clickedWord The word that was clicked to trigger the function, and is put into the sentence
   */
  const onClickedWord = (clickedWord) => {
    setOnload(false);
    if (previousClickedWord === "") {
      // Remove the word that was chosen from list of words
      setWords(words.filter((word) => word !== clickedWord));
      // If the index of the word is the same as missingWordIndex, then the clicked word will take the place of the missing word
      setSentence(
        sentence.map((word, index) => (index === missingWordIndex ? (word = clickedWord) : word)))
    }
    else {
      setWords([
        ...words.filter((word) => word !== clickedWord),
        previousClickedWord,
      ]);
      setSentence(
        sentence.map((word, index) => (index === missingWordIndex ? (word = clickedWord) : word)))
    }
    setPreviousClickedWord(clickedWord);

  }


  /**
   * Function to check if the sentence is correct. 
   * Sets @variable answerState based on if the word in the sentence
   * at the index @variable missingWordIndex is the same as @variable missingWord.
   * Sets @variable score and @variable totalPossibleScore. Updates @variable disabled.
   */
  const checkAnswer = () => {
    if (sentence[missingWordIndex] === missingWord) {
      setAnswerState('correct')
      setScore(score + 1);
      setTotalPossibleScore(totalPossibleScore + 1);
    } else {
      setAnswerState('incorrect')
      setTotalPossibleScore(totalPossibleScore + 1);
    }
    setDisabled(true);
  };


  /**
   * Function to take the parent state to the next step, which is feedback
   * Gives an amount of points to show during the feeback step; 1 if the answer was correct, 0 if incorrect.
   * Sets @variable answerState and @variable feedback.
   */
  const handleNextTask = () => {
    setAnswerState(null);
    showFeedback(score, totalPossibleScore);
  };

  
  function fireAudio() {
    setAudioDisabled(true);
    playAudio(fillaudio);
    setTimeout(() => {
      setAudioDisabled(false);
    }, 4000);
  }


  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root} id="rootPaper">
        <div className={classes.progresscontainer}>
          <h1 className={classes.exerciseType}>Fyll inn manglende ord</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={question} fireAudio={fireAudio} disabled={audioDisabled}></Question>
        <Paper className={classes.layout} elevation={0}>
          <Grid container spacing={1} className={classes.overallGrid}>
            <div className={classes.gameWrapper}>
              <Task
                missingWord={missingWord}
                onload={onload}
                previousClickedWord={previousClickedWord}
                sentence={sentence}
                missingWordIndex={missingWordIndex}
              ></Task>
              <div className={classes.wordGridWrapper}>
                <Words
                  onClick={onClickedWord}
                  words={words}
                  disabled={disabled}
                  missingWord={missingWord}
                ></Words>
                <CheckAnswer onClick={checkAnswer} disabled={disabled} onload={onload}></CheckAnswer>
              </div>
            </div>
            {answerState === 'incorrect' && (
              <Typography className={classes.explanation}>
                <strong>Fasit: </strong> {sentence.map((sentenceWord, index) => {
                  if (index === missingWordIndex) {
                    return (<strong>{missingWord + " "} </strong>)
                  } else { return (sentenceWord + " ") }
                })}
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

export default FillInWord;
