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


jest.mock('axios')
jest.useFakeTimers();

test('should render button', () => {
  render(<CheckAnswer onClick={console.log("click")} onload = {true} disabled = {true}></CheckAnswer>)
  const button = screen.getByRole('button', {name: /sjekk svar/i})
  expect(button).toBeInTheDocument()
})

test('should call onclick', () => {
  render(<CheckAnswer onClick={render(<NextExerciseBtn answerState='correct' handleNextExercise={console.log("blbl")}></NextExerciseBtn>)} onload = {true} disabled = {true}></CheckAnswer>)
  const button = screen.getByRole('button', {name: /sjekk svar/i})
  fireEvent.click(button)
  expect(screen.getByText(/Riktig!/i)).toBeInTheDocument()
})
