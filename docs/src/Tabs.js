import React, { useState } from "react";
import Tab from "./Tab";
import "./App.css";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const[value, setValue] = useState('required')

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    function quotes(value) {
        if (value === 0) {
            return showRequired();
        } else {
            return showElectives();
        }
    }

    var options0 = [
        { label: 'CS 111', value: 'required' },
        { label: 'CS 235', value: 'required' },
        { label: 'CS 236', value: 'required' },
      ];

      var options1 = [
        { label: 'CS 256', value: 'elective' },
        { label: 'CS 356', value: 'elective' },
        { label: 'CS 456', value: 'elective' },
      ];
    
    const handleSortClick = (event) => {
        setValue(event.target.value);
    };

    function showRequired() {
        return (
            <div className="tab-content">
                <select value={value} onChange={handleSortClick}>
                    {options0.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        );
    }

    function showElectives() {
        return (
            <div className="tab-content">
                <select value={value} onChange={handleSortClick}>
                    {options1.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tabs;