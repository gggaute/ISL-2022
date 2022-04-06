import React from 'react';
import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Link } from 'react-router-dom';
import useStyles from './styles';

/**
 * Reusable card component for exercise sets with icon buttons for playing, saving,
 * editing and deleting exercise sets.
 * @author Simen
 * @param {object} props
 * @property {string} type Decides which type of card to display.
 * @property {object} formData Contains information about the set.
 * @property {function} onClick1 Lets user edit or play the set.
 * @property {function} onClick2 Lets user delete the set.
 * @property {function} onClick3 Lets user play the set.
 * @returns Card component for given exercise set.
 */
function SetCard({ type, formData, setId }) {
  const classes = useStyles();
  // Returns different buttons depending on the type of card.
  function iconButtons() {
      return (
        <>
          <IconButton>
            <PlayCircleOutlineIcon/>
          </IconButton>
        </>
      );
  }

  return (
    <Link to='/sets' state = {{playId : setId}} className={classes.link}>
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar sx={{ bgcolor: '#8AA9E4'}}>
            {type === 'mySet' ? formData.id : formData.sets }
          </Avatar>
        }
        title={formData.title}
        action={iconButtons}
      />
    </Card>
    </Link>
  );
}

export default SetCard;