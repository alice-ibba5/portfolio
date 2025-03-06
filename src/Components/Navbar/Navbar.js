import { Container, Navbar } from "react-bootstrap";
import "./styles.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" id="navbar">
      <Container>
        <Navbar.Brand href="/" id="title">
          ALICE IBBA | FULL STACK DEVELOPER
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
