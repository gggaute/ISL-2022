/* eslint-disable no-undef */
import React from 'react';
import { render, act, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SetCard from './SetCard';
import axios from "axios";

jest.mock('axios');

describe('The SetCard component', () => {
    const resp = {
        id: 5,
        title: 'Hverdagsliv',
        comprehension1: 19,
        comprehension2: null,
        comprehension3: null,
        comprehension4: null,
        comprehension5: null,
        comprehension6: null,
        chat1: 22,
        chat2: null,
        chat3: null,
        chat4: null,
        chat5: null,
        chat6: null,
        sortSentence1: 11,
        sortSentence2: null,
        sortSentence3: null,
        sortSentence4: null,
        sortSentence5: null,
        sortSentence6: null,
        fillInWord1: 18,
        fillInWord2: null,
        fillInWord3: null,
        fillInWord4: null,
        fillInWord5: null,
        fillInWord6: null,
        unlock1: 14,
        unlock2: null,
        unlock3: null,
        unlock4: null,
        unlock5: null,
        unlock6: null,

    };

    test('should render SetCard component', async () => {
        axios.get.mockResolvedValue({ data: resp });

        await act(async () =>
            render(
                <Router>
                    <SetCard formData={resp} setId={5} />
                </Router>
            )
        );

        const setCardClick = screen.getByText("Hverdagsliv");
        fireEvent.click(setCardClick);

        expect(screen.getByText("Hverdagsliv")).toBeVisible();
        expect(screen.getByText("5")).toBeVisible();
    
    });

});