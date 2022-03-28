import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: '600',
    margin: 'auto',
    textAlign: 'center',
  },
  gridText: {
    paddingBottom: theme.spacing(0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    float: 'right',
  },
  explanation: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default useStyles;