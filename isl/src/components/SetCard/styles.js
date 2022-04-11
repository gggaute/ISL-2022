// TODO: SetCard trengs ikke lenger ?

// Styling for the SetCard-component

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CardHeader: 
  cardHeader: {
    padding: '12px',
  },
  // Card: 
  card: {
    marginTop: '3px',
    marginRight: "4px",
    marginLeft: "4px",
  },
  // Link: 
  link: {
    textDecoration: 'none',
  }
}));
export default useStyles;