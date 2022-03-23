import React from 'react'
import './drainn_style.css'
import useStyles from "./drainn_style";

const Question = ({ question }) => {
  const className = useStyles()
  return (
    <div className= {className.questionclass}>
      <p>{question}</p>
    </div>
  )
}

export default Question