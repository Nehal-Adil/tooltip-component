import "./index.css";
import ToolTip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <div>
        <ToolTip position="top" />
        <ToolTip position="bottom" />
      </div>
      <h1 style={{ padding: 15 }}>ToolTip</h1>
      <div>
        <ToolTip position="left" />
        <ToolTip position="right" />
      </div>
    </div>
  );
}

export default App;
