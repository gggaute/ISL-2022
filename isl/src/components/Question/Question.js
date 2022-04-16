import React from 'react'
import '../Fill-In-Word/drainn_style'
import useStyles from "../Fill-In-Word/drainn_style";
import exerciseStyle from "../exerciseStyle";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton } from '@mui/material';

/**
 * TODO
 * @param {*} param0 
 * @returns 
 */
const Question = ({ question, fireAudio, disabled }) => {
  const className = useStyles();
  const classesBase = exerciseStyle();
  const classes = { ...className, ...classesBase };

  return (
    <>
      <p className={classes.question}>{question}</p>
      <IconButton
        onClick={fireAudio}
        disabled={disabled}
        data-testid="volume"
      >
        <VolumeUpIcon />
      </IconButton>
      < hr className={classes.questionLine} ></hr >
    </>
  )
}

export default Question