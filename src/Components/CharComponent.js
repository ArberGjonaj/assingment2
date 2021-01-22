import React from "react";
import "./charComponent.css";
const CharComponent = (props) => {
  return (
    <div className={"charComponent"} onClick={props.click}>
      <p>{props.letter}</p>
    </div>
  );
};
export default CharComponent;
