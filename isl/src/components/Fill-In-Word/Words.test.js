import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


/**
 * @author Gaute
 * Test for Words component
 */

jest.mock('axios')
jest.useFakeTimers();


test('should render button when rendering Word', () => {
    const button = screen.getByRole('button', {name: /word/i})
    expect(button).toBeInTheDocument()
})
