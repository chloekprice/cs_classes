import React from 'react';

function displayClass(info_class) {
    return(
        <div>
            <div>
                {showClassSummary(info_class)}
            </div>
            <div>
                {showPotentialTracks(info_class)}
            </div>
        </div>
    );
}

function showClassSummary(info_class) {
    var class_info = {
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
        if (info[i]['class_code'] === info_class) {
            class_info['class_name'] = info[i]['class_name']
            class_info['class_code'] = info[i]['class_code']
            class_info['description'] = info[i]['description']
            class_info['pre_req'] = info[i]['pre_req']
            class_info['when_taught'] = info[i]['when_taught']
        }
    }
    
        
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <h1>{class_info.class_code}: {class_info.class_name}</h1>
            <p>{class_info.description}</p>

            <div className="flex-containers">
                <h2 style={{ flex: '2' }}>Pre-Requisite Courses:</h2>
                <p style={{ flex: '3', margin: 0 }}>{class_info.pre_req}</p>
            </div>

            <div className="flex-containers">
                <h2 style={{ flex: '2' }}>When Taught:</h2>
                <p style={{ flex: '3', margin: 0 }}>{class_info.when_taught}</p>
            </div>
        </div>
    );
}

function showPotentialTracks(info_class) {
    return (
        <div style={{ padding: '20px'}}>
            <h1>Potential Tracks</h1>
            <div class="link-container">
                <div class="link"><a href="link1.html">Human Computer Interaction</a></div>
                <div class="link"><a href="link2.html">Software Engineering</a></div>
                <div class="link"><a href="link3.html">Machine Learning and Artificial Intelligence</a></div>
            </div>
        </div>
    );
}

export default displayClass;