import React from 'react'

const CheckAnswer = ({ onClick, disabled }) => {

  return (
    <button id="checkAnswerBtn" onClick={onClick} disabled={disabled}>
      Sjekk svar
    </button>
  )
}

export default CheckAnswer
