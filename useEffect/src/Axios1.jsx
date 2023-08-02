import React from "react";
import Axios from "axios";

const Axios1 = () => {
  function getData() {
    let data=Axios.get("http://localhost:8080/api/getallvehicles").then((res) => {
      console.log(res.data);
    });
    console.log(data)
  }
  return (
    <>
      <button onClick={getData}>Click Me</button>
    </>
  );
};

export default Axios1;
