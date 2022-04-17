/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Chat from './Chat';

jest.mock('axios');
jest.useFakeTimers();

describe('Chat exercise', () => {
  const resp = {
    id: 22,
    answer11: 'Halv åtte',
    answer12: 'I morgen',
    correctanswer1: 'Torsdag',
    chatquestion1: 'Hvilken dag er det i dag?',
    answer21: 'Middag',
    answer22: 'Fredag',
    correctanswer2: 'Halv åtte',
    chatquestion2: 'Hva er klokka?',
    answer31: 'Stavanger',
    answer32: 'Bergen',
    correctanswer3: 'Oslo',
    chatquestion3: 'Hva er hovedstaden i Norge?',
    sendericon: 'brunetteWoman',
    receivericon: 'frenchMan',
  };

  test('should fetch getcontent once', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await act(async () =>
      render(
        <Router>
          <Chat id={5} />
        </Router>
      )
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/api/chat/${5}`,
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  });

  test('should update exercise after request', async () => {
    axios.get.mockResolvedValue({ data: resp });

    await act(async () =>
      render(
        <Router>
          <Chat id={5} />
        </Router>
      )
    );

    await screen.findByText('Hvilken dag er det i dag?');
    const text = screen.getByText('Hvilken dag er det i dag?');

    expect(text.tagName.toLowerCase()).toEqual('p');
  });

  test('the whole chat history should be visible after playthrough and feedback should be correct', async () => {
    axios.get.mockResolvedValue({ data: resp });

    await act(async () =>
      render(
        <Router>
          <Chat id={5} restartSet={() => <></>} />
        </Router>
      )
    );

    await screen.findByText('Hvilken dag er det i dag?');
    const button = screen.getByText('Torsdag');
    fireEvent.click(button);

    await screen.findByText('Riktig!');
    const resultButton = screen.getByTestId('resultButton');
    fireEvent.click(resultButton);

    await screen.findByText('Hva er klokka?');
    const button2 = screen.getByText('Middag');
    fireEvent.click(button2);

    await screen.findByText('Feil!');
    const resultButton2 = screen.getByTestId('resultButtonIncorrect');
    fireEvent.click(resultButton2);

    await screen.findByText('Hva er hovedstaden i Norge?');
    const button3 = screen.getByText('Oslo');
    fireEvent.click(button3);

    await screen.findByText('Riktig!');

    expect(screen.getByText('Torsdag')).toBeVisible();
    expect(screen.getByText('Middag')).toBeVisible();
    expect(screen.getByText('Oslo')).toBeVisible();
    expect(screen.getByText('Hva er hovedstaden i Norge?')).toBeVisible();
    expect(screen.getByText('Hva er klokka?')).toBeVisible();
    expect(screen.getByText('Hvilken dag er det i dag?')).toBeVisible();
  });
});