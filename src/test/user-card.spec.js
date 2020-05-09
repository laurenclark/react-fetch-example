import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/user-card';

test('there is a .card div and it is populated', () => {
    render(<Card username="Joe Blogs" />);
    expect(document.querySelector('.card')).not.toBeEmpty();
});

test('it displays the name label and the username', () => {
    const { getByText } = render(<Card username="Joe Bloggs" />);
    const label = getByText(/Name:/i);
    const name = getByText(/Joe Bloggs/i);
    expect(label).toBeInTheDocument();
    expect(name).toBeInTheDocument();
});
