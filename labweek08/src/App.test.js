import { render, screen } from '@testing-library/react';
import form from './form';

test('renders learn react link', () => {
  render(<form />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
