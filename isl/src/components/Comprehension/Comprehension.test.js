/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Comprehension from './Comprehension';

jest.mock('axios');

describe('Comprehension exercise', () => {
  const resp = {
    id: 5,
    chat: 'Ola har kjøpt middag, du trenger ikke handle.',
    question: 'Må du handle?',
    answer: 'false',
    explanation: 'Ola har allerede handlet'
  };

  test('should fetch getcontent once', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await act(async () =>
      render(
        <Router>
          <Comprehension id={5} />
        </Router>
      )
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:8000/api/comprehension/${5}`,
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
          <Comprehension id={5} restartSet={() => <></>} />
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
          <Comprehension id={5} restartSet={() => <></>} />
        </Router>
      )
    );

    await screen.findByText('Ola har kjøpt middag, du trenger ikke handle.');
    const button = screen.getByText('NEI');
    fireEvent.click(button);

    await screen.findByText('Riktig!');

    expect(
      screen.getByText('Ola har allerede handlet')
    ).toBeVisible();
    expect(
      screen.getByText('Riktig!')
    ).toBeVisible();
    expect(
      screen.getByText('Ola har kjøpt middag, du trenger ikke handle.')
    ).toBeVisible();
  });
});