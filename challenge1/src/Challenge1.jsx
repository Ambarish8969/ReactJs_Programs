import React, { useState } from "react";

function Challenge1() {
  let [count, setCount] = useState(0);

  const incByOne = () => {
    // count++ will take two button clicks.
    // you can use count+1 or ++count.
    setCount(++count);
  };
  const decByOne = () => {
    // count-- will take two button clicks.
    // you can use count-1 or --count.
    setCount(--count);

    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert("ZERO limit has reached");
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incByOne}>Increment</button>
      <button onClick={decByOne}>Decrement</button>
    </>
  );
}

export default Challenge1;
