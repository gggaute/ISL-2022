import axios from 'axios'
import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react';
import Task from './Task'
import Word from './Word'
import Words from './Words'
import FillInWord from './FillInWord'
import CheckAnswer from './CheckAnswer';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios')
jest.useFakeTimers();

describe('fill in word task', () => {
  const resp = {
    id: 1,
    correctSolution: "familie",
    sentenceWord1: "Yosef",
    sentenceWord2: "sin",
    sentenceWord3: "familie",
    sentenceWord4: "bor",
    sentenceWord5: "i",
    sentenceWord6: "Eritrea",
    sentenceWord7: "",
    sentenceWord8: "",
    sentenceWord9: "",
    sentenceWord10: "",
    sentenceWord11: "",
    sentenceWord12: "",
    sentenceWord13: "",
    sentenceWord14: "",
    sentenceWord15: "",
    answerWord1: "leilighet",
    answerWord2: "har",
    answerWord3: "mange",
    answerWord4: "man",
    answerWord5: "familie",
    answerWord6: "fornøyd"
  }

  test('should fetch with getContent once', async () => {
    axios.get.mockResolvedValue({data: resp});

        await render(
                    <Router>
                        <FillInWord id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
                    </Router>
                )
        
        expect(axios.get).toHaveBeenCalledTimes(1);

        expect(axios.get).toHaveBeenCalledWith(
            `http://localhost:8000/api/fill_in_word/${2}`, {
                headers: {
                  "Content-Type": "application/json",
                  accept: "application/json",
                },
            }
        )
  })
// dette er det eneste som bare wrapper classen gjør, resten testes i de andre komponentene.
  
})