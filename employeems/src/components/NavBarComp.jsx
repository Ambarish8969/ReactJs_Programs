import React from 'react'
import './NavBarComp.css'


const NavBarComp = () => {

  return (
    <>
        <div className="navbar">
        <ul className="ul-list">
          <li className="list-items">
            <a className="link-items" href="/home">
              Home
            </a>
          </li>
          <li className="list-items" onClick={()=>{}}>
            <a className="link-items"  href="/addemployee" >
              Add Employee
            </a>
          </li>
          <li className="list-items">
            <a className="link-items"  href="/getemployees">
              Get Employees
            </a>
          </li>
          <li className="list-items">
            <a className="link-items" href="/getemployeebyid">
              Get Employee By Id
            </a>
          </li>
          <li className="list-items">
            <a className="link-items" href="/updateempbyid">
              Update Employee By Id
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBarComp