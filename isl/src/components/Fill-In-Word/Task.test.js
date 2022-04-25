import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * @author Gaute
 * Test for Task component
 */

jest.mock('axios')
jest.useFakeTimers();

test("should render and display words in the task's sentence", () => {
    const word1 = screen.getByText(/its/i)
    const word2 = screen.getByText(/a/i)
    const word3 = screen.getByText(/missing-word/i)
    expect(word1).toBeInTheDocument()
    expect(word2).toBeInTheDocument()
    expect(word3).toBeInTheDocument()
})
