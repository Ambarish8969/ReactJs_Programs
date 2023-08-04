import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  let [name, setName] = useState({
    fname: "",
    lname: "",
  });

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    let newData = { ...name };
    newData[event.target.id] = event.target.value;
    setName(newData);
  };

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="fname"
          value={name.fname}
          placeholder="FirstName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="lname"
          value={name.lname}
          placeholder="LastName"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
      
    </>
  );
};

export default Welcome;
