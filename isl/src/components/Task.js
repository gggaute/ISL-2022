import React from 'react'
import $ from "jquery"

const Task = ({ sentence, onload, missingWord, missingWordIndex }) => {

  const checkStart = (word) => {
    if(onload){
      return ""
    }
    else{
      $(".taskPBorder").addClass("vis");
      return word
    }
  }


  return ( 
    <div className='task'>
      {sentence.map((word, i) => (i === missingWordIndex ?
        <div id="wordContainer"> <p className="taskPBorder"> {checkStart(word)} </p> </div>
          :
        <p> {word} </p>
      ))}
    </div>
  )
}

export default Task
