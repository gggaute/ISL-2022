/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PlaySets from './PlaySets';
import store from '../../store';
import SetMock from './__mocks__/SetMock';
import ChatMock from './__mocks__/ChatMock';
import ForstaelseMock from './__mocks__/ForstaelseMock';
import RyddeSetningerMock from './__mocks__/RyddeSetningerMock';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/sets',
    state: { id: 5 },
  }),
}));

describe('PlaySets component', () => {
  const respSet = SetMock();
  const respChat = ChatMock();
  const respForstaelse = ForstaelseMock();
  const respRydde = RyddeSetningerMock();

  test('playthrough', async () => {
    axios.get.mockImplementation((url) => {
      if (url == `http://localhost:8000/api/sets/${5}`) {
        return Promise.resolve({ data: respSet });
      }
      if (url === `http://localhost:8000/api/completed/${5}`) {
        return Promise.reject(new Error('not logged in'));
      }
      if (url === `http://localhost:8000/api/comment/${5}`) {
        return Promise.resolve({ data: [] });
      }
      if (url === `http://localhost:8000/api/getrating/${5}`) {
        return Promise.resolve({ data: [] });
      }
      if (url === `http://localhost:8000/api/chat/${22}`) {
        return Promise.resolve({ data: respChat });
      }
      if (url === `http://localhost:8000/api/forstaelse/${19}`) {
        return Promise.resolve({ data: respForstaelse });
      }
      if (
        url === `http://localhost:8000/api/rydde_setninger/${11}`
      ) {
        return Promise.resolve({ data: respRydde });
      }
    });

    await act(async () =>
      render(
        <Provider store={store}>
          <Router>
            <PlaySets />
          </Router>
        </Provider>
      )
    );

    await screen.findByText('Spill');
    const button3 = screen.getByText('Spill');
    fireEvent.click(button3);

    await screen.findByText('Hvilken dag er det i dag?');
    const button = screen.getByText('Torsdag');
    fireEvent.click(button);

    await screen.findByText('Riktig!');
    const resultButton = screen.getByTestId('resultButton');
    fireEvent.click(resultButton);

    await screen.findByText('neste oppgave');
    const nextButton = screen.getByText('neste oppgave');
    fireEvent.click(nextButton);

    await screen.findByText('Ola har kjøpt middag, du trenger ikke handle.');
    const button2 = screen.getByText('JA');
    fireEvent.click(button2);

    await screen.findByText('Feil!');
    const resultButton2 = screen.getByTestId('resultButtonIncorrect');
    fireEvent.click(resultButton2);

    await screen.findByText('neste oppgave');
    const nextButton2 = screen.getByText('neste oppgave');
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

    await screen.findByText('neste oppgave');
    const nextButton3 = screen.getByText('neste oppgave');
    fireEvent.click(nextButton3);

    expect(
      screen.getByText('Din totale poengsum ble 2 av totalt 3 mulige!')
    ).toBeVisible();
    expect(axios.get).toHaveBeenCalledTimes(7);
  });
});
