import React from "react";
import { useState } from "react";

function App() {
  let [arr, setArr] = useState([]);
  let [text, setText] = useState();

  const changeText = (event) => {
    setText(event.target.value);
  };

  const addItem = () => {
    setArr((oldItems) => {
      return [...oldItems, text];
    });
    setText("")
  };
  return (
    <>
      <input
        type="text"
        placeholder="add your item"
        value={text}
        onChange={changeText}
      />
      <button onClick={addItem}>Add</button>

      <h3>
        {arr.map((item) => {
          return <li>{item}</li>;
        })}
      </h3>
    </>
  );
}

export default App;
