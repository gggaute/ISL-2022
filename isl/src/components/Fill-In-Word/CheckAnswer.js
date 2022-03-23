import React from 'react'
import useStyles from "./drainn_style";
import './drainn_style.css'

const CheckAnswer = ({ onClick, disabled }) => {
  const className = useStyles()

  return (
    <button classname="checkAnswerBtn" onClick={onClick} disabled={disabled}>
      Sjekk svar
    </button>
  )
}

export default CheckAnswer