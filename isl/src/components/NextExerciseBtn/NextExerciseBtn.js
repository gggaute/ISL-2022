import React from 'react';
import { Button, Card, Grid, CardHeader } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * Button used to go to next exercise in set. It changes color depending on whether right or
 * wrong answer was given.
 * @author Simen
 * @param {object} props
 * @property {function} handleNextTask OnClick function for component button.
 * @property {boolean} answerState Decides what type of component will be returned depending on
 * user answer.
 * @returns Card component with onClick button.
 */

function NextExerciseBtn({ handleNextTask, answerState }) {
  switch (answerState) {
    case 'incorrect':
      return (
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<CancelIcon/>}
              title=" Feil! "
            />
            <div>
              <Button
                data-testid="resultButtonIncorrect"
                onClick={handleNextTask}
                fullWidth
                size="small"
              >
                <TrendingFlatIcon fontSize="large" />
              </Button>
            </div>
          </Card>
        </Grid>
      );
    case 'correct':
      return (
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<CheckCircleIcon/>}
              title="Riktig!"
            />
            <div>
              <Button
                data-testid="resultButton"
                onClick={handleNextTask}
                fullWidth
                size="small"
              >
                <TrendingFlatIcon fontSize="large" />
              </Button>
            </div>
          </Card>
        </Grid>
      );
    default:
      return <></>;
  }
}

export default NextExerciseBtn;
