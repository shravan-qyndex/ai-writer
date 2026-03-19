import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof App).toBe('function');
  });
});
