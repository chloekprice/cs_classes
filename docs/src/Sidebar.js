import './Sidebar.css';
import React, { useState } from 'react';

/*const Sidebar = ({ onOptionSelect, onValueSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');
  
    const options1 = initialize_required_classes()
    const options2 = initialize_elective_classes()

    const handleOptionSelect = (option) => {
      setSelectedValue(option);
      onOptionSelect(option);
    };

    const handleValueSelect = (option) => {
        setSelectedOption(option);
        onOptionSelect(option);
      };

    return (
        <><div className="sidebar">
            <div className="dropdown">
                <h3>Required Classes:</h3>
                <select
                    value={selectedOption}
                    onChange={(e) => handleOptionSelect(e.target.value)}>

                    {options1.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="dropdown">
                <h3>Elective Classes:</h3>
                <select
                    value={selectedValue}
                    onChange={(e) => handleValueSelect(e.target.value)}>

                    {options2.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div></>
    );

};

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

function initialize_elective_classes() {
    var classes = [];
    const info = require('./ElectiveClasses.json');

        for(let i = 0; i < info.length; i++) {
            classes.push(
                { value: info[i]['class_code'], label: `${info[i]['class_code']}: ${info[i]['class_name']}` },
            );
        }
    
        return classes;
}

export default Sidebar;*/

const Sidebar = ({ onOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    const options1 = initialize_required_classes();
    const options2 = initialize_elective_classes();

    const handleOptionSelect = (option) => {
        setSelectedOption(option.value);
        onOptionSelect(option);
    };

    return (
        <div className="sidebar">
            <h3>Required Classes:</h3>
            <div className="class-list">
                {options1.map((option) => (
                    <div
                        key={option.value}
                        className={`class-item ${selectedOption === option.value ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>

            <h3>Elective Classes:</h3>
            <div className="class-list">
                {options2.map((option) => (
                    <div
                        key={option.value}
                        className={`class-item ${selectedOption === option.value ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

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

function initialize_elective_classes() {
    var classes = [];
    const info = require('./ElectiveClasses.json');

        for(let i = 0; i < info.length; i++) {
            classes.push(
                { value: info[i]['class_code'], label: `${info[i]['class_code']}: ${info[i]['class_name']}` },
            );
        }
    
        return classes;
}

export default Sidebar;
