import React from 'react'
import '../Fill-In-Word/drainn_style'
import useStyles from "../Fill-In-Word/drainn_style";
import exerciseStyle from "../exerciseStyle";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton } from '@mui/material';

const Question = ({ question, fireAudio, disabled }) => {
  const className = useStyles();
  const classesBase = exerciseStyle();
  const classes = { ...className, ...classesBase };

  return (
    <div className={classes.question}>
      <p>{question}</p>
      <IconButton
              onClick={fireAudio}
              disabled={disabled}
              data-testid="volume"
            >
              <VolumeUpIcon />
            </IconButton> 
    </div>
  )
}

export default Question