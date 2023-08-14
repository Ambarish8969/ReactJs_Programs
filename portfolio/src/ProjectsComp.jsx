import React from "react";
import NavbarComp from "./NavbarComp";

const ProjectsComp = () => {
  return (
    <>
      <NavbarComp />
      <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-primary">
          <div className="ms-2 me-auto ">
            <div className="fw-bold">Weather App Using React</div>
            Content for list item
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-primary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Hospital Management System using Hibernate
            </div>
            Content for list item
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-primary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              REST APIs for Vehicle Management System using Spring Boot
            </div>
            Content for list item
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-primary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Recipies App using Django</div>
            Content for list item
          </div>
        </li>
      </ol>
    </>
  );
};

export default ProjectsComp;
