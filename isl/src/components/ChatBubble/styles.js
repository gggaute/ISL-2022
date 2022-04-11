// Styling for the ChatBubble-component

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CardLeft: The chatbubble of the person starting the chat (i.e. not the user)
  cardLeft: {
    maxWidth: "1000px",
    display: 'inline-block',
    padding: "12px",
  },
  // CardRight: The chatbubble of the user
  cardRight: {
    maxWidth: "1000px",
    display: 'inline-block',
    padding: "12px",
    backgroundColor: 'lightBlue',
  },
  // AvatarLarge: ?
  avatarLarge: {
    width: "55px",
    height: "55px",
    margin: "5px",
    backgroundColor: "yellow",
  },
  // Text: The text in the chatBubbles on both sides of the conversation
  text: {
    margin: '6px 0px 6px 0px',
  },
  // FloatLeft: The container for the avatar picture and the chatbubble of the person starting the chat (i.e. not the user)
  floatLeft: {
    float: 'left',
  },
  // FloatRight: The container for the avatar picture and the chatbubble of the user
  floatRight: {
    float: 'right',
  },
  // ParentLeft and ParentRight: Container for avatar and chatbubble, switches positioning depending on who talking
  parentLeft: {
    display: 'flex-start',
  }, 
  parentRight: {
    display: 'flex-end',
  },
}));

export default useStyles;