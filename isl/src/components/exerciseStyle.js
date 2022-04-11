import { makeStyles } from '@mui/styles';

const exerciseStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F5F5',
    maxWidth: '70%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: "20px",
    borderRadius: '15px',
    marginBottom: '20px',
    padding: "4px",
  },
  topContent: {
    padding: "8px",
  },
  layout: {
    backgroundColor: '#F5F5F5',
    margin: "4px",
    padding: "28px",
    overflow: 'hidden',
    overflowY: 'auto',
  },
  navbar: {
    margin: 0,
    padding: 0,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '15px 15px 0 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardcontent: {
    display: 'flex',
  },
  audiotext: {
    margin: 'auto 0 auto 0',
  },
  menuButton: {
    marginRight: "8px",
    float: 'right',
  },
  progresscontainer: {
    margin: "4px",
  },
  progressBar: {
    height: "15px",
    margin: "10px",
  },
  text2: {
    margin: '30px',
  },
  question: {
    fontWeight: "bold",
    fontSize: "1.3em",
    margin: "0 14px 5px 14px",
  },
  questionLine: {
    borderTop: "1px solid #7CA3EE",
    margin: "5px 14px",
  },
  explanation: {
    width: "70%",
    margin: "30px",
  },
  exerciseType:{ // Name of exercise
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bolder',
  },
}));

export default exerciseStyles;