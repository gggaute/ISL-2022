import React from "react";
import Question from "../Question/Question";
import Task from "./Task";
import Words from "./Words";
import { useState } from "react";
import CheckAnswer from "./CheckAnswer";
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import axios from "axios";
import { useEffect } from "react";
import ProgressBar from '../ProgressBar';
import NavBar from "../NavBar/Navbar";
import {
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import fillAudio from "../../assets/audiofiles/fillInnAudio.mp3";
import useStyles from "./styles";
import exerciseStyles from '../exerciseStyle';
import './general.css'
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

  /* answerState: TODO */
  const [answerState, setAnswerState] = useState(null);

  let backendSentence = []
  let backendwords = []

  const [onload, setOnload] = useState(true);
  const [words, setWords] = useState([]);
  const [sentence, setSentence] = useState([]);
  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles()
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  const [previousClickedWord, setPreviousClickedWord] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [missingWord, setMissingWord] = useState("");
  const [missingWordIndex, setMissingWordIndex] = useState(-1);

  const question = "Trykk på ordet som mangler i setningen.";

  useEffect(() => {
    getContent()
  }, [])


  /**
   * Funciton to fetch content from database
   * Sets @variable backendLetters to contain the letters from database,
   * then sets letters to contain content from backendLetters, and
   * sets Image to fetched image from database
   */
  function getContent() {
    axios
      .get(`/api/fill_in_word/${id}`, {
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
        backendwords.push(res.data.answerWord1)
        backendwords.push(res.data.answerWord2)
        backendwords.push(res.data.answerWord3)
        backendwords.push(res.data.answerWord4)
        backendwords.push(res.data.answerWord5)
        backendwords.push(res.data.answerWord6)
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
        setWords(backendwords)
        setMissingWord(backendSentence[res.data.correctSolutionIndex])
        setMissingWordIndex(res.data.correctSolutionIndex);
      });
  }


  /**
   * TODO
   * @param {} clickedWord 
   */
  const onClickedWord = (clickedWord) => {
    setOnload(false);
    if (previousClickedWord === "") {
      //remove the word that was chosen from list of words
      setWords(words.filter((word) => word !== clickedWord));
      // if the index of the word is the same as missingWordIndex, then the clicked word will take the place of the missing word
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
   *  TODO
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
   * TODO
   */
  const handleNextTask = () => {
    setAnswerState(null);
    showFeedback(score, totalPossibleScore);
  };

  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root} id="rootPaper">
        <div className={classes.progresscontainer}>
          <h1 className={classes.exerciseType}>Fyll inn manglende ord</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={question} audio={fillAudio} playAudio={playAudio}></Question>
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
