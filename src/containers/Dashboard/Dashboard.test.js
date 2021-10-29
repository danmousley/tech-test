import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from "react-router-dom";

describe('Dashboard', () => {
  test('renders Dashboard component', () => {
    render(
        <Router>
            <Dashboard />
        </Router>
    )
  })
})
