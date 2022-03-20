import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridText: {
    paddingBottom: theme.spacing(0),
  },
  chatList: {
    width: 'inherit',
    overflow: 'hidden',
    overflowY: 'scroll',
    maxHeight: 'inherit',
  },
}));

export default useStyles;