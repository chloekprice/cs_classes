import './Sidebar.css';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

const Sidebar = ({ onOptionSelect }) => {
    const [isRequiredVisible, setIsRequiredVisible] = useState(true);
    const [isElectiveVisible, setIsElectiveVisible] = useState(true);
    const [visibleLevels, setVisibleLevels] = useState({});

    const options1 = initialize_required_classes();
    const groupedElectives = groupElectiveClassesByLevel(initialize_elective_classes());

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

    const toggleLevelVisibility = (level) => {
        setVisibleLevels((prevState) => ({
            ...prevState,
            [level]: !prevState[level],
        }));
    };

    return (
        <div className="sidebar">
            <div className="dropdown">
                <h3 onClick={toggleRequiredVisibility} className="dropdown-header">
                    Required Classes {isRequiredVisible ? <BsChevronUp className="chevron-icon" /> : <BsChevronDown className="chevron-icon" />}
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
                    Elective Classes {isElectiveVisible ? <BsChevronUp className="chevron-icon" /> : <BsChevronDown className="chevron-icon" />}
                </h3>
                {isElectiveVisible && (
                    <div className="class-list">
                        {Object.keys(groupedElectives).map((level) => (
                            <div className="dropdown" key={level}>
                                <h4 onClick={() => toggleLevelVisibility(level)} className="level-dropdown">
                                    {level} Classes {visibleLevels[level] ? <BsChevronUp className="chevron-icon" /> : <BsChevronDown className="chevron-icon" />}
                                </h4>
                                {visibleLevels[level] && (
                                    <div className="class-list">
                                        {groupedElectives[level].map((option) => (
                                            <div
                                                key={option.value}
                                                className={`class-item-elective ${selectedOption === option.value ? 'selected' : ''}`}
                                                onClick={() => handleOptionSelect(option)}
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

function initialize_required_classes() {
    const classes = [];
    const info = require('./RequiredClasses.json');

    for (let i = 0; i < info.length; i++) {
        classes.push({ value: info[i]['class_code'], label: `${info[i]['class_code']}: ${info[i]['class_name']}` });
    }

    return classes;
}

function initialize_elective_classes() {
    const classes = [];
    const info = require('./ElectiveClasses.json');

    for (let i = 0; i < info.length; i++) {
        classes.push({ value: info[i]['class_code'], label: `${info[i]['class_code']}: ${info[i]['class_name']}` });
    }

    return classes;
}

function groupElectiveClassesByLevel(classes) {
    const grouped = {};
    let level = '';

    classes.forEach((cls) => {
        if (cls.value.charAt(4) === 'M') {
            level = 'CSANM';
        }
        else if (cls.value.charAt(0) === 'S') {
            level = 'STAT';
        }
        else {level = cls.value.charAt(4) + '00s';}
        
        if (!grouped[level]) {
            grouped[level] = [];
        }
        grouped[level].push(cls);
    });

    return grouped;
}

export default Sidebar;