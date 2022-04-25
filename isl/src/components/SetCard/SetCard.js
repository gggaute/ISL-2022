import React from 'react';
import { Avatar, Card, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

/**
 * This card component generates a card for each exercise set on the startPage menu.
 * @author Group 2021
 * @param {object} props
 * @property {string} type Decides which type of card to display.
 * @property {object} formData Contains information about the set.
 * @returns Card component for given exercise set.
 */
function SetCard({ formData, setId }) {
  const classes = useStyles();

  return (
    <Link to='/sets' state = {{playId : setId}} className={classes.link}>
    <Card className={classes.card} data-cy="card">
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar sx={{ bgcolor: '#8AA9E4'}}>
            {formData.id}
          </Avatar>
        }
        title={formData.title}
      />
    </Card>
    </Link>
  );
}

export default SetCard;