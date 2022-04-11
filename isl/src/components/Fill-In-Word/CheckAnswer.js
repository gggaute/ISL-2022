import React from 'react'
import useStyles from "./drainn_style";
import './drainn_style.css'
import { Button } from '@mui/material';

const CheckAnswer = ({ onClick, disabled, onload }) => {
  const className = useStyles()

  return (
    <Button className="checkAnswerBtn" variant="contained" color='primary' onClick={onClick} disabled={onload ? true : disabled}>
      Sjekk svar
    </Button>
  )
}

export default CheckAnswer