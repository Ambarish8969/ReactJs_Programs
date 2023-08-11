import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    login_email: "",
    login_password: "",
  });
  const changeLogin = (event) => {
    let newdata = { ...login };
    newdata[event.target.id] = event.target.value;
    setLogin(newdata);
  };
  const handleLogin =async (e) => {
    // e.preventDefault();
    try{
      let postedEmail=await fetch(`http://localhost:8080/validate/${login.login_email}`)
      let jsonyfy=await postedEmail.json()
      if(jsonyfy.password !== login.login_password){
        alert("Please Enter Valid credentials.")
      }else{
        alert("logged in successfully")
      }
    }catch(error){
      alert("email does not exists")
      console.log("post aagvat ada",error)
    }
    
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <br />
        <input
          type="text"
          placeholder="Email"
          id="login_email"
          name="login_email"
          value={login.login_email}
          required
          onChange={(e) => changeLogin(e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Password"
          id="login_password"
          name="login_password"
          value={login.login_password}
          required
          onChange={(e) => changeLogin(e)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
