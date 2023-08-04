import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBarComp from "./NavBarComp";
import FooterComp from "./FooterComp";

const EditEmployee = () => {
  let [employee, setEmployee] = useState({
    ename: "",
    eage: "",
    esalary: "",
  });

  const { eid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployee = async () => {
      try {
        let getEmployee = await fetch(
          `http://localhost:8080/api/getemployeebyid/${eid}`
        );
        let jsondata = await getEmployee.json();
        console.log(jsondata);
        setEmployee(jsondata);
      } catch (error) {
        console.log("Error fetching employee: ", error);
      }
    };

    getEmployee();
  }, [eid]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ename: employee.ename,
      eage: employee.eage,
      esalary: employee.esalary,
    }),
  };

  const handleSubmit = async (event) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/updateemployee/${eid}`,
        requestOptions
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  };

  return (
    <>
    <NavBarComp />
      <h1>Edit page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          id="ename"
          name="ename"
          value={employee.ename}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Employee Age"
          id="eage"
          name="eage"
          value={employee.eage}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Employee Salary"
          id="esalary"
          name="esalary"
          value={employee.esalary}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button type="submit">Update Employee</button>
      </form>
      <button style={{backgroundColor:"blue",color:'white'}}
        onClick={() => {
          navigate("/getemployees");
        }}
      >
        Get Employees
      </button>
      <FooterComp />
    </>
  );
};

export default EditEmployee;
