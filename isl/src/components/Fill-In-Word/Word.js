import React from 'react'

const Word = ({ word, missingWord, onClick, disabled }) => {
  return (
    // <div className='wordBox' onClick={() => onClick(word)}>
    //     <p>{word}</p>
    // </div>

    <button className='wordBox' onClick={() => onClick(word)} disabled={disabled}>{word}</button>
  )
}

export default Word