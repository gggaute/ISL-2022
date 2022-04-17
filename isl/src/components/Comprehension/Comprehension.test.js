/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Forstaelse from './Comprehension';

jest.mock('axios');
jest.useFakeTimers();

describe('Forstaelse exercise', () => {
  const resp = {
    id: 19,
    chat1: 'Ola har kjøpt middag, du trenger ikke handle.',
    question1: 'Må du handle?',
    answer1: 'false',
    explanation1: 'Ola har allerede handlet',
    chat2: 'Bjørn glemte jakken sin hos deg. Ta den med på skolen i morgen.',
    question2: 'Skal du ta med jakken til Bjørn på skolen i morgen?',
    answer2: 'true',
    explanation2: 'Du må ta med jakken fordi Bjørn glemte den hos deg.',
    chat3: 'Denne filmen var kjedelig. Jeg drar hjem nå.',
    question3: 'Drar vennen din hjem?',
    answer3: 'true',
    explanation3: 'Filmen var kjedelig så vennen din dro',
  };

  test('should fetch getcontent once', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await act(async () =>
      render(
        <Router>
          <Forstaelse id={5} restartSet={() => <></>} />
        </Router>
      )
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/api/forstaelse/${5}`,
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
          <Forstaelse id={5} restartSet={() => <></>} />
        </Router>
      )
    );

    await screen.findByText('Ola har kjøpt middag, du trenger ikke handle.');
    const text = screen.getByText(
      'Ola har kjøpt middag, du trenger ikke handle.'
    );

    expect(text.tagName.toLowerCase()).toEqual('p');
  });
  test('playthrough and explanation are visible when answer is given', async () => {
    axios.get.mockResolvedValue({ data: resp });

    await act(async () =>
      render(
        <Router>
          <Forstaelse id={5} restartSet={() => <></>} />
        </Router>
      )
    );

    await screen.findByText('Ola har kjøpt middag, du trenger ikke handle.');
    const button = screen.getByText('NEI');
    fireEvent.click(button);

    await screen.findByText('Riktig!');
    const resultButton = screen.getByTestId('resultButton');
    fireEvent.click(resultButton);

    await screen.findByText(
      'Bjørn glemte jakken sin hos deg. Ta den med på skolen i morgen.'
    );
    const button2 = screen.getByText('NEI');
    fireEvent.click(button2);

    await screen.findByText('Feil!');
    const resultButton2 = screen.getByTestId('resultButtonIncorrect');
    fireEvent.click(resultButton2);

    await screen.findByText('Denne filmen var kjedelig. Jeg drar hjem nå.');
    const button3 = screen.getByText('JA');
    fireEvent.click(button3);

    await screen.findByText('Riktig!');

    expect(
      screen.getByText('Filmen var kjedelig så vennen din dro')
    ).toBeVisible();
    expect(
      screen.getByText('Denne filmen var kjedelig. Jeg drar hjem nå.')
    ).toBeVisible();
  });
  test('audio play should play once after click and be disabled', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await act(async () =>
      render(
        <Router>
          <Forstaelse id={5} playAudio={() => <></>} restartSet={() => <></>} />
        </Router>
      )
    );
    const button = screen.getByTestId('volumeForstaelse');
    fireEvent.click(button);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(button).toBeDisabled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
  });
});