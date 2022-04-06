import React from 'react'
import Word from './Word'
import './drainn_style.css'

const Words = ({ onClick, words, missingWord, disabled }) => {
  return (
      <div className="wordGrid">
        {words.map((word) => (<Word word={word} missingWord={missingWord} disabled={disabled} onClick={onClick}></Word>))}
      </div>
  )
}

export default Words