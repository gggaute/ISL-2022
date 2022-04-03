import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  gridText: {
    paddingBottom: 0,
  },
  chatList: {
    width: 'inherit',
    overflow: 'hidden',
    overflowY: 'scroll',
    maxHeight: 'inherit',
  },
  exerciseType:{
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bolder',
  }
}));

export default useStyles;