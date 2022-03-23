import React, { useState, useEffect } from "react";

// import SingleLetter from './singleLetter';
// import Button from "@mui/material/Button";
import axios from "axios"
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import ProgressBar from '../ProgressBar';
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import useStyles from "./styles";
import Question from "../Fill-In-Word/Question";
import ContentHeader from "../ContentHeader/ContentHeader";
import "./buttons.css";
import { Paper } from '@mui/material';

const UnlockPad = ({
  id,
  showFeedback,
  progress,
  possible
}) => {

  let setDisabled = false
  // const [answerstate, setAnswerstate] = useState(null);
  const [correctSolution, setCorrectSolution] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [solutionLength, setSolutionLength] = useState(0);
  const backendLetters = []
  const [letters, setLetters] = useState([]);
  const [image, setImg] = useState(null)
  let isFinished = false;

  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  function getContent() {
    axios
      .get(`http://localhost:8000/api/unlock/${id}`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        setCorrectSolution(res.data.correctSolution);
        setSolutionLength(res.data.correctSolution.length);
        //forloop av slag for å iterere gjennom letters og legge de til i "letters"
        backendLetters.push(res.data.letter1);
        backendLetters.push(res.data.letter2);
        backendLetters.push(res.data.letter3);
        backendLetters.push(res.data.letter4);
        backendLetters.push(res.data.letter5);
        backendLetters.push(res.data.letter6);
        backendLetters.push(res.data.letter7);
        backendLetters.push(res.data.letter8);
        backendLetters.push(res.data.letter9);
        setLetters(backendLetters);
        setImg(res.data.solutionImage);
        console.log(res.data.solutionImage)
      });
  }

  let tilbakemelding

  function checkAnswer() {
    if (userAnswer.length === solutionLength) {
      if (userAnswer === correctSolution) {
        tilbakemelding = "correct"
        // setAnswerstate('correct')
      }
      else {
        tilbakemelding = "incorrect"
        // setAnswerstate('incorrect')
      }
      isFinished = true
      console.log(correctSolution, solutionLength)
    }
    if (isFinished) {
      setDisabled = true
    }
  }

  //count for id til css, vet ikke om det funker
  let count = 0;

  const [userAnswerList, setUserAnswerList] = useState([]);

  function registerLetterinAnswer(buttonLetter) {
    if (userAnswer.length < solutionLength) {
      setUserAnswer(userAnswer + buttonLetter);
      userAnswerList.push(buttonLetter.toUpperCase());
    }
  }

  const answerList = [];
  function presentAnswer() {
    for (let i = 0; i <= userAnswerList.length; i++) {
      answerList.push(userAnswerList[i]);
    }
    answerList.pop();
    // console.log(answerList);
    if (answerList.length < solutionLength) {
      for (let i = answerList.length; i < solutionLength; i++) {
        answerList.push("_");
      }
    }
    // console.log(answerList);
  }

  presentAnswer();

  let itemList = answerList.map((item, index) => {
    return <p>{item}</p>;
  });

  function handleEvent(event) {
    event.target.disabled = true
  }

  checkAnswer()

  function setButtonID() {
    count++
    return "numpadButton" + count.toString()
  }

  const handleNextTask = () => {
    if (tilbakemelding === 'correct') {
      showFeedback(1, 1);
    } else {
      showFeedback(0, 1);
    }
  };


  useEffect(() => {
    getContent()
  }, [])

  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root}>
        {/* <ContentHeader></ContentHeader> */}
        <div className={classes.progresscontainer}>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={"Hva ser du på bildet? Stav ordet!"}></Question>
        <div className={classes.content}>
          <img src={image} alt="solutionImage" className={classes.unlockImg}></img>
          <div className={classes.contentRow}>
            <div className={classes.guess}>{itemList}</div>
            <div className={classes.gridLetters}>
              {letters.map((letter, count) => (
                <>
                  <button id={setButtonID()} key={count} disabled={setDisabled} onClick={(event) => {
                    handleEvent(event)
                    registerLetterinAnswer(letter)
                  }}>
                    {letter.toUpperCase()} </button>
                  {() => count++}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.feedbackAndReset}>
          {/* Her kan det heller puttes tilbakemeldingskomponent hvis det passer bedre */}
          {/* <h1>{feedback}</h1> */}
          <NextExerciseBtn
            answerState={tilbakemelding}
            handleNextTask={handleNextTask}
          />

        </div>
      </Paper>
    </>
  )
}

export default UnlockPad;
