import React from 'react'
import './drainn_style.css'
import { Button } from '@mui/material';

const CheckAnswer = ({ onClick, disabled, onload }) => {
  return (
    <Button className="checkAnswerBtn" variant="contained" color='primary' onClick={onClick} disabled={onload ? true : disabled}>
      Sjekk svar
    </Button>
  )
}

export default CheckAnswer