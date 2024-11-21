import './Sidebar.css';
import React, { useState } from 'react';
import {BsChevronDown} from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

const Sidebar = ({ onOptionSelect }) => {
    const [isRequiredVisible, setIsRequiredVisible] = useState(true);
    const [isElectiveVisible, setIsElectiveVisible] = useState(true);
    
    const options1 = initialize_required_classes();
    const options2 = initialize_elective_classes();

    const [selectedOption, setSelectedOption] = useState(options1[0]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option.value);
        onOptionSelect(option);
    };

    const toggleRequiredVisibility = () => {
        setIsRequiredVisible(!isRequiredVisible);
    };

    const toggleElectiveVisibility = () => {
        setIsElectiveVisible(!isElectiveVisible);
    };

    return (
        <div className="sidebar">
            <div className="dropdown">
                <h3 onClick={toggleRequiredVisibility} className="dropdown-header">
                    Required Classes { isRequiredVisible ? <BsChevronUp className="chevron-icon"/> : <BsChevronDown className="chevron-icon"/> }
                </h3>
                {isRequiredVisible && (
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
                )}
            </div>

            <div className="dropdown">
                <h3 onClick={toggleElectiveVisibility} className="dropdown-header">
                    Elective Classes { isElectiveVisible ? <BsChevronUp className="chevron-icon"/> : <BsChevronDown className="chevron-icon"/> }
                </h3>
                {isElectiveVisible && (
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
                )}
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