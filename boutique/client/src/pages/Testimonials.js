import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sophia', feedback: 'Amazing service and quality!' },
    { name: 'Emma', feedback: 'Loved the stitching and attention to detail.' },
    { name: 'Olivia', feedback: 'Highly recommend this boutique!' },
  ];

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;