import React, { useState } from 'react'
import NavBarComp from "./NavBarComp";
import FooterComp from "./FooterComp";

const Home = () => {
  let [time,setTime]=useState(new Date().toLocaleTimeString())
  
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);
  
  return (
    <>
        <NavBarComp />
        <h1>{time}</h1>
        <FooterComp />
    </>
  )
}

export default Home