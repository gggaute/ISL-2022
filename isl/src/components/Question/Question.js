import React from 'react'
import '../Fill-In-Word/drainn_style'
import useStyles from "../Fill-In-Word/drainn_style";
import exerciseStyle from "../exerciseStyle";

const Question = ({ question }) => {
  const className = useStyles();
  const classesBase = exerciseStyle();
  const classes = { ...className, ...classesBase };

  return (
    <>
      <p className={classes.question}>{question}</p>
      <hr className={classes.questionLine}></hr>
    </>
  )
}

export default Question