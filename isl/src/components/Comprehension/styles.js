// Styling for the Comprehension-component

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // HrDirection: TODO brukes denne lenger?
  hrDirection: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  // Text: The question-text
  textQ: {
    fontWeight: '600',
    margin: 'auto',
    textAlign: 'center',
    width: "100%",
  },
}));

export default useStyles;