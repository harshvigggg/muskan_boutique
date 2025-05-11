import React from 'react';
import './Workers.css';

const Workers = () => {
  const workers = [
    { name: 'Alice', role: 'Tailor', experience: '5 years' },
    { name: 'Bob', role: 'Designer', experience: '3 years' },
    { name: 'Charlie', role: 'Cutter', experience: '7 years' },
  ];

  return (
    <div className="workers-container">
      <h1>Our Workers</h1>
      <div className="workers-grid">
        {workers.map((worker, index) => (
          <div key={index} className="worker-card">
            <h2>{worker.name}</h2>
            <p>Role: {worker.role}</p>
            <p>Experience: {worker.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workers;