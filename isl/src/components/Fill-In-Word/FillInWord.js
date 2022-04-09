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
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import useStyles from "./drainn_style";
import './drainn_style.css'
import {
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import fillaudio from "../../assets/audiofiles/fillInnAudio.mp3";
import "../exerciseStyle.css";

const ExerciseContainer = ({
  id,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {
  const [answerState, setAnswerState] = useState(null);
  let backendSentence = []
  let backendwords = []
  const [onload, setOnload] = useState(true);
  const [words, setWords] = useState([]);

  const [sentence, setSentence] = useState([]);
  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  const className = useStyles()
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  const [audioDisabled, setAudioDisabled] = useState(false);
  const [previousClickedWord, setPreviousClickedWord] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [missingWord, setMissingWord] = useState("");
  const [missingWordIndex, setMissingWordIndex] = useState(-1);
  const question = "Trykk på ordet som mangler i setningen.";

  useEffect(() => {
    getContent()
  }, [])

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

  console.log("Scentence: " + sentence)
  console.log()
  console.log("MissingWord: " + missingWord)

  const onClickedWord = (clickedWord) => {
    setOnload(false);
    if(previousClickedWord === ""){
      //remove the word that was chosen from list of words
      setWords(words.filter((word) => word !== clickedWord));
      // if the index of the word is the same as missingWordIndex, then the clicked word will take the place of the missing word
      setSentence(
        sentence.map((word, index) => (index === missingWordIndex ? (word = clickedWord): word)))
    }
    else {
      setWords([
        ...words.filter((word) => word !== clickedWord),
        previousClickedWord,
      ]);
      setSentence(
        sentence.map((word, index) => (index === missingWordIndex ? (word = clickedWord): word)))
    }
    setPreviousClickedWord(clickedWord);

  }
  
  const checkAnswer = () => {
    if(sentence[missingWordIndex] === missingWord){
      setAnswerState('correct')
      setScore(score + 1);
      setTotalPossibleScore(totalPossibleScore + 1);
    } else {
      setAnswerState('incorrect')
      setTotalPossibleScore(totalPossibleScore + 1);
    }
    setDisabled(true);
  };

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
          <h1 className={className.exerciseType}>Fyll inn manglende ord</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={question} fireAudio={fireAudio} disabled={audioDisabled}></Question>
        <Paper className={classes.layout} elevation={0}>
          <Grid container spacing={1} className={classes.overallGrid}>
            <div className={className.gameWrapper}>
              <Task
                missingWord={missingWord}
                onload={onload}
                previousClickedWord={previousClickedWord}
                sentence={sentence}
                missingWordIndex={missingWordIndex}
              ></Task>
              <div className={className.wordGridWrapper}>
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

export default ExerciseContainer;
