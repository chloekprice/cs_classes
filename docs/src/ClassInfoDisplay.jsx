import React from 'react';

function displayClass() {
    return(
        <div>
            <div>
                {showClassSummary()}
            </div>
            <div>
                {showPotentialTracks()}
            </div>
        </div>
    );
}

function showClassSummary() {
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <h1>CS 111: Intro to Computer Science</h1>
            <p>Teaches how to design, develop, reason about, and test programs. 
                Topics include higher-order functions, object-oriented programming, 
                recursion, algorithms, data structures, decomposition, interpreters, 
                and regular expressions.</p>

            <div className="flex-containers">
                <h2 style={{ flex: '2' }}>Pre-Requisite Courses:</h2>
                <p style={{ flex: '3', margin: 0 }}>None</p>
            </div>

            <div className="flex-containers">
                <h2 style={{ flex: '2' }}>When Taught:</h2>
                <p style={{ flex: '3', margin: 0 }}>Fall, Winter, Spring, Summer</p>
            </div>
        </div>
    );
}


function showPotentialTracks() {
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