import React, { useState, useRef } from "react";
// import SingleLetter from './singleLetter';
import './App.css';
// import Button from "@mui/material/Button";
import egg from './components/img/egg.png';

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

   let feedback

    function checkAnswer(){
        let tilbakemelding
        if(userAnswer.length === solutionLength){
            if(userAnswer === correctSolution){
                console.log("correct!")
                tilbakemelding = "riktig"
                
            }
            else{
                console.log("WRONG!! L + ration + nobody asked")
                tilbakemelding = "feil"
            }
            isFinished = true
        }
        else{
            console.log("Wrong amount of letters yet or wrong answer")
        }
        feedback = tilbakemelding
    }

    //count for id til css, vet ikke om det funker
    let count = 0;

    const [userAnswerList, setUserAnswerList] = useState([])
    function registerLetterinAnswer(buttonLetter){
        if(userAnswer.length < solutionLength){
            setUserAnswer(userAnswer+buttonLetter)
            userAnswerList.push(buttonLetter)
        }
    
    }
    
    
    const answerList = []
    function presentAnswer(){
        for(let i = 0; i <= userAnswerList.length; i++){
            answerList.push(userAnswerList[i])
        }
        answerList.pop()
        console.log(answerList)
        if(answerList.length < solutionLength){
            for(let i = answerList.length; i < solutionLength; i++){
                answerList.push("_")
            }
        }
        console.log(answerList)
    }


    presentAnswer()
    
    let itemList = answerList.map((item, index) => {
        return <p>{item}</p>
    })

    function handleEvent(event){
        console.log(event.target.value)
        event.target.disabled = true       
        
    }

    let setDisabled = false
    
    checkAnswer()
    if(isFinished){
        setDisabled = true
    }
    
    const renderHtml = () => {
        return (
            <>

            {/* <img src={input.input.image} alt="solutionImage"></img> */}
            <div>
                <p>Antall bokstaver: {solutionLength}</p>
                <p>Svar: {userAnswer} </p>
            <div>{itemList}</div>
            
            </div>
            <div>
                {letters.map((letter, count) => (
                    <>
                    
                    <button key={count} id={count.toString()} disabled = {setDisabled} onClick ={(event) => {
                        handleEvent(event)
                        registerLetterinAnswer(letter)
                    }}>
                    {letter} </button>
                        {() => count++}
                    </> 
                ))}
            </div>
        <div>
            {/* Her kan det heller puttes tilbakemeldingskomponent hvis det passer bedre */}
            <h1>{feedback}</h1>
        </div>
        </>
        )
    }

    return(
        <div>
            <Navbar></Navbar>
            {renderHtml()}
        </div>
    )
}

export default UnlockPad;