import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cssStyle = {
  border: "1px solid black",
};

const GetEmployees = () => {
  let [employees, setEmployees] = useState([]);
  const navigate=useNavigate();

  const getEmployees = async () => {
    let fetchData = await fetch("http://localhost:8080/api/getemployees");
    let jsonyfyFetchedData = await fetchData.json();
    console.log(jsonyfyFetchedData);
    setEmployees(jsonyfyFetchedData);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const deleteFunction = async (eid) => {
    try {
      let deleteData = await fetch(
        `http://localhost:8080/api/deleteemployee/${eid}`,
        {
          method: "DELETE", // Specify the DELETE method
        }
      );
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const editFunction =(eid)=>{
    navigate(`/updateemployee/${eid}`)

  }

  return (
    <>
      <table style={cssStyle}>
        <tr>
          <th style={cssStyle}>Employee Id</th>
          <th style={cssStyle}>Employee Name</th>
          <th style={cssStyle}>Employee Age</th>
          <th style={cssStyle}>Employee Salary</th>
        </tr>
        {employees.map((currentEmployee) => {
          return (
            <>
              <tr key={currentEmployee.eid}>
                <td style={cssStyle}>{currentEmployee.eid}</td>
                <td style={cssStyle}>{currentEmployee.ename}</td>
                <td style={cssStyle}>{currentEmployee.eage}</td>
                <td style={cssStyle}>{currentEmployee.esalary}</td>
                <button onClick={() => deleteFunction(currentEmployee.eid)}>
                  Delete
                </button>
                <button onClick={() =>editFunction(currentEmployee.eid)}>Edit</button>
              </tr>
            </>
          );
        })}
      </table>

      <button onClick={()=>{
        navigate("/")
      }}>Home Page</button>
    </>
  );
};

export default GetEmployees;
