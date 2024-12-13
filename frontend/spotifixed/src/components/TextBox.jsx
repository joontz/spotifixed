import React, { useState } from 'react';
import '../styles/textbox.css'

const CenteredInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log('Submitted:', inputValue);
    setInputValue(''); // Optionally clear the input after submission
  };

  return (
    <div className="centered-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Playlist URL..."
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Generate
        </button>
      </form>
    </div>
  );
};

export default CenteredInput;