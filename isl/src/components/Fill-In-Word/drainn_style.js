import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  /* PAGE-CONTENT */
  gameWrapper: {
    padding: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    marginTop: '1rem',
    maxWidth: '100%',
  },

  exerciseType: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bolder',
  },
  /* GAME-CONTENT */
  nextExerciseButtonDiv: {
    paddingTop: '-0.5rem',
  },
  wordButton:{
    backgroundColor: '#BCD0F7',
    margin: '0.3rem',
    padding: '1rem',
    border: 'none',
    fontSize:'1rem',
    cursor: 'pointer',
    borderRadius: '0.5rem'
  },
  task:{
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    padding: '0.5rem'

  },
  wordGridWrapper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

}))

export default useStyles
