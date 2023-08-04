import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarComp from "./NavBarComp";
import FooterComp from "./FooterComp";

const GetEmpById = () => {
  const [eid, setEid] = useState("");
  const history = useNavigate();

  const changeEmployee = (event) => {
    let newData = event.target.value;
    setEid(newData);
  };

  const changePath = (event) => {
    event.preventDefault();
    history(`/getemployeebyid/${eid}`);
  };

  return (
    <>
    <NavBarComp />
      <form onSubmit={changePath}>
        <input
          type="number"
          placeholder="Enter Employee Id"
          id="eid"
          onChange={changeEmployee}
          value={eid}
        />
        <button style={{backgroundColor: "#4caf50", padding:"2px"}} type="submit">Get Employee</button>
      </form>
      <FooterComp />
    </>
  );
};

export default GetEmpById;
