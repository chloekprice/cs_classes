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
            {/* <div>
                <Tabs tabs={tabData} />
            </div> */}
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
            <div className="header">
                <div className="nav-container">
                    <div class="tabs-left">
                        <div className="tab"><a href="#">Classes</a></div>
                        <div className="tab"><a href="#">About</a></div>
                    </div>
                    <div className="logo">
                        <img src="https://pbs.twimg.com/profile_images/1617582629817323520/aGL5y4Iz_400x400.jpg" alt="Logo"/>
                    </div>
                    <div className="tabs-right">
                        <div class="tab"><a href="#">Objectives</a></div>
                        <div class="tab"><a href="#">Outcomes</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default displayHeader;