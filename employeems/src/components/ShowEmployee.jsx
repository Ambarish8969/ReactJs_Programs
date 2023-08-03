import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowEmployee = () => {
  let [employee, setEmployee] = useState({
    ename: "",
    eage: "",
    esal: "",
  });
  
  const { eid } = useParams();

  useEffect(() => {
    const getEmployee = async () => {
      try {
        let fetchEmp = await fetch(
          `http://localhost:8080/api/getemployeebyid/${eid}`
        );
        let jsonData = await fetchEmp.json();
        setEmployee(jsonData);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    getEmployee();
  },[eid]);

  return (
    <>
      <h2>Employee Name : {employee.ename}</h2>
      <h2>Employee Age : {employee.eage}</h2>
      <h2>Employee Salary : ₹ {employee.esalary}</h2>
    </>
  );
};

export default ShowEmployee;
