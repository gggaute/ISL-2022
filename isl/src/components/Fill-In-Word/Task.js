import React from 'react'
import $ from "jquery"
import { useEffect } from 'react'
import './drainn_style.css'
import useStyles from './drainn_style'
import { Card } from '@mui/material';



const Task = ({ sentence, onload, missingWord, missingWordIndex }) => {
  const className = useStyles();

  useEffect(() => {
    console.log(missingWordIndex);
  }, [])

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