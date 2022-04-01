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
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  cardRight: {
    maxWidth: "1000px",
    display: 'inline-block',
    paddingLeft: "16px",
    paddingRight: "16px",
    backgroundColor: 'lightBlue',
  },
  avatarLarge: {
    width: "64px",
    height: "64px",
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