import React from 'react';
import CTA from '../src/components/CTA';
import EmailSignup from '../src/components/EmailSignup';
import Features from '../src/components/Features';
import Footer from '../src/components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Frontend App</h1>
      <CTA />
      <Features />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default App;