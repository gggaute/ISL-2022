/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Question from "./Question";

jest.mock('axios');
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('audio play should play once after click and be disabled', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await act(async () =>
      render(
        <Router>
          <Question playAudio={() => <></>} />
        </Router>
      )
    );
    const button = screen.getByRole('button', {
        name: /volum/i
      })

    fireEvent.click(button);
    expect(button).toHaveProperty("disabled", true);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
  });

