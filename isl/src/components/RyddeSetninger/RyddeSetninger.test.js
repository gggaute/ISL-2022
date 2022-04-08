/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RyddeSetninger from './RyddeSetninger';

jest.mock('axios');
jest.useFakeTimers();


describe('RyddeSetninger component', () => {
    const resp = {
      id: 11,
      word1: 'Jeg',
      wordClass1: 'pron',
      word2: 'er',
      wordClass2: 'v',
      word3: 'under',
      wordClass3: 'prp',
      word4: 'bordet',
      wordClass4: 'n',
      word5: '',
      wordClass5: '',
      word6: '',
      wordClass6: '',
      word7: '',
      wordClass7: '',
      word8: '',
      wordClass8: '',
      word9: '',
      wordClass9: '',
      word11: '',
      wordClass11: '',
      word12: '',
      wordClass12: '',
      word13: '',
      wordClass13: '',
      word14: '',
      wordClass14: '',
      word15: '',
      wordClass15: '',
    };

    test('should fetch getcontent once', async () => {
        axios.get.mockResolvedValue({ data: {} });
    
        await act(async () =>
          render(
            <Router>
              <RyddeSetninger id={5} />
            </Router>
          )
        );
        
        /*Note that there should be created a .env file with REACT_APP_API_URL=https://yourexampleapi.com to replace http://localhost:8000
        See https://stackoverflow.com/questions/62026834/how-to-add-restore-the-value-of-process-env-react-app-api-url*/
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
          `http://localhost:8000/api/rydde_setninger/${5}`,
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
              <RyddeSetninger id={5} />
            </Router>
          )
        );
    
        await screen.findByText('Jeg');
        const text = screen.getByText('Jeg');
    
        expect(text.tagName.toLowerCase()).toEqual('button');
    });


    test('should return "Riktig!" on correct play through, and buttons are disabled', async () => {
        axios.get.mockResolvedValue({ data: resp });
    
        await act(async () =>
          render(
            <Router>
              <RyddeSetninger id={5} restartSet={() => <></>} />
            </Router>
          )
        );
    
        await screen.findByText('Jeg');
        const button = screen.getByText('Jeg');
        fireEvent.click(button);
        const button2 = screen.getByText('er');
        fireEvent.click(button2);
        const button3 = screen.getByText('under');
        fireEvent.click(button3);
        const button4 = screen.getByText('bordet');
        fireEvent.click(button4);

        const text = screen.getByText('Jeg');
        const checkAnswer = screen.getByText('Sjekk svar');
        fireEvent.click(checkAnswer);
    
        await screen.findByText('Riktig!');
        const answer = screen.getByText('Jeg');
        const answerButton = screen.getByText('Jeg');
    
        expect(answerButton.closest('button')).toBeDisabled();
        expect(checkAnswer.closest('button')).toBeDisabled();

        
        expect(answer.tagName.toLowerCase()).toEqual('button');
        expect(text.tagName.toLowerCase()).toEqual('button');
        
      });

    test('should return "Feil!" on incorrect play through, and buttons are disabled', async () => {
        axios.get.mockResolvedValue({ data: resp });

        await act(async () =>
        render(
            <Router>
            <RyddeSetninger id={5} restartSet={() => <></>} />
            </Router>
        )
        );

        await screen.findByText('Jeg');
        const button = screen.getByText('er');
        fireEvent.click(button);
        const button2 = screen.getByText('under');
        fireEvent.click(button2);
        const button3 = screen.getByText('Jeg');
        fireEvent.click(button3);
        const button4 = screen.getByText('bordet');
        fireEvent.click(button4);
        const text = screen.getByText('Jeg');

        const checkAnswer = screen.getByText('Sjekk svar');
        fireEvent.click(checkAnswer);

        await screen.findByText('Feil!');
        const answer = screen.getByText('Jeg');
        const answerButton = screen.getByText('Jeg');

        expect(answerButton.closest('button')).toBeDisabled();
        expect(checkAnswer.closest('button')).toBeDisabled();
        
        
        expect(answer.tagName.toLowerCase()).toEqual('button');
        expect(text.tagName.toLowerCase()).toEqual('button');
        
    });

    test('should be able to click and unclick buttons in answer', async () => {
        axios.get.mockResolvedValue({ data: resp });
    
        await act(async () =>
          render(
            <Router>
              <RyddeSetninger id={5} restartSet={() => <></>} />
            </Router>
          )
        );
    
        await screen.findByText('Jeg');
        const button = screen.getByText('Jeg');
        fireEvent.click(button);
        const button11 = screen.getByText('Jeg');
        fireEvent.click(button11);
        const button12 = screen.getByText('Jeg');
        fireEvent.click(button12);
        const button2 = screen.getByText('er');
        fireEvent.click(button2);
        const button3 = screen.getByText('under');
        fireEvent.click(button3);
        const button4 = screen.getByText('bordet');
        fireEvent.click(button4);
    
        const checkAnswer = screen.getByText('Sjekk svar');
        fireEvent.click(checkAnswer);
    
        await screen.findByText('Riktig!');
        expect(screen.getByText('Jeg')).toBeVisible();
        expect(screen.getByText('er')).toBeVisible();
        expect(screen.getByText('under')).toBeVisible();
        expect(screen.getByText('bordet')).toBeVisible();
        expect(screen.getByText('Riktig!')).toBeVisible();
      });
});

