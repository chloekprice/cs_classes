import React, { useState } from 'react';

function Sidebar() {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');

    const options1 = [
        { value: 'CS 111', label: 'CS 111' },
        { value: 'CS 235', label: 'CS 235' },
        { value: 'CS 236', label: 'CS 236' },
    ];

    const options2 = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
        ];

    return (
        <><div className="sidebar">
            <div className="dropdown">
                <h3>Required Classes:</h3>
                <select
                    value={selectedValue1}
                    onChange={(e) => setSelectedValue1(e.target.value)}>

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
                    value={selectedValue2}
                    onChange={(e) => setSelectedValue2(e.target.value)}>

                    {options2.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div></>
    );
}

export default Sidebar;
