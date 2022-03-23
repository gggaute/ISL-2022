import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

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
      
      questionclass: {
        border: '0.1px solid #7CA3EE',
      },

      taskPBorder: {
        border: '1px solid darkgrey',
        backgroundColor: '#8AA9E4',
        padding: '0.3rem',
        minWidth: '2rem',
        maxHeight: '1.2rem',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: 'hidden',
      },
      vis: {
        visibility: 'visible',
      },
      
      wordContainer: {
        border: '1px solid lightgrey',
        maxWidth: '8rem',
        maxHeight: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      nextExerciseButtonDiv: {
        paddingTop: '-0.5rem',
      },
      
}))

export default useStyles
