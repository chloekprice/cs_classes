import logo from './logo.svg';
import showClassSummary from "./ClassInfoDisplay"
import showPotentialTracks from "./ClassInfoDisplay"
import './App.css';
import displayClass from './ClassInfoDisplay';
import Tabs from './Tabs';
import Sidebar from './Sidebar';

function App() {

  const tabData = [
    { label: "Classes" },
    { label: "About the major" },
    { label: "Objectives" },
    { label: "Outcomes"}
  ];

  return (
    <div className="Site">
      <div className="navbar">
        <Tabs tabs={tabData} />
      </div>
      
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          {displayClass()}
        </div>
      </div>
    </div>
  );
}

export default App;
