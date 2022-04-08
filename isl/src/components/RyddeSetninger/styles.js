import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chosenWords: {
    padding: "4px",
    minHeight: '2.5em',
    backgroundColor: 'white',
    borderRadius: '11px',
    boxShadow: 'inset 0px 1px 6px rgba(147, 145, 145, 0.48)',
  },
  wordBtn: {
    textTransform: 'none',
    fontWeight: 'normal',
    '&:hover': {
      color: 'black',
    },
  },
  checkAnswerBtn: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  exerciseType:{
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bolder',
  }
}));

export default useStyles;