import React, { useState, useEffect } from "react";

// import SingleLetter from './singleLetter';
// import Button from "@mui/material/Button";
import egg from "../../assets/img/egg.png";
import Navbar from "../Fill-In-Word/Navbar";
import axios from "axios"
import { Button } from "@mui/material/Button";

const UnlockPad = ({ id }) => {
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
  let setDisabled = false

    useEffect(() => {
      getContent()
    },[])

  function getContent() {
    axios
      .get(`http://localhost:8000/api/unlock/${id}`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        setCorrectSolution(res.data.correctSolution);
        setSolutionLength(correctSolution.length);
        //forloop av slag for å iterere gjennom letters og legge de til i "letters"
        backendLetters.push(res.data.letter1);
        backendLetters.push(res.data.letter2);
        backendLetters.push(res.data.letter3);
        backendLetters.push(res.data.letter4);
        backendLetters.push(res.data.letter5);
        backendLetters.push(res.data.letter6);
        backendLetters.push(res.data.letter7);
        backendLetters.push(res.data.letter8);
        backendLetters.push(res.data.letter9);
        setLetters(backendLetters);
        setImg(res.data.solutionImage);
        console.log(res.data.solutionImage)
      });
  }
/*
letters.push(res.data.letter1);
        letters.push(res.data.letter2);
        letters.push(res.data.letter3);
        letters.push(res.data.letter4);
        letters.push(res.data.letter5);
        letters.push(res.data.letter6);
        letters.push(res.data.letter7);
        letters.push(res.data.letter8);
        letters.push(res.data.letter9);

    setLetters([...letters, res.data.letter1]);
    setLetters([...letters, res.data.letter2]);
    setLetters([...letters, res.data.letter3]);
    setLetters([...letters, res.data.letter4]);
    setLetters([...letters, res.data.letter5]);
    setLetters([...letters, res.data.letter6]);
    setLetters([...letters, res.data.letter7]);
    setLetters([...letters, res.data.letter8]);
    setLetters([...letters, res.data.letter9]);
*/

  const [correctSolution, setCorrectSolution] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [solutionLength, setSolutionLength] = useState(0);
  const backendLetters = []
  const [letters, setLetters] = useState([]);
  const [image, setImg] = useState(null)
  let isFinished = false;

  let feedback;

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

  const [userAnswerList, setUserAnswerList] = useState([]);

  function registerLetterinAnswer(buttonLetter) {
    if (userAnswer.length < solutionLength) {
      setUserAnswer(userAnswer + buttonLetter);
      userAnswerList.push(buttonLetter);
    }
  }

  const answerList = [];
  function presentAnswer() {
    for (let i = 0; i <= userAnswerList.length; i++) {
      answerList.push(userAnswerList[i]);
    }
    answerList.pop();
    console.log(answerList);
    if (answerList.length < solutionLength) {
      for (let i = answerList.length; i < solutionLength; i++) {
        answerList.push("_");
      }
    }
    console.log(answerList);
  }

  presentAnswer();

  let itemList = answerList.map((item, index) => {
    return <p>{item}</p>;
  });

  function handleEvent(event) {
    event.target.disabled = true
}

checkAnswer()

// function resetCode() {
//     if (setDisabled) {
//         isFinished = false
//         setUserAnswer("")
//         setUserAnswerList([])
//     }
// }

// function resetButton() {
//     if (setDisabled)
//         return <Button id="tryAgainButton" onClick={resetCode}>Prøv igjen</Button>
// }

function setButtonID() {
    count++
    return "numpadButton" + count.toString()
}

return (
    <>
    <Navbar></Navbar>
        <div id="content">
            <img src= {image} alt="solutionImage"></img>
            <div id="contentRow">
                <div id="guess">{itemList}</div>
                <div className="grid">
                    {letters.map((letter, count) => (
                        <>
                            <button className="gridButton" key={count} id={setButtonID()} disabled={setDisabled} onClick={(event) => {
                                handleEvent(event)
                                registerLetterinAnswer(letter)
                            }}>
                                {letter.toUpperCase()} </button>
                            {() => count++}
                        </>
                    ))}
                </div>
            </div>
            <div id="feedBackAndReset">
                {/* Her kan det heller puttes tilbakemeldingskomponent hvis det passer bedre */}
                <h1>{feedback}</h1>
                {/* {resetButton()} */}
            </div>

        </div>
    </>
)
}

export default UnlockPad;
