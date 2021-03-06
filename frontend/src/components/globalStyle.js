// ExerciseStyle: Global stylesheet that can be referred to from any component

import { makeStyles } from '@mui/styles';

const globalStyle = makeStyles((theme) => ({
  // Root: Paper behind every exercise and feedback-component
  root: {
    backgroundColor: '#F5F5F5',
    maxWidth: '70%',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: "20px",
    marginBottom: '20px',
    padding: "4px",
  },
  // Layout: Exercise-content (everything under the audio-button)
  layout: {
    backgroundColor: '#F5F5F5',
    margin: "4px",
    padding: "28px",
    overflow: 'hidden',
    overflowY: 'auto',
  },
  // ProgressContainer: Container for exercise-header and the progressBar (everything over the exercise text)
  progresscontainer: {
    margin: "4px",
  },
  // ProgressBar: The entire progressbar
  progressBar: {
    height: "15px",
    margin: "10px",
  },
  // TextFeedback: The text in the feedbackComponent
  textFeedback: {
    margin: '15px',
    fontSize: 'xx-large'
  },
  // QuestionDiv: Div around the question text and the audio-button.
  questionDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  // Question: The text in the question-component showing the exercise task/question/explanation
  question: {
    fontWeight: "bold",
    fontSize: "1.3em",
    margin: "0 14px",
  },
  // QuestionLine: HR (horisontal rule / line) under question/audio
  questionLine: {
    borderTop: "1px solid #7CA3EE",
    margin: "5px 14px",
  },
  // AudioBtn: The button in the Question-component to press for audio
  audioBtn: {
    borderRadius: "5px",
    width: "fit-content",
    marginRight: "14px",
  },
  // Explanation: The typography containing the explanation for each exercise
  explanation: {
    width: "100%",
    padding: 0,
    margin: 0,
    marginTop:  "10px",
  },
  // GridText: Grid container, containing a HR (horisontal rule) and the question-text
  gridText: {
    paddingBottom: 0,
    padding: 0,
  },
  // ExerciseType: Name of exercise (exercise-header)
  exerciseType: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bolder',
  },
}));

export default globalStyle;