import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import Apply from "./Apply";

const RouterComp = () => {
  return (
    <>
      <Routes>
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apply" element={<Apply />} />
      </Routes>
    </>
  );
};

export default RouterComp;
