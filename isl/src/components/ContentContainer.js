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
import { FcPrevious, FcNext } from 'react-icons/fc'
import ExerciseContainer from './ExerciseContainer'


const ContentContainer = () => {

  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      <ProgressBar></ProgressBar>
      <ExerciseContainer></ExerciseContainer>
    </div>
  )
}

export default ContentContainer
