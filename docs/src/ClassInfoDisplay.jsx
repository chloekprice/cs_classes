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
        "when_taught": "All Semesters/Terms"
    }
    const info = require('./CSClasses.json');

    for(let i = 0; i < info.length; i++) {
        if (info[i]['class_code'] === info_class) {
            class_info['class_name'] = info[i]['class_name']
            class_info['class_code'] = info[i]['class_code']
            class_info['description'] = info[i]['description']
            class_info['pre_req'] = info[i]['pre_req']
            class_info['when_taught'] = info[i]['when_taught']
        }
    }
    
        
    return (
        <div>
            <div className="class-info-header">
                <p className="class-code">{class_info.class_code}</p>
                <div className="parent-header">
                    <div className="sibling">
                        <h1 className="class-name">{class_info.class_name}</h1>
                    </div>
                    <div className='sibling'>
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
        }
    }

    return (
        <div>
            <h1 className="hover-class-name">{class_info.class_code}: {class_info.class_name}</h1>
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

function showPotentialTracks(info_class) {
    return (
        <div>
            <h1>Similar Classes</h1>
        </div>
    );
}

function showClassActions(class_info) {
    return (
        <div>
            <div className="parent-footer">
                <div className="sibling">
                    <div className="class-prerequisites">
                        {ShowPrerequisites(class_info.pre_req)}
                    </div>
                </div>
                <div className="sibling">
                    <div className="class-next-classes">
                        {showPotentialTracks(class_info)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default displayClass;