import React from "react";
import Question from "../Question/Question";
import Task from "./Task";
import Words from "./Words";
import { useState } from "react";
import CheckAnswer from "./CheckAnswer";
import FeedbackBox from "../feedback/Feedback";
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import $ from "jquery";
import { FcPrevious, FcNext } from "react-icons/fc";
import axios from "axios";
import { useEffect } from "react";
import ProgressBar from '../ProgressBar';
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import ContentHeader from "../ContentHeader/ContentHeader";
import useStyles from "./drainn_style";
import './drainn_style.css'
import {
  Paper,
  Typography,
} from '@mui/material';


const ExerciseContainer = ({
  id,
  showFeedback,
  progress,
  possible,
  nextExercise,
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
  const classes = {...className,  ...classesBase };


  useEffect(() => {
    getContent()
  }, [])

  function getContent() {
    axios
      .get(`http://localhost:8000/api/draInnManglendeOrd/${id}`, {
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
        console.log("sentence: ", backendSentence);
        console.log("words: ", backendwords);
        console.log(res.data.correctSolution);
        setSentence(backendSentence)
        setWords(backendwords)
        setMissingWord(res.data.correctSolution)
        setMissingWordIndex(backendSentence.indexOf(res.data.correctSolution));
      });
  }

  const onClickedWord = (clickedWord) => {
    console.log("click", clickedWord);
    setOnload(false);
    $("#resultBox").removeClass();
    $("#resultText").text("...");

    if (previousClickedWord === "") {
      setWords(words.filter((word) => word !== clickedWord));
      setSentence(
        sentence.map((w) => (w === missingWord ? (w = clickedWord) : w))
      );
    } else {
      setWords([
        ...words.filter((word) => word !== clickedWord),
        previousClickedWord,
      ]);
      setSentence(
        sentence.map((w) => (w === previousClickedWord ? (w = clickedWord) : w))
      );
    }
    setPreviousClickedWord(clickedWord);
  };

  const [previousClickedWord, setPreviousClickedWord] = useState("");

  let answer;
  const [disabled, setDisabled] = useState(false);
  const checkAnswer = () => {
    if (sentence.includes(missingWord)) {
      answer = '';
      setAnswerState('correct')
      setScore(score + 1);
      setTotalPossibleScore(totalPossibleScore + 1);
      // $("#resultBox").removeClass();
      // $("#resultBox").addClass("riktig");
      // $("#resultText").text("Riktig!"); //TODO: Set correct icon
      // $("#goToNext").text("Neste oppgave -->"); //TODO: Set arrow icon
      // // $("#goToNext").addClass("visible");
      
    } else {
      setAnswerState('incorrect')
      setTotalPossibleScore(totalPossibleScore + 1);
      answer = 'prøv igjen!';
      // $("#resultBox").removeClass();
      // $("#resultBox").addClass("feil");
      // $("#resultText").text("Feil. Prøv igjen!"); //TODO: Set wrong icon
    }
    setDisabled(true);
    console.log(answer);
  };

  const question = "Hvilket ord mangler?";

  const [missingWord, setMissingWord] = useState("");

  const [missingWordIndex, setMissingWordIndex] = useState(-1)

  const handleNextTask = () => {
    setAnswerState(null);
    showFeedback(score, totalPossibleScore);
  };

  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root}>
      {/* <ContentHeader></ContentHeader> */}
        <div className={classes.progresscontainer}>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <div className={className.gameWrapper}>
          {/* <p>{answer}</p> */}
          <Question question={question}></Question>
          <Task
            missingWord={missingWord}
            onload={onload}
            previousClickedWord={previousClickedWord}
            sentence={sentence}
            missingWordIndex={missingWordIndex}
          ></Task>
          <Words
            onClick={onClickedWord}
            words={words}
            disabled={disabled}
            missingWord={missingWord}
          ></Words>
          <CheckAnswer onClick={checkAnswer} disabled={disabled} onload={onload}></CheckAnswer>
          {answerState === 'incorrect' && (
              <Typography className={classes.explanation}>
              Fasit: {sentence.map((sentenceWord) => {
                if (sentenceWord === previousClickedWord) {
                return (<strong>{missingWord + " "} </strong>)
                } else { return (sentenceWord + " " )}
                })}
              </Typography>
            )}
          <div className={className.nextExerciseButtonDiv}>
            <NextExerciseBtn
              answerState={answerState}
              handleNextTask={handleNextTask}
            />
          </div>
        </div>
      </Paper>
    </>

  );
};

export default ExerciseContainer;
