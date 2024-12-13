import React, { useState } from 'react';
import '../styles/textbox.css'

const CenteredInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="centered-container">
      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Paste Spotify playlist link here"
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default CenteredInput;
