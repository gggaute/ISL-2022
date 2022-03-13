import React from 'react'
import Word from './Word'

const Words = ({ onClick, words, missingWord, disabled }) => {

  return (
    <div className='word-grid'>
      {
        words.map((word) => (<Word word={word} missingWord={missingWord} disabled={disabled} onClick={onClick}></Word>))
      }
    </div>
  )
}

export default Words
