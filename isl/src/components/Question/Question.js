import React,{ useState, useEffect } from 'react'
import '../Fill-In-Word/drainn_style'
import useStyles from "../Fill-In-Word/drainn_style";
import exerciseStyle from "../exerciseStyle";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton } from '@mui/material';

/**
 * @property {function} playAudio Returns a new HTMLAudioElement.
 */

const Question = ({ question, audio, playAudio}) => {
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
    <div className={classes.question}>
      <p>{question}</p>
      <IconButton
              onClick={() => fireAudio()}
              disabled={disabled}
              aria-label="volume"
            >
              <VolumeUpIcon />
            </IconButton> 
    </div>
  )
}

export default Question