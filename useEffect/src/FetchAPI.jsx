import React, { useEffect, useState } from "react";

const cssStyle = {
  border: "1px solid black",
};

const FetchAPI = () => {
  const [vehicles, setVehicles] = useState([]);
  const getData = async () => {
    const vehicleData = await fetch("http://localhost:8080/api/getallvehicles");
    const result = await vehicleData.json();
    console.log(result);
    setVehicles(result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table style={cssStyle}>
        <tr>
          <th style={cssStyle}>Vehicle Name</th>
          <th style={cssStyle}>Vehicle Price</th>
          <th style={cssStyle}>Vehicle Model</th>
          <th style={cssStyle}>Vehicle Color</th>
        </tr>

        {vehicles.map((currElement) => {
          return (
            <>
              <tr key={currElement.vid}>
                <td style={cssStyle}>{currElement.vname}</td>
                <td style={cssStyle}>{currElement.vprice}</td>
                <td style={cssStyle}>{currElement.vmodel}</td>
                <td style={cssStyle}>{currElement.vcolor}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default FetchAPI;
