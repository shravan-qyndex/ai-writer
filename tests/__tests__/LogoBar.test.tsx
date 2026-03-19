// src/components/LogoBar.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { LogoBar } from './LogoBar';

jest.mock('./LogoBar', () => ({
  ...jest.requireActual('./LogoBar'),
}));

describe('LogoBar Component', () => {
  it('renders the LogoBar component with logos', () => {
    render(<LogoBar />);
    
    // Check if the title is rendered
    const titleElement = screen.getByText(/Trusted by teams at world-class companies/i);
    expect(titleElement).toBeInTheDocument();

    // Check if all logos are rendered
    const logos = [
      { name: "Acme Corp", initials: "AC" },
      { name: "Globex", initials: "GX" },
      { name: "Initech", initials: "IT" },
      { name: "Umbrella", initials: "UM" },
      { name: "Hooli", initials: "HO" },
      { name: "Pied Piper", initials: "PP" },
    ];

    logos.forEach(logo => {
      const logoElement = screen.getByTitle(logo.name);
      expect(logoElement).toBeInTheDocument();
      expect(logoElement).toHaveTextContent(logo.initials);
      expect(logoElement).toHaveTextContent(logo.name);
    });
  });

  it('renders correctly with no logos', () => {
    // Modify the LogoBar component to accept logos as props for this test
    const { rerender } = render(<LogoBar />);
    
    // Check if the title is still rendered
    const titleElement = screen.getByText(/Trusted by teams at world-class companies/i);
    expect(titleElement).toBeInTheDocument();

    // Assuming we modify the component to handle empty logos array
    rerender(<LogoBar logos={[]} />);

    // Check that no logos are rendered
    const logoElements = screen.queryAllByRole('div', { title: /.+/ });
    expect(logoElements.length).toBe(0);
  });
});
