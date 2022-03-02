import React, { useState, useRef } from "react";
import SingleLetter from './singleLetter';
import './App.css';
import Button from "@mui/material/Button";
import { render } from "react-dom";
import egg from './egg.jpg';

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
    // så rett tilbakemelding 
    // feilhåndtering (eget issue)
    // resette (eget issue?)


    


    const [correctSolution, setCorrectSolution] = useState(input.input.correctSolution);
    const [userAnswer, setUserAnswer] = useState("");
    const [solutionLength, setSolutionLength] = useState(correctSolution.length);
    const [letters, setLetters] = useState(input.input.letters)

    function checkAnswer(){
        if(userAnswer.length === solutionLength){
            if(userAnswer === correctSolution){
                console.log("correct!")
                return <p>CORRECT</p>
            }
            else{
                console.log("WRONG!! L + ration + nobody asked")
                return <p>WRONG</p>
            }
        }
        else{
            console.log("Wrong amount of letters yet or wrong answer")
        }
    }

    //count for id til css, vet ikke om det funker
    let count = 0;

    function registerLetterinAnswer(buttonLetter){
        if(userAnswer.length < solutionLength){
            setUserAnswer(userAnswer+buttonLetter)
        }
    }
    checkAnswer()
    console.log(userAnswer)



    return(
        <>
            <img src={input.input.image} alt="solutionImage"></img>
            <div>
                <p>Antall bokstaver: {solutionLength}</p>
                <p>Svar: {userAnswer} </p>
            </div>
            <div>
                {letters.map((letter) => (
                    <>
                    <Button key={count+1} onClick ={() => registerLetterinAnswer(letter)}>{letter} </Button>
                    </> 
                ))}
            </div>
            {/* <div className="numpad">
                <div className="row">
                    <Button onClick={() => {rekkefølge += "e"}}>E</Button>
                    <Button onClick={() => {rekkefølge += "g"}}>G</Button>
                    <Button onClick={() => {rekkefølge += "h"; console.log(rekkefølge)}}>H</Button>
                </div>
                <div className="row">
                    <Button onClick={() => {rekkefølge += "a"}}>A</Button>
                    <Button onClick={() => {rekkefølge += "g"}}>G</Button>
                    <Button onClick={() => {rekkefølge += "c"}}>C</Button>
                </div>
                <div className="row">
                    <Button onClick={() => {rekkefølge += "d"}}>D</Button>
                    <Button onClick={() => {rekkefølge += "f"}}>F</Button>
                    <Button onClick={() => {rekkefølge += "h"}}>H</Button>
                </div>
                <Button onClick={() => {sjekkSvar()}}>Sjekk</Button>

            </div> */}
        </>
    )
}

export default UnlockPad;