import React from 'react'
import './fillInWordStyle.css'
import { Button } from '@mui/material';

/**
 * This is a component for the check-answer-button in Fill-In-Word
 * @author Gaute
 * @param {object} props
 * @property {function} onClick Function executing on clicks on the buttons
 * @property {boolean} disabled State to check if the buttons are disabled or not
 * @property {boolean} onload Is true on first load of the exercise, false after clicks on buttons
 * @returns The mui-instance for the check-answer-button
 */
const CheckAnswer = ({ onClick, disabled, onload }) => {  
  return (
    <Button className="checkAnswerBtn" variant="contained" color='primary' onClick={onClick} disabled={onload ? true : disabled}>
      Sjekk svar
    </Button>
  )
}

export default CheckAnswer;
