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
 * Test for Task component
 */

jest.mock('axios')
jest.useFakeTimers();

test("should render and display words in the task's sentence", () => {
    const task_component = render(<Task sentence={['its', 'a', 'missing-word']} onload={false} missingWord='missing-word' missingWordIndex={2}></Task>)
    const word1 = screen.getByText(/its/i)
    const word2 = screen.getByText(/a/i)
    const word3 = screen.getByText(/missing-word/i)
    expect(word1).toBeInTheDocument()
    expect(word2).toBeInTheDocument()
    expect(word3).toBeInTheDocument()
})
