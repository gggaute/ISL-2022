import React from 'react';
import { Avatar, Card, Grid, Typography } from '@mui/material';
import defaultMan from '../../assets/images/defaultMan.png';
/**
 * This is the component that is used to display messages in the chat and forstaelse exercises.
 * @author Julie, Simen
 * @param {object} props
 * @property {string} chat The message being displayed.
 * @property {string} icon Decides which icon to display.
 * @property {boolean} right Decides if the component should float right or left.
 * @returns A chatBubble component.
 */
const ChatBubble = ({ chat, icon, right }) => {
  return (
    <Grid container spacing={3}>
      {right && <Grid item xs={3} />}
      <Grid item xs={9}>
        <div >
          <div >
            <Avatar
              alt="placeholder_icon"
              src={icon || defaultMan}
            />
          </div>
          <div >
            <Card >
              <Typography >{chat}</Typography>
            </Card>
          </div>
        </div>
      </Grid>
      {!right && <Grid item xs={3} />}
    </Grid>
  );
};
export default ChatBubble;
