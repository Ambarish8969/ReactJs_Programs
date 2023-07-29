import React from "react";
import { useState } from "react";

function Form() {
  let [name, setName] = useState();
  let [newName,setNewName]=useState();

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let [newEmail, setNewEmail] = useState();
  let [newPassword, setNewPassword] = useState();

  const changeName =(event)=>{
    setName(event.target.value)
  }

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const EmailAndPassword = (event) => {
    // to prevent the default behavior of form tag we use preventDefault()
    event.preventDefault();

    setNewName(name);
    setNewEmail(email);
    setNewPassword(password);

    setName("")
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h1>
        Hello {newName} {newEmail} {newPassword}
      </h1>
      <form onSubmit={EmailAndPassword}>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" onChange={changeName} value={name} />
        <br />
        <br />
        <label htmlFor="email-id">Email : </label>
        <input type="text" id="email-id" onChange={changeEmail} value={email} />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          onChange={changePassword}
          value={password}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
