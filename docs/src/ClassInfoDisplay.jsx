import React, { useState } from 'react';

function displayClass(info_class) {
    return(
        <div>
            <div>
                {showClassSummary(info_class)}
            </div>
        </div>
    );
}

function showWhenOffered(offeredSemesters) {
    if (offeredSemesters.includes("Fall") && offeredSemesters.includes("Winter") && offeredSemesters.includes("Spring") && offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Fall") && offeredSemesters.includes("Winter") && offeredSemesters.includes("Spring")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Fall") && offeredSemesters.includes("Winter") && offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Fall") && offeredSemesters.includes("Winter")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Fall") && offeredSemesters.includes("Spring")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Fall") && offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Fall")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Winter") && offeredSemesters.includes("Spring") && offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Winter") && offeredSemesters.includes("Spring")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Winter") && offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Spring") && offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Winter")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Spring")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("Summer")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    } else if (offeredSemesters.includes("All")) {
        return (
            <div>
                <div className="class-images">
                    <img src="https://cdn-icons-png.flaticon.com/512/12396/12396926.png" alt="Fall" width="30" height="30"/>
                    <img src="https://i.pinimg.com/originals/56/82/66/5682666998a992306c1fffa9524cfaf2.png" alt="Winter" width="30" height="30"/>
                    <img src="https://images.vexels.com/media/users/3/324719/isolated/preview/03a6db7b9a3e670d5bbaada517cdb4de-pink-flower-green-leaves-flat.png" alt="Spring" width="30" height="30"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/10480/10480648.png" alt="Summer" width="30" height="30"/>
                </div>
            </div>
        );
    }
    return (
        <div></div>
    );
}


function showClassSummary(info_class) {
    var class_info =  {
        "class_name": "Introduction to Computer Science",
        "class_code": "C S 111",
        "class_type": "",
        "emphasis": "",
        "pre_req": [],
        "description": "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
        "when_taught": "All Semesters/Terms",
        "next_classes": [
            "CS 235 - Data Structures",
            "CS 224 - Introduction to Computer Systems",
            "CS 236 - Discrete Structures",
            "CS 256 - Introduction to HCI",
            "CS 260 - Web Programming",
            "CS 240 - Advanced Programming",
            "CS 270 - Introduction to Machine Learning"
          ]
    }
    const info = require('./CSClasses.json');

    for(let i = 0; i < info.length; i++) {
        if (info[i]['class_code'] === info_class) {
            class_info['class_name'] = info[i]['class_name']
            class_info['class_code'] = info[i]['class_code']
            class_info['description'] = info[i]['description']
            class_info['pre_req'] = info[i]['pre_req']
            class_info['when_taught'] = info[i]['when_taught']
            class_info['next_classes'] = info[i]['next_classes']
        }
    }
    
        
    return (
        <div>
            <div className="class-info-header">
                <p className="class-code">{class_info.class_code}</p>
                <div className="parent-header">
                    <div className="sibling-header">
                        <h1 className="class-name">{class_info.class_name}</h1>
                    </div>
                    <div className='sibling-header'>
                        {showWhenOffered(class_info.when_taught)}
                    </div>
                </div>
                <p className="class-description">{class_info.description}</p>
            </div>
            <div className="class-actions">
                {showClassActions(class_info)}
            </div>
        </div>
    );
}


function showClassHover(class_hover) {
    if (class_hover === "") {
        return (
            <div></div>
        );
    }
    var class_info =  {
        "class_name": "",
        "class_code": "",
        "class_type": "",
        "emphasis": "",
        "pre_req": [],
        "description": "",
        "when_taught": ""
    }
    const info = require('./CSClasses.json');

    for(let i = 0; i < info.length; i++) {
        if (class_hover.includes(info[i]['class_code'])) {
            class_info['class_name'] = info[i]['class_name']
            class_info['class_code'] = info[i]['class_code']
            class_info['description'] = info[i]['description']
            class_info['pre_req'] = info[i]['pre_req']
            class_info['when_taught'] = info[i]['when_taught']
            class_info['next_classes'] = info[i]['next_classes']
        }
    }

    return (
        <div>
            <div className="hover-class">
                <h1 className="hover-class-name">{class_info.class_code}: {class_info.class_name}</h1>
                <p className="hover-class-description">{class_info.description}</p>
                <h2 className="hover-class-prereqs">Prerequisites:</h2>
                <ul>
                    {class_info.pre_req.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                    ))}
                </ul> 
            </div>
        </div>
    );
}


function ShowPrerequisites(prereqs) {
    const [showClass, setClass] = useState("");

    return (
        <div>
            <h1 className="prereqs">Prerequisites</h1>
            <ul>
                {prereqs.map((prereq, index) => (
                    <li onMouseEnter={() => setClass(prereq)} onMouseLeave={() => setClass("")}  key={index}>{prereq}</li>
                ))}
            </ul>  
            <div>
               {showClassHover(showClass)}
            </div>
        </div>
    );
}

function ShowPotentialTracks(next_classes) {
    const [showNext, setNext] = useState("");

    return (
        <div>
            <h1 className="next-classes">Similar Classes</h1>
            <ul>
                {next_classes.map((next_class, index) => (
                    <li onMouseEnter={() => setNext(next_class)} onMouseLeave={() => setNext("")}  key={index}>{next_class}</li>
                ))}
            </ul>  
            <div>
               {showClassHover(showNext)}
            </div>
        </div>
    );
}

function showClassActions(class_info) {
    return (
        <div>
                <div className="sibling-footer">
                    <div className="class-prerequisites">
                        {ShowPrerequisites(class_info.pre_req)}
                    </div>
                </div>
                <div className="sibling-footer">
                    <div className="class-next-classes">
                        {ShowPotentialTracks(class_info.next_classes)}
                    </div>
                </div>
          
        </div>
    );
}

export default displayClass;