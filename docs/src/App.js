import './App.css';
import displayClass from './ClassInfoDisplay';
import React, { useState } from 'react';
import Tabs from './Tabs';
import Sidebar from './Sidebar';

function App() {

  const tabData = [
    { label: "Classes" },
    { label: "About the major" },
    { label: "Objectives" },
    { label: "Outcomes"}
  ];

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
        <Tabs tabs={tabData} />
      </div>
      
      <div className="content">
        <div className="sidebar">
          <Sidebar onOptionSelect={handleOptionSelect}/>
        </div>
        <div className="main-content">
          {displayClass(selectedOption.value)}
        </div>
      </div>
    </div>
  );
}

export default App;
