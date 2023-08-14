import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutComp from "./AboutComp";
import HomeComp from "./HomeComp";
import ProjectsComp from "./ProjectsComp";
import ContactComp from "./ContactComp";

const RouterComp = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeComp />} />
        <Route exact path="/about" element={<AboutComp />} />
        <Route exact path="/projects" element={<ProjectsComp />} />
        <Route exact path="/contactme" element={<ContactComp />} />
      </Routes>
    </>
  );
};

export default RouterComp;
