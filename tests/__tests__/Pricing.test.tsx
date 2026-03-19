// src/components/__tests__/Pricing.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pricing } from '../Pricing';
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mocking external dependencies
jest.mock("next/link", () => {
  return ({ children }) => <div>{children}</div>;
});

jest.mock("@/components/ui/button", () => {
  return {
    Button: ({ children }) => <button>{children}</button>,
  };
});

describe('Pricing Component', () => {
  beforeEach(() => {
    render(<Pricing />);
  });

  it('renders the pricing section header', () => {
    const header = screen.getByText(/Simple, transparent pricing/i);
    expect(header).toBeInTheDocument();
  });

  it('renders all pricing plans', () => {
    const plans = ['Starter', 'Pro', 'Enterprise'];
    plans.forEach(plan => {
      const planName = screen.getByText(plan);
      expect(planName).toBeInTheDocument();
    });
  });

  it('renders the correct price for each plan', () => {
    const prices = ['$19', '$49', '$199'];
    prices.forEach(price => {
      const priceElement = screen.getByText(price);
      expect(priceElement).toBeInTheDocument();
    });
  });

  it('renders the description for each plan', () => {
    const descriptions = [
      "Perfect for indie hackers and small projects.",
      "Everything growing teams need to move fast.",
      "Dedicated infrastructure and white-glove support."
    ];
    descriptions.forEach(description => {
      const descriptionElement = screen.getByText(description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  it('renders the features list for each plan', () => {
    const features = [
      "5 projects",
      "10 GB storage",
      "Basic analytics",
      "Community support",
      "Custom domain",
      "Unlimited projects",
      "100 GB storage",
      "Advanced analytics",
      "Priority support (< 4h SLA)",
      "Custom domains",
      "Team collaboration",
      "API access",
      "Everything in Pro",
      "1 TB storage",
      "SSO / SAML",
      "Audit logs",
      "Dedicated account manager",
      "Custom SLA",
      "On-premise option"
    ];
    features.forEach(feature => {
      const featureElement = screen.getByText(feature);
      expect(featureElement).toBeInTheDocument();
    });
  });

  it('renders the call to action buttons for each plan', () => {
    const ctas = ['Start free trial', 'Start free trial', 'Talk to sales'];
    ctas.forEach(cta => {
      const ctaElement = screen.getByText(cta);
      expect(ctaElement).toBeInTheDocument();
    });
  });

  it('renders the FAQ and contact links', () => {
    const faqLink = screen.getByText(/Read our FAQ/i);
    const contactLink = screen.getByText(/contact us/i);
    expect(faqLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('renders the popular badge for the Pro plan', () => {
    const popularBadge = screen.getByText(/Most popular/i);
    expect(popularBadge).toBeInTheDocument();
  });
});
