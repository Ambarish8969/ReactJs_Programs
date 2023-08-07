import React, { useState } from "react";
import './Weatherapi.css'

const Weatherapi = () => {
  const API_KEY = "12ba8c77be2f472aaaf51022230708";

  let [city, setCity] = useState();

  let [temperature, setTemperature] = useState();

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const fetchData = async (event) => {
    event.preventDefault();
    try {
      let data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
      );
      let jsonyfy = await data.json();
      setTemperature(jsonyfy.current.temp_c);
      console.log(jsonyfy.current.temp_c);
    } catch (error) {
      console.log(error);
    }
  };

  const changeReset=()=>{
    setCity("")
    setTemperature(0)
  }

  return (
    <>
      <div
        className="card"
        style={{
          width: "20rem",
          margin: "auto",
          border: "1px solid black",
          backgroundColor: "orange",
          textAlign: "center",
          marginTop:"200px"
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Weather Check</h5>
          <form onSubmit={fetchData} id="formhide">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter City Name"
              id="city_name"
              name="city_name"
              value={city}
              onChange={changeCity}
            />
            <br />
            <button className="btn btn-info" type="submit">Get Weather</button>
          </form>
          {temperature !== null && (
            <div>
              <h2>{city}</h2>
              <p>Temperature: <h3>{temperature}°C</h3> </p>
            </div>
          )}
          
          <button className="btn btn-info" onClick={changeReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Weatherapi;
