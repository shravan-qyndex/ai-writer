import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../src/components/Testimonials';

describe('Testimonials', () => {
  test('renders without crashing', () => {
    const { container } = render(<Testimonials />);
    expect(container).toBeTruthy();
  });

  test('is a valid React component', () => {
    expect(typeof Testimonials).toBe('function');
  });
});
