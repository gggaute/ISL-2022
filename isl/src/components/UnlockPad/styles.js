import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    unlockImg: {
        width: '90%',
        height: '90%',
        margin: 'auto',
    },

    content: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        // border: 'lawngreen 2px solid',
},

    contentRow: {
        display: 'flex',
        flexDirection: 'column',
        // border: '#7CA3EE 2px solid',
},

    gridButton: {
        backgroundColor: 'white',
        borderRadius: '100%',
        padding: '10px',
        boxShadow: '1px 1px 10px #7CA3EE',
        margin: '5px',
        // border: '1px #7CA3EE',
        height: '3.5em',
        width: '3.5em',
    },

    gridButtonDisabled: {
        backgroundColor: '#7CA3EE',
        color: 'white',
    },

    tryAgainButton: {
        backgroundColor: '#EC6F6F',
        color: 'white',
        fontWeight: 'bolder',
        fontSize: 'large',
        boxShadow: 'none',
        width: '10em',
    },

    guess: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '0 auto',
        // border: 'red 1px solid',
    },

    gridLetters: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        // border: '1px black solid',
        rowGap: '10px',
        columnGap: '10px',
        margin: '10px',
        padding: '15px',
        alignItems: 'center',
        maxWidth: '50%',
        alignSelf: 'center',
    },

    feedbackAndReset: {
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '15px',
    },
    exerciseType:{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bolder',
      }

}));

export default useStyles;