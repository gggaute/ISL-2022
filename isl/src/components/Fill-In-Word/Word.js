import React from 'react'
import useStyles from "./drainn_style";
import './drainn_style.css'

const Word = ({ word, missingWord, onClick, disabled }) => {
  const className = useStyles()
  return (
    // <div className='wordBox' onClick={() => onClick(word)}>
    //     <p>{word}</p>
    // </div>

    <button className="wordBox" onClick={() => onClick(word)} disabled={disabled}>{word}</button>
  )
}

export default Word