// src/app/page.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './page';

// Mocking external components
jest.mock('@/components/Nav', () => () => <div>Mocked Nav</div>);
jest.mock('@/components/Hero', () => () => <div>Mocked Hero</div>);
jest.mock('@/components/LogoBar', () => () => <div>Mocked LogoBar</div>);
jest.mock('@/components/Features', () => () => <div>Mocked Features</div>);
jest.mock('@/components/Pricing', () => () => <div>Mocked Pricing</div>);
jest.mock('@/components/Testimonials', () => () => <div>Mocked Testimonials</div>);
jest.mock('@/components/CTA', () => () => <div>Mocked CTA</div>);
jest.mock('@/components/Footer', () => () => <div>Mocked Footer</div>);

describe('LandingPage', () => {
  it('renders all components correctly', () => {
    render(<LandingPage />);
    
    expect(screen.getByText('Mocked Nav')).toBeInTheDocument();
    expect(screen.getByText('Mocked Hero')).toBeInTheDocument();
    expect(screen.getByText('Mocked LogoBar')).toBeInTheDocument();
    expect(screen.getByText('Mocked Features')).toBeInTheDocument();
    expect(screen.getByText('Mocked Pricing')).toBeInTheDocument();
    expect(screen.getByText('Mocked Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Mocked CTA')).toBeInTheDocument();
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const { container } = render(<LandingPage />);
    expect(container).toBeInTheDocument();
  });
});
