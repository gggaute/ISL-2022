import React from 'react';
import { Avatar, Card, Grid, Typography } from '@mui/material';
import defaultMan from '../../assets/images/defaultMan.png';
import useStyles from './styles';


/**
 * This is the component that is used to display messages in the chat and comprehension exercises.
 * @author Julie, Simen
 * @param {object} props
 * @property {string} chat The message being displayed.
 * @property {string} icon Decides which icon to display.
 * @property {boolean} right Decides if the component should float right or left.
 * @returns A chatBubble component.
 */
const ChatBubble = ({ chat, icon, right }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {right && <Grid item xs={3} />}
      <Grid item xs={9}>
        <div className={right ? classes.parentRight : classes.parentLeft}>
          <div className={right ? classes.floatRight : classes.floatLeft}>
            <Avatar
              className={classes.avatarLarge}
              alt="placeholder_icon"
              src={icon || defaultMan}
            />
          </div>
          <div className={right ? classes.floatRight : classes.floatLeft}>
            <Card className={right ? classes.cardRight : classes.cardLeft}>
              <Typography className={classes.text}>{chat}</Typography>
            </Card>
          </div>
        </div>
      </Grid>
      {!right && <Grid item xs={3} />}
    </Grid>
  );
};
export default ChatBubble;
