import React from 'react'
import Word from './Word'
import './drainn_style.css'

const Words = ({ onClick, words, disabled }) => {
  return (
      <div className="wordGrid">
        {words.map((word) => (<Word word={word} disabled={disabled} onClick={onClick}></Word>))}
      </div>
  )
}

export default Words