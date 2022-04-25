/* eslint-disable no-undef */
import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StartPage from './StartPage';
import axios from "axios";

jest.mock('axios');

describe('The StartPage component', () => {
    test('should render StartPage component', async () => {
        axios.get.mockResolvedValue({ data: {} });

        await act(async () =>
            render(
                <Router>
                    <StartPage />
                </Router>
            )
        );

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            `/api/sets`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                },
            }
        );
    });

});