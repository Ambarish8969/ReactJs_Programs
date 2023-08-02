import React, { useState } from 'react'

const Home = () => {

    let [time,setTime]=useState(new Date().toLocaleTimeString())
    
    setTimeout(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)
  return (
    <>
        <h1>{time}</h1>
        <h1>Welcome to Vehicle Management System</h1>
        <ul>
            <li>To add a Vehicle : "/addvehicle"</li>
            <li>To get all Vehicles : "/getvehicles"</li>
        </ul>
    </>
  )
}

export default Home