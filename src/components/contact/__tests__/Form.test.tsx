import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

const placeholder = {
  name: 'William Shakespeare',
  email: 'william.shakespeare@example.com',
  message: 'To be, or not to be',
};

function init() {
  render(<Form placeholder={placeholder} />);
}

test('has contact header', () => {
  init();
  expect(screen.queryByText(/contact/i));
});

test('shows correct placeholder', () => {
  init();
  Object.values(placeholder).forEach((v) => {
    expect(screen.getByPlaceholderText(v));
  });
});
