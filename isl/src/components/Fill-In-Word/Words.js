import React from 'react'
import Word from './Word'
import './drainn_style.css'

/**
 * TODO
 * @authors 
 * @param {object} props 
 * @property {function} onClick
 * @property {} words
 * @property {state} disabled
 * @returns 
 */
const Words = ({ onClick, words, disabled }) => {
  return (
      <div className="wordGrid">
        {words.map((word) => (<Word word={word} disabled={disabled} onClick={onClick}></Word>))}
      </div>
  )
}

export default Words