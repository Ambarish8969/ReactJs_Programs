import React, { useState} from "react";
import Axios from "axios";

const AddVehile = () => {
  let [vehicle, setVehicle] = useState({
    vname: "",
    vprice: "",
    vmodel: "",
    vcolor: "",
  });

  // function submit(e){
  //   e.preventDefault();
  //   Axios.post("http://localhost:8080/api/addvehicle",{
  //     vname:vehicle.vname,
  //     vprice:vehicle.vprice,
  //     vmodel:vehicle.vmodel,
  //     vcolor:vehicle.vcolor
  //   }).then(res=>{
  //     console.log(res.data)
  //   })
  // }

 async function submit(e){
    e.preventDefault();
    await fetch("http://localhost:8080/api/addvehicle",{
      vname:vehicle.vname,
      vprice:vehicle.vprice,
      vmodel:vehicle.vmodel,
      vcolor:vehicle.vcolor
    }).then(re=>{
      console.log(re.data)
      setVehicle(JSON)
    })
  }

  function handle(e){
    const newdata={...vehicle}
    newdata[e.target.id]=e.target.value
    setVehicle(newdata)
    console.log(newdata)
  }
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="vname">VName : </label>
        <input
          type="text"
          value={vehicle.vname}
          name="vname"
          id="vname"
          onChange={(e)=>handle(e)}
        />
        <br />
        <br />
        <label htmlFor="vprice">VPrice : </label>
        <input
          type="number"
          value={vehicle.vprice}
          name="vprice"
          id="vprice"
          onChange={(e)=>handle(e)}
        />
        <br />
        <br />
        <label htmlFor="vmodel">VModel : </label>
        <input
          type="number"
          value={vehicle.vmodel}
          name="vmodel"
          id="vmodel"
          onChange={(e)=>handle(e)}
        />
        <br />
        <br />
        <label htmlFor="vcolor">VColor : </label>
        <input
          type="text"
          value={vehicle.vcolor}
          name="vcolor"
          id="vcolor"
          onChange={(e)=>handle(e)}
        />
        <br />
        <br />
        <button type="submit" >Submit</button>
      </form>
    </>
  );
};

export default AddVehile;
