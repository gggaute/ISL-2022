import React from "react";
import "../FillInWord/styles";
import useStyles from "../FillInWord/styles";
import exerciseStyle from "../exerciseStyle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";
import { useState } from "react";

/**
 * @property {function} playAudio Returns a new HTMLAudioElement.
 */

const Question = ({ question, audio, playAudio }) => {
  const className = useStyles();
  const classesBase = exerciseStyle();
  const classes = { ...className, ...classesBase };
  const [disabled, setDisabled] = useState(false);

  function fireAudio() {
    setDisabled(true);
    playAudio(audio);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  }

  return (
    <>
      <p className={classes.question}>{question}</p>
      <IconButton
        onClick={() => fireAudio()}
        disabled={disabled}
        aria-label="volume"
      >
        <VolumeUpIcon />
      </IconButton>
      <hr className={classes.questionLine}></hr>
    </>
  );
};

export default Question;
