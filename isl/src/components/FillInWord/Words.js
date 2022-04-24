import React from 'react'
import Word from './Word'
import './general.css'

/**
 * This is a component to generate the grid containing the word-buttons in Fill-In-Word
 * Calls the Word-component.
 * @author Gaute
 * @param {object} props 
 * @property {function} onClick Function executing on clicks on the buttons
 * @property {object} words A list of the words on word-buttons (answerWords from backend)
 * @property {state} disabled State to check if the buttons are disabled or not
 * @returns The grid containing the word-buttons
 */
const Words = ({ onClick, words, disabled }) => {
  return (
      <div className="wordGrid">
        {words.map((word) => (<Word word={word} disabled={disabled} onClick={onClick}></Word>))}
      </div>
  )
}

export default Words