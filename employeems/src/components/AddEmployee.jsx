import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarComp from "./NavBarComp";
import FooterComp from "./FooterComp";

const AddEmployee = () => {
  let [employee, setEmployee] = useState({
    ename: "",
    eage: "",
    esalary: "",
  });

  const navigate = useNavigate();

  function changeEmployee(event) {
    const newData = { ...employee };
    newData[event.target.id] = event.target.value;
    setEmployee(newData);
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ename: employee.ename,
      eage: employee.eage,
      esalary: employee.esalary,
    }),
  };

  async function addEmployeeData(e) {
    // e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/addemployee",
        requestOptions
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

  return (
    <>
      <NavBarComp />
      <div
        className="card"
        style={{
          width: "18rem",
          height: "450px",
          backgroundImage: "linear-gradient(#00b7c2, #4eF037)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Form</h5>
          <form onSubmit={addEmployeeData}>
            <div className="mb-3" style={{ padding: "5px" }}>
              <label htmlfor="formGroupExampleInput" className="form-label">
                Employee Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="ename"
                name="ename"
                placeholder="ename"
                value={employee.ename}
                required
                onChange={(e) => changeEmployee(e)}
              />
            </div>
            <div className="mb-3" style={{ padding: "5px" }}>
              <label htmlfor="formGroupExampleInput2" className="form-label">
                Employee Age :
              </label>
              <input
                type="number"
                className="form-control"
                id="eage"
                name="eage"
                placeholder="eage"
                value={employee.eage}
                required
                onChange={(e) => changeEmployee(e)}
              />
            </div>
            <div className="mb-3" style={{ padding: "5px" }}>
              <label htmlfor="formGroupExampleInput2" className="form-label">
                Employee Salary :
              </label>
              <input
                type="number"
                className="form-control"
                id="esalary"
                name="esalary"
                placeholder="esalary"
                value={employee.esalary}
                required
                onChange={(e) => changeEmployee(e)}
              />
            </div>
            {/* <button
              style={{ marginLeft: "5px", marginTop: "8px" }}
              
            >
              Add Employee
            </button> */}
            <button type="submit" className="btn btn-success" style={{ marginLeft: "5px", marginTop: "8px" }}>Add Employee</button>
            <button type="submit"
              style={{
                backgroundColor: "blue",
                
                color: "white",
                marginLeft: "5px", marginTop: "8px"
              }}
              className="btn btn-success"
              onClick={() => {
                navigate("/getemployees");
              }}
            >
              Get Employees
            </button>
          </form>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default AddEmployee;
