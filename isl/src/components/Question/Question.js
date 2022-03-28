import React from 'react'
import '../Fill-In-Word/drainn_style'
import useStyles from "../Fill-In-Word/drainn_style";
import exerciseStyle from "../exerciseStyle";

const Question = ({ question }) => {
  const className = useStyles();
  const classesBase = exerciseStyle();
  const classes = { ...className, ...classesBase };

  return (
    <div className={classes.question}>
      <p>{question}</p>
    </div>
  )
}

export default Question