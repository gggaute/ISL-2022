// Styling for the Forståelse-component

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // GridText: Grid container, containing a HR (horisontal rule) and the question-text
  gridText: {
    paddingBottom: 0,
  },
  // Text: The question-text
  text: {
    fontWeight: '600',
    margin: 'auto',
    textAlign: 'center',
  },
}));

export default useStyles;