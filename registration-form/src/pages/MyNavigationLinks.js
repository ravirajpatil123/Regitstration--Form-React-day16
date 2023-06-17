import { Link } from "react-router-dom";
import {Container,Nav,Navbar} from "react-bootstrap";

function MyNavigationLinks() {
  return (
    <>
      {/* <Link to={"/home"}>Home |</Link>
      <Link to={"/todo"}>Todo |</Link>
      <Link to={"/todo-list"}>Todo List |</Link>
      <Link to={"/registration"}>Registration |</Link>
      <Link to={"/user-list"}>User List |</Link>
      <Link to={"/validation"}>validation Demo |</Link> */}

      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/todo"}>Todo</Nav.Link>
            <Nav.Link as={Link} to={"/todo-list"}>Todo List</Nav.Link>
            <Nav.Link  as={Link} to={"/registration"}>Registration</Nav.Link>
            <Nav.Link as={Link} to={"/user-list"}>User List</Nav.Link>
            <Nav.Link  as={Link} to={"/validation"}>Validation Demo</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavigationLinks;