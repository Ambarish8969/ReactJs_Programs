import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarComp from "./NavBarComp";
import FooterComp from "./FooterComp";

const UpdateEmpById = () => {
    let [eid,setEid]=useState()
    let navigate=useNavigate();

    const handleChange=(event)=>{
        setEid(event.target.value)
    }
    const handleSubmit=()=>{ 

          navigate(`/updateemployee/${eid}`)
    }
  return (
    <>
    <NavBarComp />
        <form onSubmit={handleSubmit}>
            <input type="number" id='eid' name='eid' onChange={handleChange} value={eid} placeholder='Enter Employee Id' />
            <button style={{backgroundColor:"blue",color:'white'}} type='submit'>Go to Update</button>
        </form>
        <FooterComp />
    </>
  )
}

export default UpdateEmpById