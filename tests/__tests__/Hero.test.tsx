// src/components/__tests__/Hero.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';
import { Button } from "@/components/ui/button";
import { EmailSignup } from "@/components/EmailSignup";

jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children }) => <button>{children}</button>),
}));

jest.mock('@/components/EmailSignup', () => ({
  EmailSignup: jest.fn(() => <div>Email Signup Component</div>),
}));

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('renders the hero section', () => {
    const heroSection = screen.getByRole('heading', { name: /Write Smarter,/i });
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the empowering creators message', () => {
    const empoweringMessage = screen.getByText(/Empowering 10,000+/i);
    expect(empoweringMessage).toBeInTheDocument();
  });

  it('renders the Get Started button with a link', () => {
    const getStartedButton = screen.getByRole('button', { name: /Get Started/i });
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveTextContent('Get Started');
  });

  it('renders the EmailSignup component', () => {
    const emailSignup = screen.getByText(/Email Signup Component/i);
    expect(emailSignup).toBeInTheDocument();
  });

  it('renders the description text', () => {
    const descriptionText = screen.getByText(/Revolutionize your writing process with AI-powered tools/i);
    expect(descriptionText).toBeInTheDocument();
  });
});
