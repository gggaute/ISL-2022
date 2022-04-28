/* Styling for the SetCard-component */

import { makeStyles } from '@mui/styles';

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
    backgroundColor: "#eaf0fa",
  },
}));
export default useStyles;