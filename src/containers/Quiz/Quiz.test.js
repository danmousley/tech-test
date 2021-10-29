import { render, screen } from '@testing-library/react';
import Quiz from './Quiz';
import { BrowserRouter as Router } from "react-router-dom";

describe('Quiz', () => {
  test('renders Quiz component', () => {
    render(
        <Router>
            <Quiz />
        </Router>
    )
  })

  test('renders Quiz component', () => {
    render(
        <Router>
            <Quiz />
        </Router>
    )
  })
})
