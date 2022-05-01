// Styling for the Feedback-component

import { makeStyles } from '@mui/styles';
import { margin } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  // Points: Point-count (i.e. '0 / 1')
  points: {
    backgroundColor: 'lightgreen',
    padding: "15px",
    margin: "auto",
    width: '50%',
  },
  // BtnParent: Container for next exercise button
  btnParent: {
    flex: '1',
    margin: 'auto',
    width: '90%',
    padding: "30px 8px",
  },
  pointsText: {
    fontSize: "xx-large"
  }
}));

export default useStyles;