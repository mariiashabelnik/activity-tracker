import React from "react";

function InputBox(props) {
  function handleChange(event) {
    const value = event.target.value;
    props.setInputText(value);
  }

  return (
    <div>
      <p>{props.inputsText}</p>
      <input type="text" onChange={handleChange} value={props.inputText} />
      <button onClick={props.createActivity}>{props.btnValue}</button>
    </div>
  );
}

export default InputBox;
