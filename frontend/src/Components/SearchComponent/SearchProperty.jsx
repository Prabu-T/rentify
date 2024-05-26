import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './SearchStyles.css';
import axios from 'axios';

function SearchProperty({ apiCall, options, placeholderText, setSelectedOptions }) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedOptions, setSelectedOptionsLocal] = useState([]);
  const [isOptionsListVisible, setIsOptionsListVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    apiCall();
    setPlaceholder(placeholderText);
  }, []);

  useEffect(() => {
    
    setSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleOptionSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptionsLocal([...selectedOptions, option]);
    }
    setSearchInput('');
  };

  const handleOptionDeselect = (option) => {
    setSelectedOptionsLocal(selectedOptions.filter(item => item !== option));
  };

  const toggleOptionsList = () => {
    setIsOptionsListVisible(!isOptionsListVisible);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="multi-select-dropdown">
      <div className="search-field">
        {selectedOptions.map((option, index) => (
          <span key={index} className="selected-option">
            {option} <button onClick={() => handleOptionDeselect(option)}>x</button>
          </span>
        ))}
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder={placeholder}
          onFocus={() => setIsOptionsListVisible(true)} 
        />
        <button onClick={toggleOptionsList} className="toggle-button">
          <FontAwesomeIcon icon={isOptionsListVisible ? faChevronUp : faChevronDown} />
        </button>
      </div>
      {isOptionsListVisible && filteredOptions.length > 0 && (
        <div className="options-list">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="option-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProperty;
