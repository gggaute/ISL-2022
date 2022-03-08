import React from 'react'
import ContentHeader from './ContentHeader'
import ProgressBar from './ProgressBar'
import Question from './Question'
import Task from './Task'
import Words from './Words'
import { useState } from 'react'
import CheckAnswer from './CheckAnswer'
import FeedbackBox from './FeedbackBox'
import $ from "jquery"


const ContentContainer = () => {

  const [onload, setOnload] = useState(true)

  const onClickedWord = (clickedWord) => {
    console.log("click", clickedWord);
    setOnload(false)
    $("#resultBox").removeClass();
    $("#resultText").text("...");

    if (previousClickedWord === '') {
      setWords(words.filter((word) => word !== clickedWord))
      setSentence(sentence.map((w) => ((w === missingWord)) ? w = clickedWord : w))
    }
    else {
      setWords([...words.filter(word => word !== clickedWord), previousClickedWord])
      setSentence(sentence.map((w) => ((w === previousClickedWord)) ? w = clickedWord : w))
    }
    setPreviousClickedWord(clickedWord)
  }

  const [previousClickedWord, setPreviousClickedWord] = useState('')


  const [disabled, setDisabled] = useState(false)
  const checkAnswer = () => {
    var answer;
      if (sentence.includes(missingWord)) {
        answer = true
        $("#resultBox").removeClass();
        $("#resultBox").addClass("riktig");
        $("#resultText").text("Riktig!"); //TODO: Set correct icon
        $("#goToNext").text("Neste oppgave -->"); //TODO: Set arrow icon
        // $("#goToNext").addClass("visible");
        setDisabled(true)
      }
      else {
        answer = false
        $("#resultBox").removeClass();
        $("#resultBox").addClass("feil");
        $("#resultText").text("Feil. Prøv igjen!"); //TODO: Set wrong icon
      }
    console.log(answer)

  }

  const question = 'Hvilket ord mangler?'

  const [words, setWords] = useState([
    'familie',
    'har',
    'fornøyd',
    'leilighet',
    'mange',
    'med',
  ])

  const [sentence, setSentence] = useState([
    'Yosef',
    'sin',
    "familie",
    'bor',
    'i',
    'Eritrea'
  ])


  const missingWord = 'familie'

  const [missingWordIndex] = useState(sentence.indexOf(missingWord))
  
  return (
    <div className='wrapper'>
      <ContentHeader></ContentHeader>
      <ProgressBar></ProgressBar>
      <Question question={question}></Question>
      <Task missingWord={missingWord} onload={onload} previousClickedWord={previousClickedWord} sentence={sentence} missingWordIndex={missingWordIndex}></Task>
      <Words onClick={onClickedWord} words={words} disabled={disabled} missingWord={missingWord}></Words>
      <CheckAnswer onClick={checkAnswer} disabled={disabled}></CheckAnswer>
      <FeedbackBox></FeedbackBox>
    </div>
  )
}

export default ContentContainer
