import React from 'react';
import { render, screen } from '@testing-library/react';
import unknown from '../src/unknown';

describe('unknown', () => {
  test('renders without crashing', () => {
    const { container } = render(<unknown />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof unknown).toBe('function');
  });
});
