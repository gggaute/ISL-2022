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
    maxHeight: '97vh',
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
    margin: '50px',
  },
  question: {
    fontWeight: "bold",
    fontSize: "1.3em",
    borderBottom: "1px solid #7CA3EE",
    marginBottom: "5px",
    margin: "0 15px",
    maxWidth: '70%',
  },
}));

export default exerciseStyles;