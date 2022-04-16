import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: '600',
    margin: 'auto',
    textAlign: 'center',
  },
  gridText: {
    paddingBottom: 0,
  },
  menuButton: {
    marginRight: "8px",
    float: 'right',
  },
}));

export default useStyles;