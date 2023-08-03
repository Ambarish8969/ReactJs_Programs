import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  let [employee, setEmployee] = useState({
    ename: "",
    eage: "",
    esalary: "",
  });

  const navigate=useNavigate()

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
      <form onSubmit={addEmployeeData}>
        <input
          type="text"
          placeholder="Employee Name"
          id="ename"
          name="ename"
          value={employee.ename}
          required
          onChange={(e) => changeEmployee(e)}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Employee Age"
          id="eage"
          name="eage"
          value={employee.eage}
          required
          onChange={(e) => changeEmployee(e)}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Employee Salary"
          id="esalary"
          name="esalary"
          value={employee.esalary}
          required
          onChange={(e) => changeEmployee(e)}
        />
        <br />
        <br />
        <button type="submit">Add Employee</button>
      </form>
      <br />
      <button onClick={()=>{
        navigate("/getemployees")
      }}>Get Employees</button>
    </>
  );
};

export default AddEmployee;
