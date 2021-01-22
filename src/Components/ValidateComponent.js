import React from "react";

const ValidateComponent = (props) => {
  if (props.textLength < 6) {
    return (
      <div>
        <p>Text is too short</p>
      </div>
    );
  }else{
  return (
    <div>
      <p>Text is too long</p>
    </div>
  );
}
};

export default ValidateComponent;
