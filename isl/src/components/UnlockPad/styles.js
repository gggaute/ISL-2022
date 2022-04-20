import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return{
        // Content: Exercise-content (img, guessRow, and numpad)
        content: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            marginTop: "10px",
            marginBottom: "20px",
        },
        // UnlockImg: The image added for the exercise
        unlockImg: {
            width: '90%',
            height: '100%',
            margin: 'auto',
        },
        // ContentRow: Exercise-content excluding the picture (i.e. guessRow and numpad)
        contentRow: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            margin: "auto",
            width: '90%',
            height: '100%',
        },
        // TODO: Trenger vi en farge for disabled eller er det bra sånn det er nå?
        //GridButtonDisabled: 
        // gridButtonDisabled: {
        //     backgroundColor: "white",
        //     color: 'white',
        // },
        // GuessRow: Container for letters guessed and backArrow-button
        guessRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "flex-end",
            width: "90%",
            marginBottom: "10px",
            border: "1px solid rgb(205, 220, 248)",
            padding: "10px",
        },
        // Guess: Container for letters guessed (not including backArrow-button)
        guess: {
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "3px",
        },
        // GuessP: Each letter in the guess (i.e. letters guessed)
        guessP: {
            marginRight: "5px",
        },
        // BackArrow: The button to delete last guessed letter
        backArrow: {
            backgroundColor: "rgb(124, 163, 238)",
            color: "white",
            width: "30px",
            height: "30px",
        },
        // GridLetters: The numpad-grid containing all the letter-buttons
        gridLetters: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            rowGap: '10px',
            columnGap: '10px',
            alignItems: 'center',
            maxWidth: '90%',
            alignSelf: 'center',
        }, 
    }
});

export default useStyles;