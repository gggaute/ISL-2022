import React from 'react'
import useStyles from "./drainn_style";
import './drainn_style.css'

const CheckAnswer = ({ onClick, disabled, onload }) => {
  const className = useStyles()

  return (
    <button className="checkAnswerBtn" onClick={onClick} disabled={onload ? true : disabled}>
      Sjekk svar
    </button>
  )
}

export default CheckAnswer