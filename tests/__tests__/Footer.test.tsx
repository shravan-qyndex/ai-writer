// src/components/Footer.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { Zap, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

jest.mock('lucide-react', () => ({
  Zap: jest.fn(() => <svg data-testid="zap-icon" />),
  Twitter: jest.fn(() => <svg data-testid="twitter-icon" />),
  Github: jest.fn(() => <svg data-testid="github-icon" />),
  Linkedin: jest.fn(() => <svg data-testid="linkedin-icon" />),
  Youtube: jest.fn(() => <svg data-testid="youtube-icon" />),
}));

describe('Footer', () => {
  it('renders the footer with the correct brand name', () => {
    render(<Footer />);
    expect(screen.getByText(/AI writing tool/i)).toBeInTheDocument();
  });

  it('renders the correct number of social links', () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole('link', { name: /twitter|github|linkedin|youtube/i });
    expect(socialLinks).toHaveLength(4);
  });

  it('renders all footer link categories', () => {
    render(<Footer />);
    const categories = ['Product', 'Company', 'Legal', 'Support'];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders all links under the Product category', () => {
    render(<Footer />);
    const productLinks = ['Features', 'Pricing', 'Changelog', 'Roadmap'];
    productLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders the current year in the copyright notice', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(`© ${currentYear} AI writing tool. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders the tagline correctly', () => {
    render(<Footer />);
    expect(screen.getByText(/The modern platform that helps teams ship faster./i)).toBeInTheDocument();
  });
});
