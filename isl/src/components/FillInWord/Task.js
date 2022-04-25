import React from 'react'
import $ from "jquery"
import { useEffect } from 'react'
import './general.css'
import { Card } from '@mui/material';


/**
 * The component for the sentence in the FillInWord exercise.
 * @author Gaute
 * @param {object} props
 * @property {object} sentence A list of the words in the set sentence. On load it is set to contain the words to the correct sentence.
 * @property {boolean} onload Is true on first load of the exercise, false after clicks on buttons
 * @property {string} missingWord The word at the empty place in the sentence. On load it is set to the correct missing word.
 * @property {number} missingWordIndex The index to the empty place in the sentence.
 * @returns The Card containing the sentence instance for the FillInWord-exercise
 */
const Task = ({ sentence, onload, missingWord, missingWordIndex }) => {
  useEffect(() => {
    console.log(missingWordIndex);
  }, [])

  /**
   * Function to control the visibility of the 'empty' place in the sentence. Depending on if a word has been clicked.
   * @param {string} word The word at the empty place in the sentence.
   * On load it is set to the correct missing word (but this won't display), is updated to the clickedWord on user interaction and displayed.
   * @returns The clicked word.
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