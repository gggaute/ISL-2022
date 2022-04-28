// Styling for the Feedback-component

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // Points: Point-count (i.e. '0 / 1')
  points: {
    backgroundColor: 'lightgreen',
    padding: "15px",
  },
  // BtnParent: Container for next exercise button
  btnParent: {
    flex: '1',
    margin: 'auto',
    width: '90%',
    paddingRight: "8px",
    paddingLeft: "8px",
    paddingBottom: "30px",
  },
}));

export default useStyles;