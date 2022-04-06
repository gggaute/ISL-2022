import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  answerElement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "4px",
  },
  answerElementWrong: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightcoral',
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "4px",
  },
  answerBtn: {
    backgroundColor: 'white',
    marginRight: "4px",
  },
  btnParent: {
    flex: '1',
    margin: 'auto',
    width: '50%',
    paddingRight: "8px",
    paddingLeft: "8px",
  },
  icons: {
    color: 'white',
  },
}));
export default useStyles;