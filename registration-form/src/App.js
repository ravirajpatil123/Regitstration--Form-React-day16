import { useState } from "react";
function App() {
  return (
    <>
      <h1>Registraion</h1>
      <MyRegistration />
    </>
  );
}

function MyRegistration() {
  let [user, setUser] =
    useState({ username: "", password: "", email: "", mobile: "" });

  let handleChangeUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  let handleChangePasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };
  let handleChangeEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handleChangeMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };
  let registerAction = async () => {
    let url =
      `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
      await fetch(url);
    let newuser = { 
      username: "",
      password: "",
      email: "",
      mobile: "",
    };
    setUser(newuser);
    
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Username"
        value={user.username}
        onChange={handleChangeUsernameAction}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        value={user.password}
        onChange={handleChangePasswordAction}
      />

      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={user.email}
        onChange={handleChangeEmailAction}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Enter Mobile"
        value={user.mobile}
        onChange={handleChangeMobileAction}
      />

      <input
        type="button"
        className="w-100"
        value="Register"
        onClick={registerAction}
      />
    </>
  );
}
export default App;
