import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "16px",
    marginBottom: "16px",
    padding: "64px",
    maxWidth: "100px",
  },
  cardLeft: {
    maxWidth: "1000px",
    display: 'inline-block',
    padding: "12px",
  },
  cardRight: {
    maxWidth: "1000px",
    display: 'inline-block',
    padding: "12px",
    backgroundColor: 'lightBlue',
  },
  avatarLarge: {
    width: "55px",
    height: "55px",
    margin: "5px",
  },
  text: {
    margin: '6px 0px 6px 0px',
  },
  floatLeft: {
    float: 'left',
  },
  floatRight: {
    float: 'right',
  },
  parentLeft: {
    display: 'flex-start',
  },
  parentRight: {
    display: 'flex-end',
  },
}));

export default useStyles;