import React from 'react';
import { render, screen } from '@testing-library/react';
import main from '../src/main';

describe('main', () => {
  test('renders without crashing', () => {
    const { container } = render(<main />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof main).toBe('function');
  });
});
