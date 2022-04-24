import React from "react";
import "../FillInWord/styles";
import useStyles from "../FillInWord/styles";
import exerciseStyle from "../exerciseStyle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";
import { useState } from "react";

/**
* This is a component to globally coordinate the question in each exercise (the text introducing/explaining the exercise).
* @author Guri, Ingvild
* @param {object} props
* @property {string} question The sentence from each exercise-type that is to be displayed.
* @property {function} fireAudio The function to be fired onclick on the audio-button
* @property {boolean} disabled State to check if the audiobutton is disabled or not
* @returns The question-component with an audio-button and a hr-line.
*/

const Question = ({ question, audio, playAudio }) => {

  /* Objects that take both the component style and a common style between all
  exercises, to finally integrate both style objects into the classes object
  to be used in the component */
  const className = useStyles();
  const classesBase = exerciseStyle();
  const classes = { ...className, ...classesBase };
  const [disabled, setDisabled] = useState(false);

  function fireAudio() {
    setDisabled(true);
    playAudio(audio);
    setTimeout(() => {
      setDisabled(false);
    }, 7000);
  }

  return (
    <>
      <hr className={classes.questionLine}></hr>
      <div className={classes.questionDiv}>
        <p className={classes.question}>{question}</p>
        <IconButton
          onClick={() => fireAudio()}
          disabled={disabled}
          data-testid="volume"
          className={classes.audioBtn}
        >
          <VolumeUpIcon />
        </IconButton>
      </div>
      <hr className={classes.questionLine} ></hr>
    </>
  );
};

export default Question;
