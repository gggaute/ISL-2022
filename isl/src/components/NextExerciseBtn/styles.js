import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  answerElement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  answerElementWrong: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightcoral',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  answerBtn: {
    backgroundColor: 'white',
    marginRight: theme.spacing(1),
  },
  btnParent: {
    flex: '1',
    margin: 'auto',
    width: '50%',
    paddingRight: theme.spacing(1.5),
    paddingLeft: theme.spacing(2),
  },
  icons: {
    color: 'white',
  },
}));
export default useStyles;