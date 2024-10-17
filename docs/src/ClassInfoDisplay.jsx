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
        <div>
            <h1>Class Info</h1>
        </div>
    );
}

function showPotentialTracks() {
    return (
        <div>
            <h1>Potential Tracks</h1>
        </div>
    );
}

export default displayClass;