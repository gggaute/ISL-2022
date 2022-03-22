import React from 'react'
import ContentHeader from './ContentHeader'
import Question from './Question'
import Task from './Task'
import Words from './Words'
import { useState } from 'react'
import CheckAnswer from './CheckAnswer'
import FeedbackBox from './FeedbackBox'
import $ from 'jquery'
// import { FcPrevious, FcNext } from 'react-icons/fc'
import ExerciseContainer from './ExerciseContainer'

const ContentContainer = ({
  id,
  showFeedback,
  progress,
  possible,
  nextExercise,
}) => {


  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      {/* <UnlockPad input={property}></UnlockPad> */}
      <ExerciseContainer
        id={id}
        showFeedback={showFeedback}
        progress={progress}
        possible={possible}
        nextExercise={nextExercise}
      />
      {/* <NextExerciseBtn
            answerState={'correct'}
            handleNextTask={nextExercise}
          /> */}
    </div>
  );
};

export default ContentContainer;
