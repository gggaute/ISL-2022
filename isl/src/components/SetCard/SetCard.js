import React from 'react';
import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
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
function SetCard({ type, formData, onClick }) {

  // Returns different buttons depending on the type of card.
  function iconButtons() {
    if (type === 'mySet') {
      return (
        <>
          <IconButton data-testid="playButton" onClick={() => onClick()}>
            <PlayCircleOutlineIcon />
          </IconButton>
        </>
      );
    }
    return <></>;
  }

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar>
            {type === 'mySet' ? formData.id : formData.sets}
          </Avatar>
        }
        title={formData.title}
        action={iconButtons()}
      />
    </Card>
  );
}

export default SetCard;