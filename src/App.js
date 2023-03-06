import React, { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  const [position, setPosition] = useState("top");

  const handleClick = () => {
    if (position === "top") {
      console.log("position", position);
    }
  };

  return (
    <div className="App">
      <div>
        <Tooltip title="top" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
