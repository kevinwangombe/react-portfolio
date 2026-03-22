import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      id: 1,
      icon: '📱',
      title: 'Fully Responsive',
      description:
        'Works perfectly on mobile, tablet, and desktop devices with fluid layouts',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Lightning Fast',
      description:
        'Optimized performance with lazy loading and efficient code splitting',
    },
    {
      id: 3,
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautiful and clean user interface with smooth animations',
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Secure',
      description: 'Built with best practices for security and data protection',
    },
    {
      id: 5,
      icon: '📊',
      title: 'Analytics',
      description: 'Track user behavior and performance metrics easily',
    },
    {
      id: 6,
      icon: '🌍',
      title: 'SEO Optimized',
      description: 'Search engine friendly with proper meta tags and structure',
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <p className="section-subtitle">
          Everything you need for a modern web experience
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
