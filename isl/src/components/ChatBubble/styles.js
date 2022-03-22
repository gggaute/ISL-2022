import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    maxWidth: theme.spacing(100),
  },
  cardLeft: {
    maxWidth: theme.spacing(50),
    display: 'inline-block',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  cardRight: {
    maxWidth: theme.spacing(50),
    display: 'inline-block',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: 'lightBlue',
  },
  avatarLarge: {
    width: theme.spacing(4),
    height: theme.spacing(4),
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
    display: 'flex',
  },
  parentRight: {
    display: 'flex-end',
  },
}));

export default useStyles;