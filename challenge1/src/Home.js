import React, {useEffect } from "react";
import axios from "axios";

function Home() {
  
  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    await axios
      .get("http://localhost:8080/api/getallvehicles")
      .then((response) => console.log(response.data));
  };

  return <h1>Hello Ambi</h1>;
}
export default Home;