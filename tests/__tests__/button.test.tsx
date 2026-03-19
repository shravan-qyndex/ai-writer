import React from 'react';
import { render, screen } from '@testing-library/react';
import button from '../src/components/ui/button';

describe('button', () => {
  test('renders without crashing', () => {
    const { container } = render(<button />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof button).toBe('function');
  });
});
