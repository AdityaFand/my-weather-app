import React, { useState } from 'react';

interface FormProps {
  onSubmit: (city: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Add City</button>
    </form>
  );
};

export default Form;
