import React from 'react'
import useStyles from './fillInWordStyle'
import './fillInWordStyle.css'

/**
 * This is a component to generate each word-button in Fill-In-Word
 * @author Gaute
 * @param {object} props
 * @property {string} word The word that was called with the instance by the Words-component (mapping through the button-words fetched from database).
 * @property {function} onClick Function executing on clicks on the buttons
 * @property {boolean} disabled State to check if the buttons are disabled or not
 * @returns A button containing the word
 */
const Word = ({ word, onClick, disabled }) => {
  const className = useStyles();
  return (
    <button className={className.wordButton} onClick={() => onClick(word)} disabled={disabled}>{word}</button>
  )
}

export default Word