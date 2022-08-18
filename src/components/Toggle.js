import React, { useState } from "react"; 

// const textState = {"OFF":"ON", "ON":"OFF"}
// let text = "OFF"

// function Toggle() {
// const [count, setCount] = useState(0)

// function toggle(){
//   setCount(count + 1);
//   text = textState[text]
// }

//   return <button onClick={toggle}>{text}</button>;
// }
// Thought my attempt was pretty short and concise, the example is much better >_<

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "white";
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <button style = {{background: color}} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
