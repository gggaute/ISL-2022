import React from 'react'
import useStyles from './drainn_style'
import './drainn_style.css'

/**
 * TODO
 * @authors 
 * @param {object} props
 * @property {string} word 
 * @property {function} onClick
 * @property {state} disabled 
 * @returns A button containing the word
 */
const Word = ({ word, onClick, disabled }) => {
  const className = useStyles();
  return (
    <button className={className.wordButton} onClick={() => onClick(word)} disabled={disabled}>{word}</button>
  )
}

export default Word