// src/app/layout.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout, { metadata } from './layout';

// Mocking external dependencies
jest.mock('next/font/google', () => ({
  Inter: jest.fn(() => ({ variable: 'mock-font-variable' })),
}));

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies the correct HTML attributes', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(container.querySelector('html')).toHaveAttribute('lang', 'en');
    expect(container.querySelector('html')).toHaveClass('mock-font-variable');
  });

  it('renders with default metadata', () => {
    expect(metadata.title).toBe("AI Writing Tool — Write Smarter, Faster");
    expect(metadata.description).toBe("Transform your writing process with AI-powered tools for editing, brainstorming, and content creation.");
    expect(metadata.openGraph.title).toBe("AI Writing Tool — Write Smarter, Faster");
    expect(metadata.openGraph.description).toBe("Transform your writing process with AI-powered tools for editing, brainstorming, and content creation.");
    expect(metadata.openGraph.type).toBe("website");
  });

  it('renders without children', () => {
    const { container } = render(<RootLayout />);
    expect(container.querySelector('body')).toBeEmptyDOMElement();
  });
});
