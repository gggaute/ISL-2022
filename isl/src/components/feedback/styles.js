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
  points: {
    backgroundColor: 'lightgreen',
    maxWidth: "20%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
  },
  btnParent: {
    flex: '1',
    margin: 'auto',
    width: '90%',
    paddingRight: "8px",
    paddingLeft: "8px",
    paddingBottom: "30px",

  },
}));

export default useStyles;