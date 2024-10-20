import React, { useState } from 'react';

const Sidebar = ({ onOptionSelect, onValueSelect }) => {
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
    

// function SidebarDrop() {
//     const [selectedValue1, setSelectedValue1] = useState('');
//     const [selectedValue2, setSelectedValue2] = useState('');

//     const options1 = initialize_required_classes()

//     const options2 = initialize_elective_classes()

//     return (
//         <><div className="sidebar">
//             <div className="dropdown">
//                 <h3>Required Classes:</h3>
//                 <select
//                     value={selectedValue1}
//                     onChange={(e) => setSelectedValue1(e.target.value)}>

//                     {options1.map((option) => (
//                         <option key={option.value} value={option.value}>
//                             {option.label}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="dropdown">
//                 <h3>Elective Classes:</h3>
//                 <select
//                     value={selectedValue2}
//                     onChange={(e) => setSelectedValue2(e.target.value)}>

//                     {options2.map((option) => (
//                         <option key={option.value} value={option.value}>
//                             {option.label}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div></>
//     );
// }

function initialize_required_classes() {
    var classes = [];
    const info = require('./RequiredClasses.json');

        for(let i = 0; i < info.length; i++) {
            classes.push(
                { value: info[i]['class_code'], label: info[i]['class_code'] },
            );
        }
    
        return classes;
}

function initialize_elective_classes() {
    var classes = [];
    const info = require('./ElectiveClasses.json');

        for(let i = 0; i < info.length; i++) {
            classes.push(
                { value: info[i]['class_code'], label: info[i]['class_code'] },
            );
        }
    
        return classes;
}

export default Sidebar;
