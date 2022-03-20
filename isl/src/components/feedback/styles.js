import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(100),
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    display: 'block',
  },
  image: {
    maxHeight: '30vh',
    marginBottom: theme.spacing(1),
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '24vw',
    },
  },
  textBox: {
    display: 'block',
    maxWidth: '70%',
  },
  text: {
    maxWidth: theme.spacing(78),
    marginBottom: theme.spacing(1),
    float: 'left',
    display: 'inline-block',
    fontSize: "1em",
  },
}));

export default useStyles;