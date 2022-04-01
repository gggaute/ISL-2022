import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: '12px',
  },
  card: {
    marginTop: '3px',
    marginRight: "4px",
    marginLeft: "4px",
    // [theme.breakpoints.between('sm', 'xl')]: {
    //   width: '60vw',
    // },
  },
  link: {
    textDecoration: 'none',
  }
}));
export default useStyles;