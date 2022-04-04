import React from 'react'
import useStyles from './drainn_style'
import './drainn_style.css'


const Word = ({ word, missingWord, onClick, disabled }) => {
  const className = useStyles();
  return (
    <button className={className.wordButton} onClick={() => onClick(word)} disabled={disabled}>{word}</button>
  )
}

export default Word