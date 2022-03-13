import React from 'react'
import ContentHeader from './ContentHeader'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Task from './Task'
import Words from './Words'
import { useState } from 'react'
import CheckAnswer from './CheckAnswer'
import FeedbackBox from './FeedbackBox'
import $ from "jquery"
// import { FcPrevious, FcNext } from 'react-icons/fc'
import ExerciseContainer from './ExerciseContainer'
import UnlockPad from '../unlockPad'
import egg from './img/egg.png'
import Navbar from './Navbar'


const ContentContainer = () => {
  let property = {correctSolution: "egg", letters: ["e","g","g","a","b","c","d","f","h"], image: egg}


  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      <ProgressBar></ProgressBar>
      {/* <UnlockPad input={property}></UnlockPad> */}
      <ExerciseContainer></ExerciseContainer>
    </div>
  )
}

export default ContentContainer
