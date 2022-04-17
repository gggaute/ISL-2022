import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  ButtonGroup,
  Button,
  Paper,
} from '@mui/material';
import chataudio from '../../assets/audiofiles/chatAudio.mp3';
import gingerMan from '../../assets/images/gingerMan.png';
import capsMan from '../../assets/images/capsMan.png';
import frenchMan from '../../assets/images/frenchMan.png';
import brunetteWoman from '../../assets/images/brunetteWoman.png';
import blondeWoman from '../../assets/images/blondeWoman.png';
import muslimWoman from '../../assets/images/muslimWoman.png';
import defaultMan from '../../assets/images/defaultMan.png';
import ChatBubble from '../ChatBubble/ChatBubble';
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';
import ProgressBar from '../ProgressBar';
import axios from 'axios';
import useStyles from './styles';
import exerciseStyles from '../exerciseStyle';
import NavBar from "../NavBar/Navbar";
import Question from '../Question/Question';
import "../exerciseStyle.css";


/**
 * This is the chat exercise component that is playable from Playsets.
 * @author Maja, Julie, Even, Simen, Phajsi
 * @param {object} props
 * @property {integer} id This is the id of the chat exercise being played.
 * @property {function} showFeedback Tracks a user's score when playing an exercise in a set and
 * which feedback case to show after finishing the exercise.
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @property {function} restartSet Sets setStep in Playsets to "overview" so the user can exit
 * the exercise set from any exercise.
 * @property {function} playAudio Returns a new HTMLAudioElement.
 * @returns A chat exercise instance.
 */
const Chat = ({
  id,
  nextExercise,
  showFeedback,
  progress,
  possible,
  playAudio,
}) => {
  const [sendericon, setSendericon] = useState();
  const [receivericon, setReceivericon] = useState();

  // Null if user hasn't given an answer, "correct" or "incorrect" if user has given an answer.
  const [answerState, setAnswerstate] = useState(null);

  // Keeps track of which task in the exercise the user is currently on.
  const [taskStep, setTaskStep] = useState(1);
  const [score, setScore] = useState(0);
  const [totalPossibleScore, setTotalPossibleScore] = useState(0);

  // List that keeps track of conversation history in the chat exercise.
  const [chatHistory] = useState([]);

  const [disabled, setDisabled] = useState(false);

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = exerciseStyles();
  const classes = { ...className, ...classesBase };


  // Data for the chat exercise from backend.
  const [formData, setFormData] = useState({});

  const question = 'Du har fått en melding! Svar på meldingen ved å trykke på riktig svar.';


  /**
   * Function that checks if the input argument corresponds to a case
   * with a similar name, in order to return the right image object.
   * @param {string} iconName Icon name from the database.
   * @returns The image object corresponding the input argument.
   */

  const transformIcon = (iconName) => {
    switch (iconName) {
      case 'gingerMan':
        return gingerMan;
      case 'capsMan':
        return capsMan;
      case 'frenchMan':
        return frenchMan;
      case 'brunetteWoman':
        return brunetteWoman;
      case 'blondeWoman':
        return blondeWoman;
      case 'muslimWoman':
        return muslimWoman;
      default:
        return defaultMan;
    }
  };

  /**
   * TODO ?
   */
  function getContent() {
    axios
      .get(`/api/chat/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      .then((res) => {
        chatHistory.push(res.data.chatquestion1);
        setFormData(res.data);
        const avatarS = transformIcon(res.data.sendericon);
        setSendericon(avatarS);
        const avatarR = transformIcon(res.data.receivericon);
        setReceivericon(avatarR);
      });
  }

  /**
   * TODO
   */
  const handleNextTask = () => {
    setAnswerstate(null);
    if (!formData[`chatquestion${taskStep}`]) {
      // If there are no more tasks then showfeedback is fired.
      showFeedback(score, totalPossibleScore);
    } else {
      // Else it adds the new task to the chat history list.
      chatHistory.push(formData[`chatquestion${taskStep}`]);
    }
  };

  /**
   * TODO
   * @param {*} answer 
   */
  function handleAnswer(answer) {
    // Checks if answer is correct or not.
    if (answer === formData[`correctanswer${taskStep}`]) {
      setAnswerstate('correct');
      setScore(score + 1);
      setTotalPossibleScore(totalPossibleScore + 1);
    } else {
      setAnswerstate('incorrect');
      setTotalPossibleScore(totalPossibleScore + 1);
    }
    setTaskStep(taskStep + 1);
    chatHistory.push(answer);
  }

  /**
   * TODO
   * Function for randomizing the answers so the correct answer isn't always the same button.
   * @returns 
   */
  function random() {
    const buttonList = [
      formData[`answer${taskStep}1`],
      formData[`answer${taskStep}2`],
      formData[`correctanswer${taskStep}`],
    ];
    buttonList.sort(() => Math.random() - 0.5);
    return buttonList.map((chats, index) => {
      return (
        <Button
          key={index}
          style={{ marginTop: 3, borderRadius: '25px' }}
          onClick={() => handleAnswer(chats)}
          data-cy="chat-answer-button"
        >
          {chats}
        </Button>
      );
    });
  }

  
  function fireAudio() {
    setDisabled(true);
    playAudio(chataudio);
    setTimeout(() => setDisabled(false), 7000);
  }
  

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Paper className={classes.root} id="rootPaper">
      {/* <ContentHeader></ContentHeader> */}
        <div className={classes.progresscontainer}>
          <h1 className={classes.exerciseType}>CHAT</h1>
          <ProgressBar progress={progress} possible={possible} />
        </div>
        <Question question={question} fireAudio={fireAudio} disabled={disabled} />
        <Paper className={classes.layout} elevation={0}>
          <Grid container spacing={3}>
            {chatHistory.map((chat, i) => {
              if (i % 2 === 0) {
                return <ChatBubble key={i} chat={chat} icon={sendericon} />;
              }
              return <ChatBubble key={i} chat={chat} icon={receivericon} right />;
            })}
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems="flex-end"
            >
              {answerState === null && (
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained secondary button group"
                  variant="contained"
                  color="secondary"
                  disableElevation
                  className={classes.btn}
                >
                  {random()}
                </ButtonGroup>
              )}
            </Grid>
            {answerState !== null && (
              <>
                <hr className={classes.hr} />
                <Typography className={classes.explanation}>
                  {formData[`explanation${taskStep-1}`]}
                </Typography>
              </>
            )}
            <NextExerciseBtn
              answerState={answerState}
              handleNextTask={handleNextTask}
            />
          </Grid>
        </Paper>
      </Paper >
    </>
  );
};

export default Chat;