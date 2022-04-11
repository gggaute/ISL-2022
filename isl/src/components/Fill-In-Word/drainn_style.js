import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({

  gameWrapper: {
    padding: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '1rem',
    marginTop: '1rem',
    maxWidth: '100%',
    // border: "1px solid blue",
  },
  overallGrid: {
    // border: "1px solid pink",
    display: "flex",
    flexDirection: "column",
  },
  /* GAME-CONTENT */
  // nextExerciseButtonDiv: {
    // paddingTop: '-0.5rem',
  // },
  wordButton:{
    backgroundColor: '#BCD0F7',
    margin: '0.3rem',
    padding: '1rem',
    border: 'none',
    fontSize:'1rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
  },
  task:{
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    padding: '0.5rem',
  },
  wordGridWrapper:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

}))

export default useStyles
