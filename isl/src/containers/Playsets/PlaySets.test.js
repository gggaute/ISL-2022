/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PlaySets from './PlaySets';
import SetMock from './__mocks__/SetMock';
import ChatMock from './__mocks__/ChatMock';
import ComprehensionMock from './__mocks__/ComprehensionMock';
import SortSentenceMock from './__mocks__/SortSentenceMock';
import FillInWordMock from './__mocks__/FillInWordMock';
import UnlockMock from './__mocks__/UnlockMock.js';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/sets',
    state: { playId: 5 },
  }),
}));

describe('PlaySets component', () => {
  const respSet = SetMock();
  const respChat = ChatMock();
  const respComprehension = ComprehensionMock();
  const respSort = SortSentenceMock();
  const respFillInWord = FillInWordMock();
  const respUnlock = UnlockMock();

  test('playthrough', async () => {
    axios.get.mockImplementation((url) => {
      switch (url){
        case `/api/sets/${5}`:
          return Promise.resolve({ data: respSet });
        case `/api/chat/${22}`:
          return Promise.resolve({ data: respChat });
        case `/api/comprehension/${19}`:
          return Promise.resolve({ data: respComprehension });
        case `/api/sort_sentence/${11}`:
          return Promise.resolve({ data: respSort });
          case `/api/fill_in_word/${18}`:
            return Promise.resolve({ data: respFillInWord });
        case `/api/unlock/${14}`:
          return Promise.resolve({ data: respUnlock });
        default:
          return Promise.reject(new Error('not found'))
      }
    });

    await act(async () =>
      render(
          <Router>
            <PlaySets />
          </Router>
      )
    );

    await screen.findByText('Hverdagsliv');
    const playButton = screen.getByText('SPILL');
    fireEvent.click(playButton);

    await screen.findByText('Hvilken dag er det i dag?');
    const button = screen.getByText('Torsdag');
    fireEvent.click(button);

    await screen.findByText('Riktig!');
    const resultButton = screen.getByTestId('resultButton');
    fireEvent.click(resultButton);

    await screen.findByText('Neste oppgave');
    const nextButton = screen.getByText('Neste oppgave');
    fireEvent.click(nextButton);

    await screen.findByText('Ola har kjøpt middag, du trenger ikke handle.');
    const button2 = screen.getByText('JA');
    fireEvent.click(button2);

    await screen.findByText('Feil!');
    const resultButton2 = screen.getByTestId('resultButtonIncorrect');
    fireEvent.click(resultButton2);

    await screen.findByText('Neste oppgave');
    const nextButton2 = screen.getByText('Neste oppgave');
    fireEvent.click(nextButton2);

    await screen.findByText('Jeg');
    const dragButton = screen.getByText('Jeg');
    fireEvent.click(dragButton);
    const dragButton2 = screen.getByText('er');
    fireEvent.click(dragButton2);
    const dragButton3 = screen.getByText('under');
    fireEvent.click(dragButton3);
    const dragButton4 = screen.getByText('bordet');
    fireEvent.click(dragButton4);
    const checkAnswer = screen.getByText('Sjekk svar');
    fireEvent.click(checkAnswer);

    await screen.findByText('Riktig!');
    const resultButton3 = screen.getByTestId('resultButton');
    fireEvent.click(resultButton3);

    await screen.findByText('Neste oppgave');
    const nextButton3 = screen.getByText('Neste oppgave');
    fireEvent.click(nextButton3);

    await screen.findByText('E');
    const unlockButton1 = screen.getByText('E');
    fireEvent.click(unlockButton1);

    await screen.findByText('G');
    const unlockButton2 = screen.getByText('G');
    fireEvent.click(unlockButton2);
    fireEvent.click(unlockButton2);

    await screen.findByText('Riktig!');
    const resultButton4 = screen.getByTestId('resultButton');
    fireEvent.click(resultButton4);
    
    await screen.findByText('Neste oppgave');
    const nextButton4= screen.getByText('Neste oppgave');
    fireEvent.click(nextButton4);

    await screen.findByText('ord');
    const fillInWordButton1= screen.getByText('ord');
    fireEvent.click(fillInWordButton1);

    await screen.findByText('Sjekk svar');
    const fillInWordButton2= screen.getByText('Sjekk svar');
    fireEvent.click(fillInWordButton2);

    await screen.findByText('Riktig!');
    const resultButton5 = screen.getByTestId('resultButton');
    fireEvent.click(resultButton5);

    expect(
      screen.getByText('Du har gjort alle oppgavene!')
    ).toBeVisible();
    expect(axios.get).toHaveBeenCalledTimes(6);
  });
});
