import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';

test('renders the title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Fetch Users/i);
    expect(titleElement).toBeInTheDocument();
});

test('displays anchor text', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/View on Github/i);
    expect(titleElement).toBeInTheDocument();
});

test('link should go to github', () => {
    const { getBytext } = render(<App />);
    expect(document.querySelector('header a').getAttribute('href')).toBe(
        'https://github.com/laurenclark/react-fetch-example'
    );
});
