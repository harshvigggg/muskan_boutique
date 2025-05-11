import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [tokenNumber, setTokenNumber] = useState('');
  const [readyTokens, setReadyTokens] = useState([]);

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    if (tokenNumber) {
      setReadyTokens([...readyTokens, tokenNumber]);
      setTokenNumber('');
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our Boutique</h1>
      <p>Check if your suite is ready by entering your token number below:</p>

      <div className="client-section">
        <input
          type="text"
          placeholder="Enter your token number"
          value={tokenNumber}
          onChange={(e) => setTokenNumber(e.target.value)}
        />
        <button onClick={handleTokenSubmit}>Check</button>
      </div>

      <div className="ready-tokens">
        <h2>Ready Suites</h2>
        <ul>
          {readyTokens.map((token, index) => (
            <li key={index}>Token #{token} is ready for pickup!</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;