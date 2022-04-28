import React from 'react';
import { LinearProgress } from '@mui/material/';
import globalStyles from "../globalStyle";

/**
 * This is the progress bar displayed at the top of every exercise,
 * keeping track of the overall progress in a set.
 * @author Group 2021
 * Revised by Guri
 * @param {object} props
 * @property {integer} progress Counts how many exercises the user has played.
 * @property {integer} possible Total exercises in the set.
 * @returns A progress bar.
 */
const ProgressBar = ({ progress, possible }) => {
  const MIN = 1;
  const MAX = possible + 1;
  
  /**
   * Calculates how much of the progressBar is going to
   * be filled for each completed exercise.
   * Lets say that an exercise set has 6 exercises, then for
   * each completed exercise the bar should be filled 16,66 percent more.
   */
  const normalise = (progress) => ((progress - MIN) * 100) / (MAX - MIN);

  const classes = globalStyles();

  return (
    <LinearProgress
      color="secondary"
      value={normalise(progress)}
      variant="determinate"
      className={classes.progressBar}
    />
  );
};
export default ProgressBar;
