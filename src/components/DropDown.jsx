import React, { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
        Dropdown Button
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Resturant</li>
          <li>Hotel</li>
          <li>Park</li>
        </ul>
      )}
    </div>
  );
}

