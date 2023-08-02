import React, { useState } from 'react';

const GetByIdApi = () => {

    let [vid,setVid]=useState();

    const handle=(e)=>{
        setVid(e.target.value)
        console.log(e.target.value)
    }

    const getId = async (e)=>{
        e.preventDefault();
        let getData=await fetch(`http://localhost:8080/api/getvehiclebyid`,{
            method:'GET',
            headers:{'Content-Type': 'application/json' },
            body:JSON.stringify({
                vid:vid
            })
        })
        let getJson=await getData.json();
        console.log(getJson)
    }

  return (
    <>
        <form action="">
            <input type="number" placeholder='Enter vehicle Id' value={vid} onChange={(e)=>handle(e)}/>
            <button onClick={getId}>Submit</button>
        </form>
    </>
  )
}

export default GetByIdApi