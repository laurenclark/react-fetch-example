import { render } from '@testing-library/react';
import Card from '../components/card.js';

test('it displays the name field', () => {
    const { getByText } = render(<Card />);
    const name = getByText(/Name/i);
    expect(name).toBeInTheDocument();
});
