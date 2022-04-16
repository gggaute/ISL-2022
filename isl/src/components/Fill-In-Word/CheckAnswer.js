import React from 'react'
import './drainn_style.css'
import { Button } from '@mui/material';

/**
 * TODO
 * This is a component for the check-answer-button in Fill-In-Word
 * @author 
 * @param {object} props
 * @property {function} onClick Function
 * @property {} disabled State
 * @property {} onload State
 * @returns The mui-button for check-answer
 */
const CheckAnswer = ({ onClick, disabled, onload }) => {
  return (
    <Button className="checkAnswerBtn" variant="contained" color='primary' onClick={onClick} disabled={onload ? true : disabled}>
      Sjekk svar
    </Button>
  )
}

export default CheckAnswer;
