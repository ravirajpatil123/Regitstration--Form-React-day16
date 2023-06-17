import { useRef, useState } from "react";

function MyRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status !== 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <form ref={formRef} className="needs-validation">
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={user.username}
          onChange={handlerUsernameAction}
          required
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={user.password}
          onChange={handlerPasswordAction}
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          value={user.email}
          onChange={handlerEmailAction}
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter mobile"
          value={user.mobile}
          onChange={handlerMobileAction}
          required
        />
        <input
          type="button"
          value="Register"
          className="w-100"
          onClick={registerAction}
        />
      </form>

      {isSuccess && <div className="alert alert-success">Success</div>}
      {isError && <div className="alert alert-danger">Error</div>}
    </>
  );
}

export default MyRegistration;