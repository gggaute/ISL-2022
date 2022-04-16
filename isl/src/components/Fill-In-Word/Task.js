import React from 'react'
import $ from "jquery"
import { useEffect } from 'react'
import './drainn_style.css'
import { Card } from '@mui/material';


/**
 * TODO
 * @authors
 * @param {object} props
 * @property {} sentence
 * @property {} onload
 * @property {} missingWord
 * @property {} missingWordIndex
 * @returns 
 */
const Task = ({ sentence, onload, missingWord, missingWordIndex }) => {
  
  useEffect(() => {
    console.log(missingWordIndex);
  }, [])

  /**
   * TODO
   * @param {} word 
   * @returns 
   */
  const checkStart = (word) => {
    if (onload) {
      return ""
    }
    else {
      $(".taskPBorder").addClass("vis");
      return word
    }
  }

  return (
    <Card className='task'>
      <div className='taskGrid'>
        {sentence.map((word, i) => (i === missingWordIndex ?
          <div className="wordContainer"> <p className="taskPBorder"> {checkStart(word)} </p> </div>
          :
          <p> {word} </p>
        ))}
      </div>
    </Card>
  )
}

export default Task