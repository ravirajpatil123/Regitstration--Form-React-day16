import { useState } from "react";
function App() {
  return (
    <>
      <h1>Registration</h1>
      <MyRegistration />
    </>
  );
}

function MyRegistration() {
  let [user, setUser] =
    useState[{ username: "", password: "", email: "", mobile: "" }];

  let handleUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  let handlePasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };
  let handleEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handleMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };
  let registerAction = async () => {
    let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
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
       className="form-control"
        type="text"
        placeholder="Enter Username"
        value={user.username}
        onChange={handleUsernameAction}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        value={user.password}
        onChange={handlePasswordAction}
      />

      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={user.email}
        onChange={handleEmailAction}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Enter Mobile"
        value={user.mobile}
        onChange={handleMobileAction}
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
