import React from "react";
import { Routes, Route } from "react-router-dom";
import GetEmployees from "./components/GetEmployees";
import AddEmployee from "./components/AddEmployee";
import Home from "./components/Home";
import Error from "./components/Error";
import GetEmpById from "./components/GetEmpById";
import ShowEmployee from "./components/ShowEmployee";
import EditEmployee from "./components/EditEmployee";
import Welcome from "./components/Welcome";
import UpdateEmpById from "./components/UpdateEmpById";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/getemployees" element={<GetEmployees />} />
        <Route exact path="/addemployee" element={<AddEmployee />} />
        <Route exact path="/getemployeebyid" element={<GetEmpById />} />
        <Route exact path="/getemployeebyid/:eid" element={<ShowEmployee />} />
        <Route exact path="/updateemployee/:eid" element={<EditEmployee />} />
        <Route exact path="/updateempbyid" element={<UpdateEmpById />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
