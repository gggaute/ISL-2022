import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({  
      /* PAGE-CONTENT */
      
      wrapper: {
        border: '1px solid #7CA3EE',
        padding: '0.6rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: '1rem',
        marginTop: '1rem',
      },
      
      gameWrapper: {
        padding: '0.6rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        rowGap: '1rem',
        marginTop: '1rem',
      },
      /* GAME-CONTENT */
      nextExerciseButtonDiv: {
        paddingTop: '-0.5rem',
      },
      
}))

export default useStyles
