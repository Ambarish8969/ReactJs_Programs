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
    <NavBarComp  />
      <form onSubmit={changePath}>
        <br />
        <input
          type="number"
          className="form-control"
          style={{width:"250px"}}
          placeholder="Enter Employee Id"
          id="eid"
          onChange={changeEmployee}
          value={eid}
        />
        <br />
        <button className="btn btn-info" style={{}} type="submit">Get Employee</button>
      </form>
      <br />
      <FooterComp style={{bottom:0,left:0,position:"fixed",width:"100%"}} />
    </>
  );
};

export default GetEmpById;
