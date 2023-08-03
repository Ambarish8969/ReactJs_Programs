import React, { useState } from 'react'

const Home = () => {
  let [time,setTime]=useState(new Date().toLocaleTimeString())

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);

  return (
    <>
        <h1>{time}</h1>
        <ul>
            <li>Add Employee <a href="/addemployee">/addemployee</a></li>
            <li>Get Employeee <a href="/getemployees">/getemployees</a></li>
            <li>Get Employee By Id <a href="/getemployeebyid">/getemployeebyid</a></li>
        </ul>
    </>
  )
}

export default Home