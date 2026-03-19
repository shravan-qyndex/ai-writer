// src/components/__tests__/CTA.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { CTA } from '../CTA';
import { EmailSignup } from '@/components/EmailSignup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mocking external dependencies
jest.mock('@/components/EmailSignup', () => {
  return {
    EmailSignup: jest.fn(() => <div>Mocked Email Signup</div>),
  };
});

jest.mock('next/link', () => {
  return ({ children }) => <div>{children}</div>;
});

describe('CTA Component', () => {
  beforeEach(() => {
    render(<CTA />);
  });

  it('renders the main heading', () => {
    const heading = screen.getByText(/Ready to ship your/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading with the gradient text', () => {
    const gradientText = screen.getByText(/next big thing/i);
    expect(gradientText).toBeInTheDocument();
    expect(gradientText).toHaveClass('gradient-text');
  });

  it('renders the description paragraph', () => {
    const description = screen.getByText(/Join thousands of teams building with AI writing tool/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the EmailSignup component', () => {
    expect(EmailSignup).toHaveBeenCalled();
    const emailSignup = screen.getByText(/Mocked Email Signup/i);
    expect(emailSignup).toBeInTheDocument();
  });

  it('renders the Get Started button with a link', () => {
    const getStartedButton = screen.getByText(/Get Started/i);
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton.closest('div')).toHaveTextContent('Get Started');
  });

  it('renders the See how it works button with a link', () => {
    const seeHowItWorksButton = screen.getByText(/See how it works/i);
    expect(seeHowItWorksButton).toBeInTheDocument();
    expect(seeHowItWorksButton.closest('div')).toHaveTextContent('See how it works');
  });

  it('renders the sign-in link', () => {
    const signInLink = screen.getByText(/Sign in/i);
    expect(signInLink).toBeInTheDocument();
    expect(signInLink).toHaveClass('underline');
  });
});
