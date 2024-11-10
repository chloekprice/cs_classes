import './App.css';
import displayClass from './ClassInfoDisplay';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import displayHeader from './CSWebsiteHeader';

function App() {
  const options1 = initialize_required_classes();
  const [selectedOption, setSelectedOption] = useState(options1[0]);
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Site">
      <div className="navbar">
        {displayHeader()}
      </div>
      
      <div className="content">
        <div className="sidebar">
          <Sidebar onOptionSelect={handleOptionSelect}/>
        </div>
        <div className="main-content">
          {selectedOption ? displayClass(selectedOption.value) : <p>Select a class to display details</p>}
        </div>
      </div>
    </div>
  );
}

function initialize_required_classes() {
  var classes = [];
  const info = require('./RequiredClasses.json');

      for(let i = 0; i < info.length; i++) {
          classes.push(
              { value: info[i]['class_code'], label: `${info[i]['class_code']}: ${info[i]['class_name']}`},
          );
      }
  
      return classes;
}

export default App;
