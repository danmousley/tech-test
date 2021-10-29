import { render, screen } from '@testing-library/react';
import Weather from './Weather';
import { BrowserRouter as Router } from "react-router-dom";

describe('Weather', () => {
  test('renders Weather component', () => {
    render(
        <Router>
            <Weather />
        </Router>
    )
  })
})
