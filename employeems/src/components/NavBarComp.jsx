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
        <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" style={{color:"black"}}>
                Search
              </button>
            </form>
      </div>
    </>
  )
}

export default NavBarComp