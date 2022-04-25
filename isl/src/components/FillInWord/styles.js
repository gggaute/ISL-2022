// Styling for the Fill in Word-component

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  // OverallGrid: Grid containing the overall exercise-content (i.e. everything efter the HR-line)
  overallGrid: {
    display: "flex",
    flexDirection: "column",
  },
  // GameWrapper: Contains the task-sentence, the word-button grid, and the check answer button
  gameWrapper: {
    padding: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '1rem',
    marginTop: '1rem',
    maxWidth: '100%',
  },
  // WordButton: Each button in the word-button grid
  wordButton:{
    backgroundColor: '#BCD0F7',
    margin: '0.3rem',
    padding: '1rem',
    border: 'none',
    fontSize:'1rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
  },
  // WordGridWrapper: Contains the word-button grid and the check answer button
  wordGridWrapper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default useStyles;
