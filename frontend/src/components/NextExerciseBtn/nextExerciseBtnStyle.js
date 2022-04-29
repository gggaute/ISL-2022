// Styling for the NextExerciseBtn-component

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // AnswerElement: Green feedback element when the user answers correctly
  answerElement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "4px",
  },
  // AnswerElementWrong: Red feedback element when the user answers wrong
  answerElementWrong: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightcoral',
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingRight: "4px",
  },
  // BtnParent: Container around the arrow-button
  btnParent: {
    flex: '1',
    margin: 'auto',
    width: '50%',
    paddingRight: "8px",
    paddingLeft: "8px",
  },
  // AnswerBtn: Arrow-button on colored feedback element, taking the user to the next screen
  answerBtn: {
    marginRight: "4px",
    minWidth: '45px',
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: 'lightgrey',
    },
  },
  // Icons: Right/Wrong icon (i.e. V or X)
  icons: {
    color: 'white',
  },
  // CardHeader: Containing the wrong-icon and the text "Feil!"
  cardHeader: {
    padding: '10px'
  }
}));
export default useStyles;