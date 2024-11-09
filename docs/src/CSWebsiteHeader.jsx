import React from 'react';
import Tabs from './Tabs';

const tabData = [
    { label: "Classes" },
    { label: "About the major" },
    { label: "Objectives" },
    { label: "Outcomes"}
  ];


function displayHeader() {
    return(
        <div>
            <div>
                <Tabs tabs={tabData} />
            </div>
            <div>
                {showBanner()}
            </div>
        </div>
    );
}

function showNavigationItems() {
 
        
    return (
        <div>
        </div>
    );
}

function showBanner() {
    return (
        <div>
        </div>
    );
}

export default displayHeader;