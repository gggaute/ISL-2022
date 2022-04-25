// Styling for the RyddeSetninger-component

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // ChosenWords: Area where chosen/clicked words are put
  chosenWords: {
    padding: "4px",
    minHeight: '2.5em',
    backgroundColor: 'white',
    borderRadius: '11px',
    boxShadow: 'inset 0px 1px 6px rgba(147, 145, 145, 0.48)',
    margin: "10px 0",
  },
  // WordBtn: Each button containing words
  wordBtn: {
    textTransform: 'none',
    fontWeight: 'bold',
  },
  // CheckAnswerBtn: Container for checkAnswerBtn
  checkAnswerBtn: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

export default useStyles;