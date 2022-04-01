import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100px",
    margin: 'auto',
    marginTop: "16px",
    marginBottom: "4px",
    padding: "8px",
    backgroundColor: 'white',
    display: 'block',
  },
  image: {
    maxHeight: '30vh',
    marginBottom: "4px",
    float: 'right',
    maxWidth: "24vw",
    // [theme.breakpoints.down('xs')]: {
    //   maxWidth: '24vw',
    // },
  },
  textBox: {
    display: 'block',
    maxWidth: '70%',
  },
  text: {
    maxWidth: "78px",
    marginBottom: "4px",
    float: 'left',
    display: 'inline-block',
    fontSize: "1em",
  },
}));

export default useStyles;