import React from 'react'
import $ from "jquery"
import { useEffect } from 'react'

const Task = ({ sentence, onload, missingWord, missingWordIndex }) => {

  useEffect(() => {
    console.log(missingWordIndex);
  }, [])

  const checkStart = (word) => {
    if(onload){
      console.log("går inn i if")
      return ""
    }
    else{
      $(".taskPBorder").addClass("vis");
      console.log("går inn i else")
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