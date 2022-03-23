import React from 'react'
import Word from './Word'
import useStyles from "./drainn_style";
import './drainn_style.css'

const Words = ({ onClick, words, missingWord, disabled }) => {
  const className = useStyles()

  return (
    <div className="wordGrid">
      {
        words.map((word) => (<Word word={word} missingWord={missingWord} disabled={disabled} onClick={onClick}></Word>))
      }
    </div>
  )
}

export default Words