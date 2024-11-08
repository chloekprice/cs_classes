import './App.css';
import displayClass from './ClassInfoDisplay';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import displayHeader from './CSWebsiteHeader';

function App() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleValueSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="Site">
      <div className="navbar">
        {displayHeader()}
      </div>
      
      <div className="content">
        <div className="sidebar">
          <Sidebar onOptionSelect={handleOptionSelect} onValueSelect={handleValueSelect}/>
        </div>
        <div className="main-content">
          {displayClass(selectedOption)}
        </div>
      </div>
    </div>
  );
}

export default App;
