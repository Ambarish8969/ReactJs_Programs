import React, { useState } from "react";

const Registration = () => {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const changePerson = (event) => {
    let newData = { ...person };
    newData[event.target.id] = event.target.value;
    setPerson(newData);
  };

  const requestoptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fname: person.fname,
      lname: person.lname,
      mobile: person.mobile,
      email: person.email,
      password: person.password,
    }),
  };

  const handlePerson = async (event) => {
    // event.preventDefault();
    try{
      let postedData=await fetch("http://localhost:8080/addperson", requestoptions);
      let jsonyfy=postedData.json();
      console.log(jsonyfy)
    }catch(error){
      console.log("Add aagvato person yen error aiti check mad",error);
    }
    
  };

  return (
    <>
      <form onSubmit={handlePerson}>
        <br />
        <input
          type="text"
          placeholder="First Name"
          id="fname"
          name="fname"
          value={person.fname}
          onChange={(e) => changePerson(e)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lname"
          name="lname"
          value={person.lname}
          onChange={(e) => changePerson(e)}
          required
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Mobile"
          id="mobile"
          name="mobile"
          value={person.mobile}
          onChange={(e) => changePerson(e)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={person.email}
          onChange={(e) => changePerson(e)}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={person.password}
          onChange={(e) => changePerson(e)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Registration;
