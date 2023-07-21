import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu component', () => {
  test('renders menu title', () => {
    render(<Menu />);
    const titleElement = screen.getByText(/This weeks Specials!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders online menu button', () => {
    render(<Menu />);
    const buttonElement = screen.getByRole('button', { name: /Online Menu/i });
    expect(buttonElement).toBeInTheDocument();
  });
});