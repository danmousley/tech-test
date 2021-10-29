import { render, screen } from '@testing-library/react';
import QuizQuestion from './QuizQuestion';
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event';

describe('QuizQuestion', () => {
  test('renders QuizQuestion component', () => {
    render(
        <Router>
            <QuizQuestion />
        </Router>
    )
  })

  test('no feedback on component load', () => {
    render(
        <Router>
            <QuizQuestion />
        </Router>
    )

    expect(screen.queryByText('Correct')).toBeNull();
    expect(screen.queryByText('Sorry')).toBeNull();
  })

//   test('no feedback on component load', () => {
//     render(
//         <Router>
//             <QuizQuestion />
//         </Router>
//     )

//     const getFeedback = jest.fn()
//     let input = screen.getByRole('textbox')
//     userEvent.type(input, 'cheese')
//     screen.debug();

//     expect(screen.getByText('Sorry')).toBeInTheDocument();
//   })
})