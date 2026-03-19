// src/components/__tests__/Nav.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { Nav } from '../Nav';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

jest.mock('next/link', () => {
  return ({ children }) => <a>{children}</a>;
});

jest.mock('@/components/ui/button', () => {
  return {
    Button: ({ children }) => <button>{children}</button>,
  };
});

describe('Nav Component', () => {
  test('renders the logo and navigation links', () => {
    render(<Nav />);
    
    expect(screen.getByText('AI writing tool')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  test('renders the login and get started buttons', () => {
    render(<Nav />);
    
    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('toggles mobile menu on button click', () => {
    render(<Nav />);
    
    const toggleButton = screen.getByLabelText('Open menu');
    fireEvent.click(toggleButton);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    
    expect(screen.queryByText('Features')).not.toBeVisible();
  });

  test('closes mobile menu when a link is clicked', () => {
    render(<Nav />);
    
    const toggleButton = screen.getByLabelText('Open menu');
    fireEvent.click(toggleButton);
    
    const featuresLink = screen.getByText('Features');
    fireEvent.click(featuresLink);
    
    expect(screen.queryByText('Features')).not.toBeVisible();
  });

  test('renders mobile menu correctly when open', () => {
    render(<Nav />);
    
    const toggleButton = screen.getByLabelText('Open menu');
    fireEvent.click(toggleButton);
    
    expect(screen.getByText('Features')).toBeVisible();
    expect(screen.getByText('Get Started')).toBeVisible();
  });
});
