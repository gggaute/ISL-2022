import axios from 'axios'
import React from 'react'
import { render, screen, act, fireEvent, cleanup } from '@testing-library/react';
import Task from './Task'
import Word from './Word'
import Words from './Words'
import FillInWord from './FillInWord'
import CheckAnswer from './CheckAnswer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NextExerciseBtn from '../NextExerciseBtn/NextExerciseBtn';


/**
 * @author Gaute
 * Test for Words component
 */

jest.mock('axios')
jest.useFakeTimers();


test('should render button when rendering Word', () => {
    const word_component = render(<Word word='word' missingWord='missing-word' onClick={console.log('blblblbl')} disabled={false}></Word>)
    const button = screen.getByRole('button', {name: /word/i})
    expect(button).toBeInTheDocument()
})


  