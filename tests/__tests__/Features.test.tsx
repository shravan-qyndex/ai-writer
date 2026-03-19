import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../src/components/Features';

describe('Features', () => {
  test('renders without crashing', () => {
    const { container } = render(<Features />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof Features).toBe('function');
  });
});
