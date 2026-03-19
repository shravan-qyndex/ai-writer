import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailSignup from '../src/components/EmailSignup';

describe('EmailSignup', () => {
  test('renders without crashing', () => {
    const { container } = render(<EmailSignup />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof EmailSignup).toBe('function');
  });
});
