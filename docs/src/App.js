import logo from './logo.svg';
import showClassSummary from "./ClassInfoDisplay"
import showPotentialTracks from "./ClassInfoDisplay"
import './App.css';
import displayClass from './ClassInfoDisplay';

function App() {
  return (
    <div className="Site">
      {displayClass()}
    </div>
  );
}

export default App;
