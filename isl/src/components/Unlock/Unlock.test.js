import axios from 'axios'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Unlock from './Unlock';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios')
jest.useFakeTimers();

describe('Unlock component', () => {
    const resp = {
        id: 9,
        correctSolution: 'dør',
        letter1: 'd',
        letter2: 'ø',
        letter3: 'r',
        letter4: 'l',
        letter5: 'x',
        letter6: 'a',
        letter7: 'b',
        letter8: 'c',
        letter9: 'e',
        solutionImage: 'http://localhost:8000/media/images/door.png'
    };

    test('should fetch getContent once', async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
                    <Router>
                        <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
                    </Router>
                )
        
        expect(axios.get).toHaveBeenCalledTimes(1);

        expect(axios.get).toHaveBeenCalledWith(
            `/api/unlock/${2}`, {
                headers: {
                  "Content-Type": "application/json",
                  accept: "application/json",
                },
            }
        )
    })

    test('should display right content', async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
            <Router>
                <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
            </Router>
        )

        // await screen.queryByText('button1')
        const letterE = screen.getByText('E')
        expect(letterE.tagName.toLowerCase()).toEqual('button')

        const letterD = screen.getByText('D')
        expect(letterD.tagName.toLowerCase()).toEqual('button')

        const letterX = screen.getByText('X')
        expect(letterX.tagName.toLowerCase()).toEqual('button')

        const question = screen.getByText('Hva ser du på bildet? Skriv ordet!')
        expect(question.tagName.toLowerCase()).toEqual('p')
    })

    test('Should present a letter in guess when a button is pressed', async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
            <Router>
                <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
            </Router>
        )

        const buttonD = screen.getByText('D')
        fireEvent.click(buttonD)

        const answer = screen.getAllByText('_')
        expect(answer.length).toEqual(2)

        const letterD = screen.getAllByText('D')
        expect(letterD.length).toEqual(2)

    })

    test('should return "Riktig" when correct answer is chosen', async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
            <Router>
                <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
            </Router>
        )

        const buttonD = screen.getByText('D')
        fireEvent.click(buttonD)
        const buttonØ = screen.getByText('Ø')
        fireEvent.click(buttonØ)
        const buttonR = screen.getByText('R')
        fireEvent.click(buttonR)

        const answer = screen.getByText('Riktig!')
        expect(answer.tagName.toLowerCase()).toEqual('span')

        // expect(buttonØ.tagName.toLowerCase()).toEqual('button')


    })
    test('should return "Feil" when incorrect answer is chosen',async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
            <Router>
                <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
            </Router>
        )

        const buttonD = screen.getByText('A')
        fireEvent.click(buttonD)
        const buttonØ = screen.getByText('Ø')
        fireEvent.click(buttonØ)
        const buttonR = screen.getByText('R')
        fireEvent.click(buttonR)

        const answer = screen.getByText('Feil!')
        expect(answer.tagName.toLowerCase()).toEqual('span')

    })
    test('should remove the letter from the answer display when removing a wrongly chosen letter', async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
            <Router>
                <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
            </Router>
        )

        const buttonD = screen.getByText('D')
        fireEvent.click(buttonD)
        const buttonØ = screen.getByText('Ø')
        fireEvent.click(buttonØ)
        const angre = screen.getByTestId('KeyboardBackspaceIcon')
        fireEvent.click(angre)

        const answer = screen.getAllByText('_')
        expect(answer.length).toEqual(2)
    })

    test('should disable buttons when an answer is written', async () => {
        axios.get.mockResolvedValue({data: resp});

        await render(
            <Router>
                <Unlock id={2} progress={0} possible={1} showFeedback={() => console.log('lo')}/>
            </Router>
        )

        const buttonD = screen.getByText('D')
        fireEvent.click(buttonD)
        const buttonØ = screen.getByText('Ø')
        fireEvent.click(buttonØ)
        const buttonR = screen.getByText('R')
        fireEvent.click(buttonR)

        expect(buttonD).toBeDisabled()
    })
})
