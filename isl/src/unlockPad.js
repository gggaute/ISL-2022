import React, { useState, useRef } from "react";
import SingleLetter from './singleLetter';
import './App.css';
import Button from "@mui/material/Button";
import egg from './egg.jpg';
import Feedback from './feedback'
import './unlockPadStyle.css'

const UnlockPad = (input) => {

    //henter inn en oppgave fra databasen, må inneholde:
    // - bilde av fasit svar
    // - fasit svar (ordet som skal skrives inn)
    // - resterende bokstaver til å fylle knappene

    // presentere bilde --> direkte i return
    // lagre fasit svar i variabel
    // finne antall bokstaver i fasit
    // lage knapper med fasit bokstaver + lage resterende knapper for å fylle 9 (fiksa)
    // presentere antall bokstaver i fasit
    // for her knapp som trykkes skal bokstaven vises i over rett "plasserings-strek"
    // når rett antall bokstaver er skrevet inn vil det være en sjekk av svaret og spilleren skal få en tilbakemelding
    // så rett tilbakemelding (eget isssue)
    // feilhåndtering (eget issue)
    // resette (eget issue?)


    const [correctSolution, setCorrectSolution] = useState(input.input.correctSolution);
    const [userAnswer, setUserAnswer] = useState("");
    const [solutionLength, setSolutionLength] = useState(correctSolution.length);
    const [letters, setLetters] = useState(input.input.letters)

    let isFinished = false
    let setDisabled = false

    let feedback

    function checkAnswer() {
        let tilbakemelding
        if (userAnswer.length === solutionLength) {
            if (userAnswer === correctSolution) {

                tilbakemelding = "riktig"

            }
            else {
                tilbakemelding = "feil"
            }
            isFinished = true
        }
        feedback = tilbakemelding
        if (isFinished) {
            setDisabled = true
        }
    }

    //count for id til css, vet ikke om det funker
    let count = 0;

    const [userAnswerList, setUserAnswerList] = useState([])
    function registerLetterinAnswer(buttonLetter) {
        if (userAnswer.length < solutionLength) {
            setUserAnswer(userAnswer + buttonLetter)
            userAnswerList.push(buttonLetter.toUpperCase())
        }

    }


    const answerList = []
    function presentAnswer() {
        for (let i = 0; i <= userAnswerList.length; i++) {
            answerList.push(userAnswerList[i])
        }
        answerList.pop()
        if (answerList.length < solutionLength) {
            for (let i = answerList.length; i < solutionLength; i++) {
                answerList.push("_")
            }
        }
    }

    presentAnswer()

    let itemList = answerList.map((item, index) => {
        return <p id={index}>{item}</p>
    })

    function handleEvent(event) {
        event.target.disabled = true
    }

    checkAnswer()

    function resetCode() {
        if (setDisabled) {
            isFinished = false
            setUserAnswer("")
            setUserAnswerList([])
        }
    }

    function resetButton() {
        if (setDisabled)
            return <Button id="tryAgainButton" onClick={resetCode}>Prøv igjen</Button>
    }

    function setButtonID() {
        count++
        return "numpadButton" + count.toString()
    }


    return (
        <>
            <div id="content">
                <img src={input.input.image} alt="solutionImage"></img>
                <div id="guess">{itemList}</div>
                <div className="grid">
                    {letters.map((letter, count) => (
                        <>
                            <button key={count} id={setButtonID()} disabled={setDisabled} onClick={(event) => {
                                handleEvent(event)
                                registerLetterinAnswer(letter)
                            }}>
                                {letter.toUpperCase()} </button>
                            {() => count++}
                        </>
                    ))}
                </div>
                <div id="feedBackAndReset">
                    {/* Her kan det heller puttes tilbakemeldingskomponent hvis det passer bedre */}
                    <h1>{feedback}</h1>
                    {resetButton()}
                </div>

            </div>
        </>
    )
}

export default UnlockPad;