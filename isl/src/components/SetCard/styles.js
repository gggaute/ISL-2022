import { makeStyles } from '@mui/styles';

/**
 * Styling for the SetCard-component
 */
const useStyles = makeStyles((theme) => ({
  // Link: Makes the card clickable. Contains card.
  link: {
    textDecoration: 'none',
  },
  // Card: Contains CardHeader.
  card: {
    marginBottom: "8px",
    border: "1px solid #8aa9e4",
  },
  // CardHeader: Card for set. Contains id and title.
  cardHeader: {
    // backgroundColor: "#F2F2F2", //grey
    backgroundColor: "#eaf0fa", //blue
  },
}));
export default useStyles;