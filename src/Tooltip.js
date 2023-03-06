import React from "react";

export default function Tooltip(props) {
  console.log(props);

  return (
    <div className="container">
      <button className="btn" onClick={props.handleClick}>
        Hover Over Me!
      </button>
      <h1>{props.title}</h1>
    </div>
  );
}
