import { Link } from "react-router-dom";

function MyNavigationLinks() {
  return (
    <>
      <Link to={"/home"}>Home |</Link>
      <Link to={"/todo"}>Todo |</Link>
      <Link to={"/todo-list"}>Todo List |</Link>
      <Link to={"/registration"}>Registration</Link>
    </>
  );
}

export default MyNavigationLinks;