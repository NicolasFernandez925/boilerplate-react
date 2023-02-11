import { render, screen } from '@testing-library/react';

import App from './App';
const user: { name: string; age: number } = {
  name: 'John',
  age: 30,
};

test('renders learn react link', () => {
  render(<App user={user} />);
  const linkElement = screen.getByText(/learn react/i);

  const nameUser = screen.getByText(/John/i);

  const ageUser = screen.getByText(/30/i);

  expect(linkElement).toBeInTheDocument();
  expect(nameUser).toBeInTheDocument();
  expect(ageUser).toBeInTheDocument();
});
