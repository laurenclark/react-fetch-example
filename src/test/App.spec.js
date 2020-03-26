import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';

test('renders the title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Fetch Users/i);
    expect(titleElement).toBeInTheDocument();
});
