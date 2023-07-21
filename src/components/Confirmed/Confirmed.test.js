import React from 'react';
import { render } from '@testing-library/react';
import Confirmed from './Confirmed';

describe('Confirmed component', () => {
  it('renders the confirmation message', () => {
    const { getByText } = render(<Confirmed />);
    const confirmationMessage = getByText(/Booking has been confirmed!/i);
    expect(confirmationMessage).toBeInTheDocument();
  });
});