import {useState } from "react";
function App() {
  return (
    <>
      <h1>Login</h1>
      <MyLogIn />
    </>
  );
}

function MyLogIn() {
  let [user ,setUser] = useState[{user:"",password:""}];

  let handleUsernameAction = (e) => {
  let newuser ={...user,username:e.target.value};
  setUser(newuser);
  }

  let handlePasswordAction = (e) => {
    let newuser ={...user,password:e.target.value};
    setUser(newuser);
    }
  let loginAction =async () =>{
    let url= `http://localhost:4000/adduser?username=${user.username}&password=${user.password}`;
    await fetch(url);

   let newuser ={
    username:"",
    password:""
   }
setUser(newuser);

    setUser()

 }
  return (
    <>
      <input
        className="form-control mb-1"
        style={{ borderBlockColor: "black" }}
        type="text"
        placeholder="Enter Username"
        onChange={handleUsernameAction}
        value={user.username}
        
      />
      <input
        className="form-control mb-1"
        style={{ borderBlockColor: "black" }}
        type="password"
        placeholder="Enter password"
        onChange={handlePasswordAction}
        value={user.password}
      />

      <input
        className="form-control bg-danger text-light fw-bold "
        type="button"
        value="Login"
       onClick={loginAction}
      />
    </>
  );
}

export default App;
