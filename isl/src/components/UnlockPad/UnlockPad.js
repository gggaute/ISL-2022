import React, { useState, useEffect } from "react";
import axios from "axios"
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import ProgressBar from '../ProgressBar';
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import useStyles from "./styles";
import Question from "../Question/Question";
import './general.css'
import "./buttons.css";
import { 
  Typography,
  Paper,
  IconButton,
 } from '@mui/material';
import unlockaudio from "../../assets/audiofiles/unlockAudio.mp3";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const UnlockPad = ({
  id,
  showFeedback,
  progress,
  possible,
  playAudio
}) => {

  /**
   * This is the unlock (Lås opp mobilen) exercise component
   */

  const [correctSolution, setCorrectSolution] = useState("");
  // The word that is the correct solution
  const [solutionLength, setSolutionLength] = useState(0);
  // The length of the correct word
  const [userAnswer, setUserAnswer] = useState("");
  // The letters joined together as a word that the player guesses
  const backendLetters = []
  // List of letters for letters from backend
  const [letters, setLetters] = useState([]);
  // List of letters for the letter buttons in numpad
  const [image, setImg] = useState(null)
  // Image of correct solution
  let isFinished = false;
  // Boolean for if a correct or incorrect answer is given
  let setDisabled = false
  // Boolean to set buttons disabled property
  let feedback
  // String variable to fill with type of content to trigger correct response in NextExerciseBtn
  let count = 0;
  // Int for numpad button css to give each button an indivial id with increasing value
  const [userAnswerList, setUserAnswerList] = useState([]);
  // List containting letters from the userAnswer, used to present answer in Answerlist
  const answerList = [];
  // List containing blank spaces and guessed letters. Should have equal length to correctSolution length

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };

  const [audioDisabled, setAudioDisabled] = useState(false);

  const question = "Hva ser du på bildet? Skriv ordet!";
  /**
   * Funciton to fetch content from database
   * Sets @variable backendLetters to contain the letters from database,
   * then sets letters to contain content from backendLetters, and
   * sets Image to fetched image from database
   */
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

      });
  }


  /**
   * Function to check if @variable userAnswer is correct. 
   * Sets @variable feedback based on if the userAnswer is 
   * the same as @variable correctSolution.
   * If @variable userAnswer is equal in length to @variable correctSolution 
   * then @variable isFinished is set to true regardless if the answer is correct
   * If userAnswer is correct, then buttons disable @variable is set to true
   */
  function checkAnswer() {
    if (userAnswer.length === solutionLength) {
      if (userAnswer === correctSolution) {
        feedback = "correct"
      }
      else {
        feedback = "incorrect"
      }
      isFinished = true
    }
    if (isFinished) {
      setDisabled = true
    }
  }



  /**
   * Function to register letters from buttons into userAnswer and userAnswerList
   */
  function registerLetterinAnswer(buttonLetter) {
    if (userAnswer.length < solutionLength) {
      setUserAnswer(userAnswer + buttonLetter);
      userAnswerList.push(buttonLetter.toUpperCase());
    }
  }

  /**
   * Function to present the letters from userAnswer list to answerList containing the guessed letters 
   * and adding the correct amount of blank spaces to present the correct solution length
   */
  function presentAnswer() {
    for (let i = 0; i <= userAnswerList.length; i++) {
      answerList.push(userAnswerList[i]);
    }
    answerList.pop();

    if (answerList.length < solutionLength) {
      for (let i = answerList.length; i < solutionLength; i++) {
        answerList.push("_");
      }
    }
  }

  /**
   * Function to "backspace" or remove the last guessed letter
   */
  function removeLastLetter() {
    if (userAnswer.length === 1 || userAnswer.length < 1) {
      setUserAnswer("")
      setUserAnswerList([])
      presentAnswer()
    }
    for (let x = 0; x < userAnswer.length; x++) {
      answerList.pop()
    }
    userAnswerList.pop()
    answerList.pop()
    let tempAnswer = userAnswer.substring(0, userAnswer.length - 1)
    setUserAnswer(tempAnswer)
  }

  // Runs the function to present saved values to current state
  presentAnswer();

  // Variable to present answerlist as individual p elements to present in the return section
  let itemList = answerList.map((item) => {
    return <p className={classes.guessP}>{item}</p>;
  });

  // Runs function to check current state
  checkAnswer()

  /**
   * Function to set count variable
   * @returns String containing numpadID and currenct count int as string, to use as id for letter buttons
   */
  function setButtonID() {
    count++
    return "numpadButton" + count.toString()
  }

  /**
   * Function to take the parent state to the next step, which is feedback
   * Gives an amount of points to show during the feeback step; 1 if the answer was correct, 0 if incorrect.
   */
  const handleNextTask = () => {
    if (feedback === 'correct') {
      showFeedback(1, 1);
    } else {
      showFeedback(0, 1);
    }
  };


  useEffect(() => {
    getContent()
  }, [])

  function fireAudio() {
    setAudioDisabled(true);
    playAudio(unlockaudio);
    setTimeout(() => {
      setAudioDisabled(false);
    }, 4000);
  }

  return (
    <>
      <NavBar />
      <Paper className={classes.root}>
        <div className={classes.progresscontainer}>
          <h1 className={className.exerciseType}>Skriv ordet</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={question} fireAudio = {fireAudio} disabeld = {audioDisabled}></Question>
        <div id='content' className={classes.content}>
          <img src={image} alt="solutionImage" className={classes.unlockImg}></img>
          <div className={classes.contentRow}>
            <div className={classes.guessRow}>
              <div className={classes.guess} id="guess">
                {itemList}
              </div>
              <IconButton variant="contained" color="primary" disabled={setDisabled} onClick={removeLastLetter} className={classes.backArrow} id="backArrow">
                <KeyboardBackspaceIcon />
              </IconButton>
            </div>
            <div className={classes.gridLetters}>
              {letters.map((letter, count) => (
                <>
                  <button id={setButtonID()} key={count} disabled={setDisabled} onClick={() => {
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
          {feedback === 'incorrect' && (
            <Typography className={classes.explanation}>
              Fasit: {correctSolution}
            </Typography>
          )}
          <NextExerciseBtn
            answerState={feedback}
            handleNextTask={handleNextTask}
          />
        </div>
      </Paper>
    </>
  )
}

export default UnlockPad;
