import { Container, Navbar } from "react-bootstrap";
import "./styles.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Si ottiene l'anno corrente

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-bottom" id="footer">
      <Container className="d-flex justify-content-end">
        <Navbar.Brand id="title">© {currentYear} by Alice Ibba</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
